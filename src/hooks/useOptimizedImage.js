import { useState, useEffect } from 'react';

/**
 * Custom hook for optimized image loading with lazy loading and placeholder support
 * @param {string} src - The image source URL
 * @param {string} placeholderSrc - Optional placeholder image to show while loading
 * @param {boolean} eager - Whether to load the image eagerly (for above-the-fold content)
 * @returns {Object} - Image loading state and attributes for the img element
 */
const useOptimizedImage = (src, placeholderSrc = '', eager = false) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Reset states when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);
  
  // Handle image load success
  const handleLoad = () => {
    setLoaded(true);
  };
  
  // Handle image load error
  const handleError = () => {
    setError(true);
    console.error(`Failed to load image: ${src}`);
  };
  
  // Generate srcset for responsive images if the src is a local image
  // This is a simple implementation - in a real app, you'd generate multiple sizes
  const generateSrcSet = () => {
    if (!src || src.startsWith('http') || src.startsWith('data:')) {
      return undefined;
    }
    
    // For local images, we could generate multiple sizes
    // This is a placeholder implementation
    return undefined;
  };
  
  // Image attributes to spread on the img element
  const imageAttributes = {
    src: src,
    onLoad: handleLoad,
    onError: handleError,
    loading: eager ? 'eager' : 'lazy',
    srcSet: generateSrcSet(),
    style: {
      transition: 'opacity 0.3s ease-in-out',
      opacity: loaded ? 1 : 0,
    },
  };
  
  return {
    loaded,
    error,
    imageAttributes,
    currentSrc: error ? placeholderSrc : src,
  };
};

export default useOptimizedImage;
