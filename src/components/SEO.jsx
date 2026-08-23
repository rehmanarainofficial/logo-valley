import React, { useEffect } from 'react';

const SEO = ({ title, description, canonical, image }) => {
  useEffect(() => {
    // 1. Dynamic Document Title
    const fullTitle = title 
      ? `${title} | Logo Valley Studio` 
      : "Logo Valley | Premium Logo Design & Brand Identity Agency";
    document.title = fullTitle;

    // Default metadata values
    const defaultDesc = "Logo Valley is a premier logo design and branding agency helping businesses transform their brand identity and increase qualified leads by 3.2x.";
    const metaDescText = description || defaultDesc;
    const metaImage = image || "https://logo-valley.com/logo_valley_logo.png";
    const canonicalUrl = canonical || window.location.href;

    // Helper function to set or create meta tags
    const setMetaTag = (selector, attribute, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Meta Description
    setMetaTag("meta[name='description']", "name", "description", metaDescText);

    // 3. OpenGraph Social Tags
    setMetaTag("meta[property='og:title']", "property", "og:title", fullTitle);
    setMetaTag("meta[property='og:description']", "property", "og:description", metaDescText);
    setMetaTag("meta[property='og:image']", "property", "og:image", metaImage);
    setMetaTag("meta[property='og:url']", "property", "og:url", canonicalUrl);
    setMetaTag("meta[property='og:type']", "property", "og:type", "website");
    setMetaTag("meta[property='og:site_name']", "property", "og:site_name", "Logo Valley Studio");

    // 4. Twitter Card Tags
    setMetaTag("meta[name='twitter:card']", "name", "twitter:card", "summary_large_image");
    setMetaTag("meta[name='twitter:title']", "name", "twitter:title", fullTitle);
    setMetaTag("meta[name='twitter:description']", "name", "twitter:description", metaDescText);
    setMetaTag("meta[name='twitter:image']", "name", "twitter:image", metaImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

  }, [title, description, canonical, image]);

  return null;
};

export default SEO;
