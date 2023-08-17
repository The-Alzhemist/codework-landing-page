import Head from "next/head";
import React from "react";
import { MetaTagInterface } from "./interface";

const MetaTag = (props: MetaTagInterface) => {
  const { title, description, image } = props;
  let defaultMetaTitle = ""
  let defaultMetaDescription = ""
  let defaultMetaImage = ""
  
  if(!title) {
    defaultMetaTitle = "CodeWork Tech | Turning Ideas into Powerful Software Solutions"
  } 
  if(!description) {
    defaultMetaDescription = "Bring innovation to life with our innovative software solutions. From UX/UI design to digital transformation consultant, we deliver excellence in scalability, reliability, and creativity."
  }
  if(image) {
    defaultMetaImage = "https://codework-tech.web.app/seo/codework-meta-cover.png"
  }


  return (
    <Head>
      <title>{title ? title :  defaultMetaTitle}</title>
      <meta name="description" content={description ? description : defaultMetaDescription} />

      {/* Og: tag for facebook and linkedIn share link */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description ? description : defaultMetaDescription} />
      <meta
        property="og:image"
        content={image ? image : 'https://fakeimg.pl/250x100/'}
      />

      {/* X.com (Twitter) */}
      <meta name="twitter:title" content={title ? title : defaultMetaTitle} />
      <meta name="twitter:description" content={description ? description : defaultMetaDescription} />
      <meta name="twitter:image" content={image ? image : defaultMetaImage} />


      <link rel="icon" href="/seo/codework-title-browser-white.ico" type="image/ico" sizes="32x32" />

    </Head>
  );
};

export default MetaTag;
