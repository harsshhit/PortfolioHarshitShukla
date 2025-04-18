/**
 * SEO utility functions for managing meta tags and document properties
 */

/**
 * Updates the page title and meta description
 * @param {string} title - The page title
 * @param {string} description - The page description
 */
export const updateMetaTags = (title, description) => {
  // Update document title
  document.title = title ? `${title} | Harshit Shukla` : 'Harshit Shukla | Software Developer';
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description || 'Harshit Shukla - Software Developer specializing in React, Node.js, and modern web technologies.');
  }
  
  // Update Open Graph and Twitter meta tags
  updateSocialMetaTags(title, description);
};

/**
 * Updates Open Graph and Twitter meta tags for social sharing
 * @param {string} title - The page title
 * @param {string} description - The page description
 */
const updateSocialMetaTags = (title, description) => {
  // Default values
  const defaultTitle = 'Harshit Shukla | Software Developer';
  const defaultDescription = 'Software Developer specializing in React, Node.js, and modern web technologies.';
  
  // Update Open Graph meta tags
  updateMetaTag('og:title', title || defaultTitle);
  updateMetaTag('og:description', description || defaultDescription);
  
  // Update Twitter meta tags
  updateMetaTag('twitter:title', title || defaultTitle);
  updateMetaTag('twitter:description', description || defaultDescription);
};

/**
 * Helper function to update a specific meta tag
 * @param {string} name - The meta tag name or property
 * @param {string} content - The content to set
 */
const updateMetaTag = (name, content) => {
  // Check if it's a property (og:, twitter:) or name attribute
  const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
  const selector = isProperty 
    ? `meta[property="${name}"]` 
    : `meta[name="${name}"]`;
  
  const metaTag = document.querySelector(selector);
  
  if (metaTag) {
    metaTag.setAttribute('content', content);
  }
};

/**
 * Sets the canonical URL for the current page
 * @param {string} path - The path to set as canonical (without domain)
 */
export const setCanonicalUrl = (path = '') => {
  // Base URL - replace with your actual domain in production
  const baseUrl = 'https://harshitshukla.com';
  const url = path ? `${baseUrl}/${path.replace(/^\//, '')}` : baseUrl;
  
  // Look for existing canonical tag
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  
  if (canonicalTag) {
    // Update existing tag
    canonicalTag.setAttribute('href', url);
  } else {
    // Create new tag if it doesn't exist
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    canonicalTag.setAttribute('href', url);
    document.head.appendChild(canonicalTag);
  }
};

/**
 * Utility to set structured data (JSON-LD) for better SEO
 * @param {Object} data - The structured data object
 */
export const setStructuredData = (data) => {
  // Remove any existing JSON-LD scripts
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());
  
  // Create new script element
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(data);
  
  // Add to document head
  document.head.appendChild(script);
};

/**
 * Creates person structured data for personal portfolio
 * @returns {Object} - Person structured data object
 */
export const createPersonStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Harshit Shukla",
    "url": "https://harshitshukla.com",
    "image": "https://harshitshukla.com/profile.png",
    "jobTitle": "Software Developer",
    "sameAs": [
      "https://github.com/harsshhit",
      "https://twitter.com/theharryom",
      "https://linkedin.com/in/harshitshukla" // Update with actual LinkedIn URL
    ],
    "description": "Software Developer specializing in React, Node.js, and modern web technologies."
  };
};
