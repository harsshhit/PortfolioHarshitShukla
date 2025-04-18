// Web Vitals monitoring utility
// Based on https://web.dev/vitals/
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Function to report web vitals
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Call the web vitals functions
    getCLS(onPerfEntry); // Cumulative Layout Shift
    getFID(onPerfEntry); // First Input Delay
    getFCP(onPerfEntry); // First Contentful Paint
    getLCP(onPerfEntry); // Largest Contentful Paint
    getTTFB(onPerfEntry); // Time to First Byte
  }
};

// Function to log web vitals to console in development
const logWebVitals = (metric) => {
  // Only log in development
  if (import.meta.env.DEV) {
    const { name, value, delta } = metric;
    console.log(`Web Vital: ${name}`, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      delta: Math.round(delta),
      metric
    });
  }
};

// Function to send web vitals to analytics
const sendToAnalytics = (metric) => {
  const { name, value, delta, id } = metric;

  // Example analytics event - replace with your actual analytics service
  // This is just a placeholder
  if (window.gtag) {
    window.gtag('event', name, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
    });
  }
};

export { reportWebVitals, logWebVitals, sendToAnalytics };
