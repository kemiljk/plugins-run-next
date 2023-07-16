'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import Image from 'next/image';
import Link from 'next/link';
import Spacer from './Spacer';

const tabItems = [
  {
    id: 'home',
    name: 'Home',
    href: '/',
  },
  {
    id: 'about',
    name: 'About',
    href: '/about',
  },
];

const Nav = () => {
  return (
    <div className='fixed top-0 z-50 w-screen'>
      <nav className='bg-white dark:bg-black'>
        <div className='mx-auto h-16 max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex w-full items-center justify-between pt-3'>
            <Image className='rounded-lg' height={32} width={32} src='/plugins-run.svg' alt='Logo' />
            <Tabs defaultValue='home' className='flex w-full justify-center'>
              <TabsList>
                {tabItems.map((item) => (
                  <Link href={item.href} key={item.id}>
                    <TabsTrigger value={item.id}>{item.name}</TabsTrigger>
                  </Link>
                ))}
              </TabsList>
            </Tabs>
            <Spacer />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
