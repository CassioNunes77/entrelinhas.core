import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Heart, MessageCircle, Clock } from 'lucide-react';

interface PostCardProps {
  id: string;
  content: string;
  author: string;
  authorInitials: string;
  timestamp: string;
  supportsCount: number;
  commentsCount: number;
  onSupport: (id: string) => void;
  onComment: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  content,
  author,
  authorInitials,
  timestamp,
  supportsCount,
  commentsCount,
  onSupport,
  onComment
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3 mb-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary-100 text-primary-600">
                {authorInitials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <p className="text-sm font-medium text-neutral-text truncate">
                  {author}
                </p>
                <div className="flex items-center text-xs text-neutral-secondary">
                  <Clock className="h-3 w-3 mr-1" />
                  {timestamp}
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-neutral-text leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
        </CardContent>
        
        <CardFooter className="px-6 pb-4 pt-0">
          <div className="flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSupport(id)}
                className="text-neutral-secondary hover:text-accent-green hover:bg-accent-green/10"
              >
                <Heart className="h-4 w-4 mr-2" />
                Apoiar ({supportsCount})
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onComment(id)}
                className="text-neutral-secondary hover:text-primary-600 hover:bg-primary-50"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Comentar ({commentsCount})
              </Button>
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PostCard;
