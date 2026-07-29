import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import { HeaderProvider } from "./context/HeaderContext";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          margin: '2rem',
          background: 'rgba(232,131,74,0.05)',
          border: '1px solid rgba(232,131,74,0.3)',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#F2F2F0',
          fontFamily: 'DM Sans, sans-serif'
        }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Something went wrong</h2>
          <p style={{ marginBottom: '1rem' }}>Please refresh the page or try again later.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '0.5rem 1.25rem',
              background: 'transparent',
              border: '1px solid #E8834A',
              color: '#E8834A',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif'
            }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem',
    minHeight: '30vh'
  }}>
    <div style={{
      width: '32px',
      height: '32px',
      border: '2px solid rgba(232,131,74,0.15)',
      borderTop: '2px solid #E8834A',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));

const prefetchComponents = () => {
  const prefetch = (fn) => { try { fn(); } catch (e) {} };
  setTimeout(() => {
    prefetch(() => import("./components/Skills"));
    prefetch(() => import("./components/Experience"));
    prefetch(() => import("./components/Projects"));
    prefetch(() => import("./components/Resume"));
    prefetch(() => import("./components/Contact"));
  }, 2500);
};

function App() {
  useEffect(() => {
    let lenis;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }).catch(() => {
      // falls back to native scroll if Lenis fails to load
    });

    prefetchComponents();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <HeaderProvider>
        <div className="App w-full overflow-x-hidden" style={{ background: 'var(--bg-base)' }}>
          <CustomCursor />
          <Header />
          <main>
            <Hero />
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
          </main>
        </div>
      </HeaderProvider>
    </Router>
  );
}

export default App;
