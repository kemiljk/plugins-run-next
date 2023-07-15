import React from "react";
import Head from "next/head";
import HeaderView from "../components/HeaderView";
import SubheaderView from "../components/SubheaderView";
import PluginCard from "../components/PluginCard";
import Logo from "../components/Logo";

export const revalidate = 3600

export default async function Home() {
  const res = await fetch(
    "https://www.figma.com/api/plugins/profile/3878431?",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        tsid: "ZVgBIQvPqV79R7yi",
        "x-csrf-bypass": "yes",
        "x-figma-user-id": "826724855479516028",
        cookie:
          "_y=51e9f855-9fc3-4338-a91d-9dce7ab766ad; _shopify_y=51e9f855-9fc3-4338-a91d-9dce7ab766ad; figma.session=BAh7CEkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkUyMmFlZjg5OWZlMzBhNzg2N2EyYTUzMDRmZDQ4MGE3ZGY3MTQ1ZTM2NzUxZGE1OGMzYmNhYzUxMDRhYzIyYmNkBjsARkkiCmZsYXNoBjsARnsASSINYXBwX2F1dGgGOwBGewc6B2lkSSIpNGNmM2FmZDMtZjI1Zi00YTM4LWJhOWMtODI0ZGM0ZDNlYzQ1BjsAVDoNZ19zZWNyZXRJIiZJQUNucmNtaWxyMlR6TXNnRjhrUzNOZlBkU0JHTGV4dkwGOwBG--b89b79e7f09a59fac3da0e572f57e7694c2a4269; ajs_anonymous_id=%2282a1b9cd-d5b5-4405-b809-ecc959e3b81c%22; __Host-figma.authn=%7B%22826724855479516028%22%3A%22figtkn.authn.Pxiqdw3CdrSlHhE1nSR9vE%22%7D; __Host-figma.embed=%7B%22826724855479516028%22%3A%22figtkn.embed.lJKRuo2x1fBkSCQ5jpHvKy%22%7D; figma.mst=1; local_experiments=%22e30=%22; recent_user_data=%22eyJjb21tdW5pdHlVc2VySWQiOiI4MjY3MjQ4NTU0Nzk1MTYwMjgiLCJjb21tdW5pdHlQcm9maWxlSWQiOiIzODc4NDMxIiwiZmlsZUJyb3dzZXJVc2VySWQiOiI4MjY3MjQ4NTU0Nzk1MTYwMjgiLCJ1c2VySWRUb09yZ0lkIjp7IjgyNjcyNDg1NTQ3OTUxNjAyOCI6bnVsbH19%22; AWSALBTG=/zgyAAHqRXrJytgnBmsLaot5JfJ1oJn5t9f61tI+lcqC4BDnsWLjmmPZf05dVgjcIihUYen36KblI72Ae0wBG0AvcQ94fzX0W+1Je0xW3mEqOOSlAaBwhq1VTSUHXyYGHJI2DUJ9PhnouwHVc5phFTOVhx0IEBHtfxJxUETc3sNa; AWSALBTGCORS=/zgyAAHqRXrJytgnBmsLaot5JfJ1oJn5t9f61tI+lcqC4BDnsWLjmmPZf05dVgjcIihUYen36KblI72Ae0wBG0AvcQ94fzX0W+1Je0xW3mEqOOSlAaBwhq1VTSUHXyYGHJI2DUJ9PhnouwHVc5phFTOVhx0IEBHtfxJxUETc3sNa; AWSALB=gCGn39Dv/ECGwuc5pkDNQmzyS9nGGR2rYwcyCPMdHRovpGPE116DfElcmOO8gBUOR4Zl0bQgKk/CeuRxo89ZoNqVDkRl7EEjP8ofnYOhp6cA7dwWoy2nHX8kr+ci; AWSALBCORS=gCGn39Dv/ECGwuc5pkDNQmzyS9nGGR2rYwcyCPMdHRovpGPE116DfElcmOO8gBUOR4Zl0bQgKk/CeuRxo89ZoNqVDkRl7EEjP8ofnYOhp6cA7dwWoy2nHX8kr+ci",
        Referer: "https://www.figma.com/@_kejk",
        "Referrer-Policy": "origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );

  const stats = await res.json();

  const metaTitle = "Plugins.run | Home";
  const title = "The home for Figma utility plugins";
  const subtitle =
    "A series of free utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies.";
  const description =
    "A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free.";
  const metaImage =
    "https://imgix.cosmicjs.com/a8c215c0-927a-11ec-9a4e-05fc85d83574-meta.png";

  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content={metaTitle} />
        <meta
          name="description"
          content="A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.plugins.run" />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content="A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free."
        />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.plugins.run" />
        <meta property="twitter:title" content={metaTitle} />
        <meta
          property="twitter:description"
          content="A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free."
        />
        <meta property="twitter:image" content={metaImage} />
      </Head>
      <Logo />
      <HeaderView>{title}</HeaderView>
      <SubheaderView>{subtitle}</SubheaderView>
      <div className="px-4 md:px-0 mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        {stats.meta.map((plugin) => {
          const plugin_url = "https://www.figma.com/community/plugin/";
          const title = Object.entries(plugin.versions)[0][1].name;
          const afterRegex = /[^.]*$/;
          const subtitle = Object.entries(plugin.versions)[0][1]
            .description.substring(0, 100)
            .replace("<p>", "")
            .replace("&amp;", "&")
            .replace(afterRegex, "");
          return (
            <PluginCard
              key={plugin.id}
              link={plugin_url + plugin.id}
              image={plugin_url + plugin.id + "/icon"}
              title={title}
              subtitle={subtitle.trim()}
              installs={plugin.unique_run_count}
              likes={plugin.like_count}
              tags={plugin.editor_type}
            />
          );
        })}
      </div>
    </div>
  );
}
