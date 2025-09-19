import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import QuestionOfTheDay from './components/QuestionOfTheDay';
import PostCard from './components/PostCard';
import ListenSpace from './components/ListenSpace';
import PersonalDiary from './components/PersonalDiary';
import './App.css';

// Mock data
const dailyQuestion = "O que tem te feito pensar ultimamente?";
const mockPosts = [
  {
    id: '1',
    content: "Hoje acordei pensando em como a vida é feita de pequenos momentos. Às vezes ficamos tão focados no futuro que esquecemos de viver o presente.",
    author: "Maria S.",
    authorInitials: "MS",
    timestamp: "2h atrás",
    supportsCount: 12,
    commentsCount: 3
  },
  {
    id: '2',
    content: "Nunca contei isso a ninguém, mas tenho medo de não ser suficiente. De não conseguir ser a pessoa que todos esperam que eu seja.",
    author: "João A.",
    authorInitials: "JA",
    timestamp: "4h atrás",
    supportsCount: 8,
    commentsCount: 1
  },
  {
    id: '3',
    content: "A solidão às vezes é necessária. É nesses momentos que nos conhecemos melhor e descobrimos nossa verdadeira força.",
    author: "Ana L.",
    authorInitials: "AL",
    timestamp: "6h atrás",
    supportsCount: 15,
    commentsCount: 5
  }
];

const mockListenRequests = [
  {
    id: '1',
    content: "Estou passando por um momento difícil no trabalho e não sei como lidar com a pressão. Alguém pode me ouvir?",
    authorInitials: "P",
    timestamp: "1h atrás",
    isListening: false
  },
  {
    id: '2',
    content: "Terminei um relacionamento recentemente e estou me sentindo perdida. Preciso de alguém para conversar.",
    authorInitials: "C",
    timestamp: "3h atrás",
    isListening: true
  }
];

const mockDiaryEntries = [
  {
    id: '1',
    content: "Hoje foi um dia de reflexão. Percebi que estou mais forte do que pensava.",
    timestamp: "Ontem",
    isInspiration: false
  },
  {
    id: '2',
    content: "A vida é como um rio - às vezes calmo, às vezes turbulento, mas sempre em movimento.",
    timestamp: "2 dias atrás",
    isInspiration: true
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState(mockPosts);
  const [listenRequests, setListenRequests] = useState(mockListenRequests);
  const [diaryEntries, setDiaryEntries] = useState(mockDiaryEntries);

  const handleSupportPost = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, supportsCount: post.supportsCount + 1 }
        : post
    ));
  };

  const handleCommentPost = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, commentsCount: post.commentsCount + 1 }
        : post
    ));
  };

  const handleListen = (requestId: string) => {
    setListenRequests(listenRequests.map(request => 
      request.id === requestId 
        ? { ...request, isListening: !request.isListening }
        : request
    ));
  };

  const handleSupportRequest = (requestId: string) => {
    // Handle support for listen request
    console.log('Supporting request:', requestId);
  };

  const handleAddDiaryEntry = (content: string) => {
    const newEntry = {
      id: Date.now().toString(),
      content,
      timestamp: 'Agora',
      isInspiration: false
    };
    setDiaryEntries([newEntry, ...diaryEntries]);
  };

  const handleSupportDiaryEntry = (entryId: string) => {
    // Handle support for diary entry
    console.log('Supporting diary entry:', entryId);
  };

  const handleRespondToQuestion = () => {
    // Handle response to daily question
    console.log('Responding to daily question');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-4">
            <QuestionOfTheDay
              question={dailyQuestion}
              onResponder={handleRespondToQuestion}
              responsesCount={24}
              supportsCount={18}
            />
            {posts.map((post) => (
              <PostCard
                key={post.id}
                {...post}
                onSupport={handleSupportPost}
                onComment={handleCommentPost}
              />
            ))}
          </div>
        );
      case 'listen':
        return (
          <ListenSpace
            requests={listenRequests}
            onListen={handleListen}
            onSupport={handleSupportRequest}
          />
        );
      case 'diary':
        return (
          <PersonalDiary
            entries={diaryEntries}
            onAddEntry={handleAddDiaryEntry}
            onSupportEntry={handleSupportDiaryEntry}
          />
        );
      case 'profile':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-primary-700 mb-2">
                Seu Perfil
              </h2>
              <p className="text-neutral-secondary">
                Em breve você poderá personalizar seu perfil e ver suas estatísticas de conexão.
              </p>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-bg">
      <Header />
      
      <main className="max-w-md mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}

export default App;
