import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BlurredContentArea from "./components/BlurredContentArea";
import BlurOverlay from "./components/BlurOverlay";
import { HeaderProvider } from "./context/HeaderContext";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary p-3 sm:p-4 mx-3 sm:m-4 bg-red-900/20 border border-red-500 rounded-lg text-center">
          <h2 className="text-lg sm:text-xl font-bold mb-2">Something went wrong</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">Please refresh the page or try again later</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component with animation
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8 sm:py-12">
    <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Lazy load components with prefetching
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));

// Prefetch components after initial load
const prefetchComponents = () => {
  const prefetchComponent = (importFn) => {
    try {
      importFn();
    } catch (e) {
      console.error("Prefetch error:", e);
    }
  };

  // Prefetch after a delay to prioritize initial render
  setTimeout(() => {
    prefetchComponent(() => import("./components/Skills"));
    prefetchComponent(() => import("./components/Experience"));
    prefetchComponent(() => import("./components/Projects"));
    prefetchComponent(() => import("./components/Resume"));
    prefetchComponent(() => import("./components/Contact"));
  }, 2000);
};

function App() {
  // Trigger prefetching after initial render
  useEffect(() => {
    prefetchComponents();
  }, []);

  return (
    <Router>
      <HeaderProvider>
        <div className="App w-full overflow-x-hidden">
          <BlurOverlay />
          <Header />
          <Hero />
          <BlurredContentArea>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Skills />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Experience />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Projects />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Resume />
              </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            </ErrorBoundary>
          </BlurredContentArea>
        </div>
      </HeaderProvider>
    </Router>
  );
}

export default App;
