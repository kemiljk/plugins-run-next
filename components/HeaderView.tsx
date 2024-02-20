import React from 'react';

export default function HeaderView({ children }: { children: React.ReactNode }) {
  return (
    <header className='mx-auto w-full'>
      <div className='flex w-full justify-start px-4 pt-12 sm:px-6 md:justify-center lg:px-8'>
        <h1 className='text-left scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl text-neutral-900 dark:text-neutral-200 md:text-center'>{children}</h1>
      </div>
    </header>
  );
}
