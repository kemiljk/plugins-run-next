import markdownStyles from "../styles/markdown-styles.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/legacy/image";
import classnames from "classnames";

// our components object lets us pass custom React components into our ReactMarkdown.
// Great use cases here are making the <a> tags a little safer as well as utilizing Next Image. Lazy loading and faster FCP!!
const components = {
  a: (a) => {
    return (
      <a
        href={a.href}
        rel="noopener noreferrer"
        target="_blank"
        className="transition-opacity hover:opacity-70"
      >
        {a.children}
      </a>
    );
  },

  img: (image) => {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={400}
        height={300}
        quality={50}
        layout="responsive"
        objectFit="contain"
        objectPosition="center"
      />
    );
  },
};

// Feel free to reference the react-markdown GitHub page: https://github.com/remarkjs/react-markdown
// If there is something you need to tweak with your markdown, there's a good chance that they have a plugin for it!

const Markdown = ({ content, ...props }) => {
  // We pass the content prop into our ReactMarkdown component as children.  Whether you have a single heading, or an entire article, it will all be parsed.
  return (
    <ReactMarkdown
      components={components}
      {...props}
      // Code your design system however you'd like within the 'markdown-styles.module.css' file. You can set default styles in there that will applied universally, though you are also able to pass styles in through the 'className' prop. 'className' styles will be applied to a div wrapping the element.
      className={classnames(
        markdownStyles["markdown"],
        props.className ? props.className : null
      )}
    >
      {content}
    </ReactMarkdown>
  );
};
export default Markdown;
