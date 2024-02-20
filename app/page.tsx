import React from 'react';
import HeaderView from '@/components/HeaderView';
import SubheaderView from '@/components/SubheaderView';
import PluginCard from '@/components/PluginCard';
import Logo from '@/components/Logo';
import TotalUniqueRuns from '@/components/TotalUniqueRuns';
import { Plugin, Stats } from '@/lib/types';

export const revalidate = 0;

export async function generateMetadata() {
  const metaTitle = 'Plugins.run | Home';
  const metaDescription = 'A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free.';
  const metaImage = 'https://imgix.cosmicjs.com/a8c215c0-927a-11ec-9a4e-05fc85d83574-meta.png';
  const metaUrl = 'https://plugins.run/';

  return {
    metadataBase: new URL(metaUrl),
    alternates: {
      canonical: '/',
    },
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      type: 'website',
      siteName: 'KEJK',
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      siteId: '24575075',
      creator: '@_kejk',
      creatorId: '24575075',
      images: [metaImage],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Home() {
  const res = await fetch('https://www.figma.com/api/plugins/profile/3878431?', {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      tsid: 'ZVgBIQvPqV79R7yi',
      'x-csrf-bypass': 'yes',
      'x-figma-user-id': '826724855479516028',
      Referer: 'https://www.figma.com/@_kejk',
      'Referrer-Policy': 'origin-when-cross-origin',
    },
    body: null,
    method: 'GET',
  });

  const stats: Stats = await res.json();
  const title: string = 'The home for Figma utility plugins';

  return (
    <div>
      <div className='flex w-full flex-col items-center justify-center pt-16'>
        <Logo className={'w-[300px] text-black dark:text-white'} />
      </div>
      <HeaderView>{title}</HeaderView>
      <SubheaderView>A series of free utility plugins, downloaded 
      <TotalUniqueRuns stats={stats} /> 
      times, that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies.</SubheaderView>
      <div className='mt-2 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-0'>
        {stats.meta.map((plugin: Plugin) => {
          const plugin_url = 'https://www.figma.com/community/plugin/';
          const afterRegex = /[^.]*$/;
          const subtitle = Object.entries(plugin.versions)[0][1].description.substring(0, 100).replace('<p>', '').replace('&amp;', '&').replace(afterRegex, '');
          return <PluginCard key={plugin.id} link={plugin_url + plugin.id} image={plugin.thumbnail_url} subtitle={subtitle.trim()} installs={plugin.unique_run_count} likes={plugin.like_count} tags={plugin.editor_type} />;
        })}
      </div>
    </div>
  );
}
