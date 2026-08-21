import React, { useEffect } from 'react';

const SEO = ({ title, description, canonical }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | Logo Valley Studio`;
    }

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      } else {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        metaDesc.content = description;
        document.head.appendChild(metaDesc);
      }
    }
  }, [title, description, canonical]);

  return null;
};

export default SEO;
