const BASE_URL = "https://www.lupodumpsterrentals.com";
const DEFAULT_IMAGE = `${BASE_URL}/dumpster-rental-pros.jpg`;
const SITE_NAME = "Lupo Dumpster Rentals";

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt,
  type = "website",
  twitterHandle = "@LupoDumpster",
}) {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const absImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const alt = imageAlt || title;

  return (
    <>
      <link rel="canonical" href={url} key="canonical" />
      <meta property="og:type" content={type} key="og:type" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:image" content={absImage} key="og:image" />
      <meta property="og:image:alt" content={alt} key="og:image:alt" />
      <meta
        property="og:image:width"
        content={String(imageWidth)}
        key="og:image:width"
      />
      <meta
        property="og:image:height"
        content={String(imageHeight)}
        key="og:image:height"
      />
      <meta
        property="og:site_name"
        content={SITE_NAME}
        key="og:site_name"
      />
      <meta property="og:locale" content="en_US" key="og:locale" />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:site" content={twitterHandle} key="twitter:site" />
      <meta
        name="twitter:creator"
        content={twitterHandle}
        key="twitter:creator"
      />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={absImage} key="twitter:image" />
      <meta name="twitter:image:alt" content={alt} key="twitter:image:alt" />
    </>
  );
}
