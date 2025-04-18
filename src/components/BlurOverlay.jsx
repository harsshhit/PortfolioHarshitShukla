import { useHeaderContext } from '../context/HeaderContext';
import { motion, AnimatePresence } from 'framer-motion';

const BlurOverlay = () => {
  const { isHeaderActive, showingSocials } = useHeaderContext();

  return (
    <AnimatePresence>
      {isHeaderActive && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{
            opacity: 1,
            backdropFilter: showingSocials ? 'blur(16px)' : 'blur(8px)'
          }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.4 }}
          className={`fixed inset-0 ${showingSocials
            ? 'bg-gradient-to-b from-black/60 to-black/50'
            : 'bg-gradient-to-b from-black/40 to-black/30'
          } z-40 transition-all duration-300`}
          style={{
            backdropFilter: showingSocials ? 'blur(16px)' : 'blur(8px)',
            WebkitBackdropFilter: showingSocials ? 'blur(16px)' : 'blur(8px)'
          }}
          aria-hidden="true"
        >
          {/* Add subtle animated gradient when social icons are shown */}
          {showingSocials && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlurOverlay;
