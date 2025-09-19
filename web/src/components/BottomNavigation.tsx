import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Home, Ear, BookOpen, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange
}) => {
  const tabs = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'listen', label: 'Escutar', icon: Ear },
    { id: 'diary', label: 'Diário', icon: BookOpen },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="flex justify-around py-2 bg-transparent h-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex flex-col items-center space-y-1 p-2 data-[state=active]:bg-transparent data-[state=active]:text-primary-600 text-neutral-secondary hover:text-primary-500 transition-colors"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    color: isActive ? '#7E57C2' : '#757575'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <span className="text-xs font-medium">
                  {tab.label}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default BottomNavigation;
