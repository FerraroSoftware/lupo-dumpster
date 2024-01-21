import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components) {
  return {
    // Headers
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "2.25rem", // or use "36px"
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "white",
          "@media (min-width: 640px)": { fontSize: "3rem" }, // This is a simplistic representation; actual media queries in inline styles might need to be handled differently or through a CSS sheet.
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "1.5em",
          fontWeight: "bold",
          color: "white",
          textDecoration: "underline",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontSize: "1.25em",
          fontWeight: "bold",
          color: "white",
          paddingBottom: "5px",
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          fontSize: "1.25em",
          fontWeight: "bold",
          color: "white",
          paddingBottom: "5px",
        }}
      >
        {children}
      </h4>
    ),
    // ... (include h3 to h6 with similar styling and padding)

    // Paragraph
    p: ({ children }) => (
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          paddingBottom: "10px",
          marginTop: "6px",
          color: "#f4f4f5",
        }}
      >
        {children}
      </p>
    ),

    // Links
    // a: ({ children, href }) => (
    //   <a href={href} style={{ color: "#22c55e", textDecoration: "none" }}>
    //     {children}
    //   </a>
    // ),

    a: ({ href, children }) => (
      <Link href={href} style={{ color: "#dc2626", textDecoration: "none" }}>
        {children}
      </Link>
    ),

    // Unordered Lists
    ul: ({ children }) => (
      <ul
        style={{
          listStyleType: "circle",
          marginLeft: "20px",
          padding: "5px",
          color: "#f4f4f5",
        }}
      >
        {children}
      </ul>
    ),
    // Ordered Lists
    ol: ({ children }) => (
      <ol
        style={{
          listStyleType: "decimal",
          marginLeft: "20px",
          padding: "5px",
          color: "#f4f4f5",
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li style={{ fontSize: "16px", padding: "5px 0", color: "#f4f4f5" }}>
        {children}
      </li>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #ddd",
          marginLeft: 0,
          paddingLeft: "1em",
          color: "#666",
          padding: "10px",
          color: "white",
        }}
      >
        {children}
      </blockquote>
    ),

    // Images
    img: (props) => (
      <Image
        width={480}
        height={480}
        sizes="100vw"
        style={{ width: "100%", height: "auto", padding: "10px" }}
        {...props}
      />
    ),

    ...components,
  };
}
