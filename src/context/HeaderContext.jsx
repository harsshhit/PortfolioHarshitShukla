import { createContext, useState, useContext } from 'react';

// Create context
const HeaderContext = createContext();

// Custom hook to use the context
export const useHeaderContext = () => useContext(HeaderContext);

// Provider component
export const HeaderProvider = ({ children }) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [showingSocials, setShowingSocials] = useState(false);

  // Function to toggle header active state
  const toggleHeaderActive = (active) => {
    setIsHeaderActive(active);
  };

  // Function to set social icons visibility state
  const setSocialsVisible = (visible) => {
    setShowingSocials(visible);
  };

  // Value to be provided to consumers
  const value = {
    isHeaderActive,
    toggleHeaderActive,
    showingSocials,
    setSocialsVisible
  };

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
};
