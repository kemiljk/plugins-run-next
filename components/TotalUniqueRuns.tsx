"use client";

import { useState, useEffect } from 'react';
import { Stats } from '@/lib/types';

const TotalUniqueRuns = ({ stats }: { stats: Stats }) => {
  const [totalUniqueRunCount, setTotalUniqueRunCount] = useState(0);

  useEffect(() => {
    const total = stats.meta.reduce((acc, plugin) => acc + plugin.unique_run_count, 0);
    setTotalUniqueRunCount(total);
  }, [stats]);
  
  const formattedTotal = totalUniqueRunCount.toLocaleString('en-US');

  return (
    <span className="mx-1 font-bold">{formattedTotal}</span>
  )
}

export default TotalUniqueRuns;