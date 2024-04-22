import HeaderView from "@/components/HeaderView"
import Button from "@/components/Button"
import Markdown from "@/components/Markdown"
import { MousePointerClickIcon, MailIcon } from "lucide-react"

const { createBucketClient } = require("@cosmicjs/sdk")

const BUCKET_SLUG = process.env.NEXT_PUBLIC_COSMIC_SLUG
const READ_KEY = process.env.NEXT_PUBLIC_COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY,
})

export async function generateMetadata() {
  const metaTitle = "Plugins.run | About"
  const metaDescription = "A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free."
  const metaImage = "https://imgix.cosmicjs.com/a8c215c0-927a-11ec-9a4e-05fc85d83574-meta.png"
  const metaUrl = "https://plugins.run/about"

  return {
    metadataBase: new URL(metaUrl),
    alternates: {
      canonical: "/",
    },
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      type: "website",
      siteName: "KEJK",
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
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      siteId: "24575075",
      creator: "@_kejk",
      creatorId: "24575075",
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
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function About() {
  const data = await cosmic.objects
    .findOne({
      id: "641b3fead0ab1034f2469bf2",
    })
    .props("title,metadata")

  const about = await data.object
  return (
    <div className="mx-auto w-full max-w-3xl">
      <HeaderView>{about.title}</HeaderView>
      <div className="px-4 lg:px-0">
        <Markdown content={about.metadata.subtitle} className="text-left md:text-center pt-6 mb-8" />
        <Markdown content={about.metadata.content} />
        <div className="mx-auto mt-8 flex w-full flex-col justify-center space-y-2 pt-8 md:flex-row md:space-x-4 md:space-y-0">
          <a href="mailto:karl@kejk.tech?subject=Let's chat">
            <Button bgColor="neutral-100" textColor="black" borderColor="neutral-200" darkBgColor="neutral-800" darkTextColor="white" darkBorderColor="neutral-700">
              <MailIcon width={16} height={16} />
              Contact me
            </Button>
          </a>
          <a href="mailto:karl@kejk.tech?subject=Plugin request">
            <Button bgColor="neutral-100" textColor="black" borderColor="neutral-200" darkBgColor="neutral-800" darkTextColor="white" darkBorderColor="neutral-700">
              <MousePointerClickIcon width={16} height={16} />
              Request a plugin
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
