import React from 'react';
import Image from 'next/legacy/image';
import { HeartIcon, ArrowDownIcon } from 'lucide-react';
import { PluginCardProps } from '../lib/types';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const PluginCard: React.FC<PluginCardProps> = ({ subtitle, image, link, tags, installs, likes }) => {
  const kFormatter = (num: number) => {
  const formattedNum = Math.abs(num) > 999 ? (Math.sign(num) * Math.abs(num)) / 1000 : Math.sign(num) * Math.abs(num);
  return formattedNum > 999 ? formattedNum.toFixed(1) : formattedNum;
};

  return (
    <a
      className='flex h-full cursor-default flex-col space-y-2 rounded-xl border border-neutral-200 p-4 transition-all ease-in-out  hover:border-teal-600 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900
    '
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <div className='flex h-max w-full justify-between'>
        <Image className='rounded' width={500} height={250} objectFit='cover' src={image} alt='Image of the plugin icon' />
      </div>
      <div className='flex h-full w-full flex-col justify-start'>
        <p className='block h-max text-sm leading-relaxed tracking-wide text-neutral-500 dark:text-neutral-400 md:text-base'>{subtitle}</p>
      </div>
      <div className='flex items-center justify-between pt-4'>
        <div className='flex w-full items-center gap-2'>
          <div className='flex w-max items-center justify-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-teal-700  dark:border-teal-900 dark:bg-teal-900/30 dark:text-teal-200'>
            <ArrowDownIcon className='mr-2 h-3 w-3 text-teal-700  dark:text-teal-200' />
            <span>{kFormatter(installs)}</span>
          </div>
          <div className='flex w-max items-center justify-center rounded-full border border-red-200 bg-red-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-red-700  dark:border-red-900 dark:bg-red-900/30 dark:text-red-200'>
            <HeartIcon className='mr-2 h-3 w-3 text-red-700  dark:text-red-200' />
            <span>{kFormatter(likes)}</span>
          </div>
        </div>
        <div>
          {/* @ts-ignore */}
          {tags == 'design' && <div className={classNames('flex w-max items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200')}>{'Figma'}</div>}
          {/* @ts-ignore */}
          {tags == 'whiteboard' && <div className={classNames('flex w-max items-center justify-center rounded-lg border border-pink-200 bg-pink-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-pink-700 dark:border-pink-900 dark:bg-pink-900/30 dark:text-pink-200')}>{'FigJam'}</div>}
          {/* @ts-ignore */}
          {tags == 'design_and_whiteboard' && (
            <div className='flex items-center justify-start space-x-2'>
              <div className={classNames('flex w-max items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200')}>{'Figma'}</div>
              <div className={classNames('flex w-max items-center justify-center rounded-lg border border-pink-200 bg-pink-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-pink-700 dark:border-pink-900 dark:bg-pink-900/30 dark:text-pink-200')}>{'FigJam'}</div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default PluginCard;
