import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  // ইমেজ সব সময় আপনার ডোমেইন থেকে লোড হবে
  image = 'https://kafaahbd.com/home.jpg', 
  url = 'https://kafaahbd.com',
  keywords = 'study, kafaah, islam, bd, education, islamic technology, ssc, hsc, admission, bangladesh, kafaahbd'
}) => {
  const siteTitle = `${title} | Kafa'ah - Islamic & Multiproject Company`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="og:image:alt" content="Kafa'ah Image" />
      <meta name="twitter:site" content="@kafaahbd" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;