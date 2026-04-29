import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string; 
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
  breadcrumbs?: { name: string; url: string }[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  // ডিফল্ট ইমেজ পাথ
  image = 'https://kafaahbd.com/home.jpg', 
  // পাথ ডাইনামিক করার জন্য মেইন ডোমেইন রাখা হলো
  url = '',
  keywords = 'kafaah, study, islam, bd, education, islamic technology, ssc, hsc, admission, bangladesh, kafaahbd',
  breadcrumbs = []
}) => {
  const siteTitle = `${title} | Kafa'ah - Islamic & Multiproject Company`;
  
  // ডাইনামিক ইউআরএল কনস্ট্রাকশন (যদি url প্রপস না থাকে তবে মেইন ডোমেইন বসবে)
  const siteBase = "https://kafaahbd.com";
  const finalUrl = url ? (url.startsWith('http') ? url : `${siteBase}${url}`) : siteBase;

  const breadcrumbsSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${siteBase}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@kafaahbd" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={finalUrl} />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": siteTitle,
          "description": description,
          "url": finalUrl
        })}
      </script>
      {breadcrumbsSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;