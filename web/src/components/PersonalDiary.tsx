import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { BookOpen, Plus, Heart, Quote } from 'lucide-react';

interface DiaryEntry {
  id: string;
  content: string;
  timestamp: string;
  isInspiration?: boolean;
}

interface PersonalDiaryProps {
  entries: DiaryEntry[];
  onAddEntry: (content: string) => void;
  onSupportEntry: (id: string) => void;
}

const PersonalDiary: React.FC<PersonalDiaryProps> = ({
  entries,
  onAddEntry,
  onSupportEntry
}) => {
  const [isWriting, setIsWriting] = useState(false);
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = () => {
    if (newEntry.trim()) {
      onAddEntry(newEntry.trim());
      setNewEntry('');
      setIsWriting(false);
    }
  };

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-accent-yellow/20 to-accent-yellow/10 border-accent-yellow/30">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-neutral-text flex items-center justify-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Meu Diário</span>
            </CardTitle>
            <p className="text-neutral-secondary text-sm">
              Um espaço para suas reflexões e inspirações
            </p>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardContent className="p-4">
            {!isWriting ? (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => setIsWriting(true)}
                  variant="secondary"
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Escrever no Diário
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                <Textarea
                  placeholder="O que está em sua mente hoje?"
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  className="min-h-[100px] resize-none"
                />
                <div className="flex space-x-2">
                  <Button onClick={handleSubmit} size="sm">
                    Salvar
                  </Button>
                  <Button 
                    onClick={() => {
                      setIsWriting(false);
                      setNewEntry('');
                    }} 
                    variant="ghost" 
                    size="sm"
                  >
                    Cancelar
                  </Button>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <div className="space-y-3">
        <AnimatePresence>
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={`${
                entry.isInspiration 
                  ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200' 
                  : 'hover:shadow-md'
              } transition-shadow`}>
                <CardContent className="p-4">
                  {entry.isInspiration && (
                    <div className="flex items-center mb-2 text-primary-600">
                      <Quote className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Inspiração</span>
                    </div>
                  )}
                  
                  <p className="text-neutral-text leading-relaxed mb-3 whitespace-pre-wrap">
                    {entry.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-secondary">
                      {entry.timestamp}
                    </span>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onSupportEntry(entry.id)}
                        className="text-neutral-secondary hover:text-accent-green hover:bg-accent-green/10"
                      >
                        <Heart className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PersonalDiary;
