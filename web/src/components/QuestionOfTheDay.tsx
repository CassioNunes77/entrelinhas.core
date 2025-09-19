import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Heart, MessageCircle } from 'lucide-react';

interface QuestionOfTheDayProps {
  question: string;
  onResponder: () => void;
  responsesCount: number;
  supportsCount: number;
}

const QuestionOfTheDay: React.FC<QuestionOfTheDayProps> = ({
  question,
  onResponder,
  responsesCount,
  supportsCount
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Card className="bg-gradient-to-br from-primary-100 to-primary-200 border-primary-300 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-primary-700 text-lg font-medium text-center">
            Pergunta do Dia
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-neutral-text text-center text-base leading-relaxed">
            {question}
          </p>
          
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={onResponder}
                className="px-8 py-3 text-base font-medium"
              >
                Responder
              </Button>
            </motion.div>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm text-neutral-secondary">
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>{supportsCount} apoios</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-4 w-4" />
              <span>{responsesCount} respostas</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuestionOfTheDay;
