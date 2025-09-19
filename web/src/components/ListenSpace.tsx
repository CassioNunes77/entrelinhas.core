import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Ear, Heart, Clock, Users } from 'lucide-react';

interface ListenRequest {
  id: string;
  content: string;
  authorInitials: string;
  timestamp: string;
  isListening: boolean;
}

interface ListenSpaceProps {
  requests: ListenRequest[];
  onListen: (id: string) => void;
  onSupport: (id: string) => void;
}

const ListenSpace: React.FC<ListenSpaceProps> = ({
  requests,
  onListen,
  onSupport
}) => {
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-primary-700 flex items-center justify-center space-x-2">
              <Ear className="h-5 w-5" />
              <span>Espaço de Escuta</span>
            </CardTitle>
            <p className="text-neutral-secondary text-sm">
              Aqui você pode ouvir quem precisa desabafar
            </p>
          </CardHeader>
        </Card>
      </motion.div>

      <div className="space-y-3">
        <AnimatePresence>
          {requests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={`transition-all ${
                selectedRequest === request.id 
                  ? 'ring-2 ring-primary-300 shadow-lg' 
                  : 'hover:shadow-md'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary-100 text-primary-600 text-xs">
                        {request.authorInitials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center text-xs text-neutral-secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          {request.timestamp}
                        </div>
                        {request.isListening && (
                          <div className="flex items-center text-xs text-accent-green">
                            <Users className="h-3 w-3 mr-1" />
                            Alguém está ouvindo
                          </div>
                        )}
                      </div>
                      
                      <p className="text-neutral-text text-sm leading-relaxed mb-3">
                        {request.content}
                      </p>
                      
                      <div className="flex space-x-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="listen"
                            onClick={() => {
                              onListen(request.id);
                              setSelectedRequest(
                                selectedRequest === request.id ? null : request.id
                              );
                            }}
                            className="text-xs"
                          >
                            <Ear className="h-3 w-3 mr-1" />
                            {selectedRequest === request.id ? 'Parar de Ouvir' : 'Ouvir'}
                          </Button>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            variant="support"
                            onClick={() => onSupport(request.id)}
                            className="text-xs"
                          >
                            <Heart className="h-3 w-3 mr-1" />
                            Apoiar
                          </Button>
                        </motion.div>
                      </div>
                    </div>
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

export default ListenSpace;
