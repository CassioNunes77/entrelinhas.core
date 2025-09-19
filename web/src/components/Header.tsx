import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-100 sticky top-0 z-40"
    >
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-2">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <Heart className="h-6 w-6 text-primary-500" />
          </motion.div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-neutral-text">
              Entrelinhas
            </h1>
            <p className="text-xs text-neutral-secondary">
              Um lugar para conversar sobre o que importa
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
