import React from 'react';

export default function SubheaderView({ children }) {
  return (
    <div className='mx-auto max-w-3xl'>
      <div className='flex w-full justify-center px-4 py-6 sm:px-6 lg:px-8'>
        <h2 className='dark:text-neutral-4 00 text-left text-xl tracking-wide text-neutral-600 dark:text-neutral-400 md:text-center'>{children}</h2>
      </div>
    </div>
  );
}
