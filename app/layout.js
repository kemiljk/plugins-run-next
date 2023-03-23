import Nav from "../components/Nav";
import "../styles/globals.css";
import "../styles/markdown-styles.module.css";

export default function RootLayout({ children }) {
  const text = `This site, and all of my work, is dedicated to my hero, my
inspiration, and the strongest man I've ever known. My father. I love
you Dad ❤️.`;

  return (
    <html>
      <head />
      <body className="bg-white dark:bg-black">
        <div className="mb-8">
          <Nav />
          <main className="mx-auto mt-12 h-full w-full max-w-5xl justify-center">
            {children}
          </main>
          <div className="flex w-full items-center justify-center px-4 pt-16">
            <p className="w-full rounded-xl bg-neutral-100 p-4 text-center text-black dark:bg-neutral-800 dark:text-white md:w-2/3 lg:w-1/3">
              {text}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
