import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description = "Premium private tours in Malaysia with Shahrul. Book your exclusive experience today.",
  name = "Shahrul Private Tour Guide",
  type = "website",
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>
        {title} | {name}
      </title>
      <meta name="description" content={description} />

      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
