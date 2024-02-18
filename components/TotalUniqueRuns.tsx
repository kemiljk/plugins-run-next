"use client";

import { useState, useEffect } from 'react';
import { Stats } from '@/lib/types';

const TotalUniqueRuns = ({ stats }: Stats) => {
  const [totalUniqueRunCount, setTotalUniqueRunCount] = useState(0);

  useEffect(() => {
    const total = stats.meta.reduce((acc, plugin) => acc + plugin.unique_run_count, 0);
    setTotalUniqueRunCount(total);
  }, [stats]);

  return (
    <span>{totalUniqueRunCount}</span>
  )
}

export default TotalUniqueRuns;