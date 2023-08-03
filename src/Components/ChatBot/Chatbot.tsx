'use client'; 
import React, { useRef, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { FaCommentAlt } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#077B83',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#077B83',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const SimpleChatbot = () => {
  const [name, setName] = useState('');
  const chatbotRef = useRef(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleUserInput = ({ step }:any) => {
    if (step.id === 'get-name') {
      // Save user's name to the state
      setName(step.value);
    }
  };

  const handleChatbotToggle = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  const handleChatbotClose = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div>
      {isChatbotOpen ? (
        <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Shehan"
          steps={[
            {
              id: 'greeting',
              message: 'Hello! I am Shehan. What is your name?',
              trigger: 'get-name',
            },
            {
              id: 'get-name',
              user: true,
              trigger: 'display-name',
            },
            {
              id: 'display-name',
              message: `Nice to meet you,{previousValue}! How can I assist you today?`,
              trigger: 'user-input',
            },
            {
              id: 'user-input',
              user: true,
              trigger: 'response',
            },
            {
              id: 'response',
              message: 'Thank you for your input. Have a great day!',
              end: true,
            },
          ]}
          handleEnd={handleUserInput}
          ref={chatbotRef}
          floating={true}
          opened={true}
          style={{
            fontFamily: 'Verdana, Geneva, sans-serif',
            background: '#f0f0f0',
            color: '#333',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 9999,
          }}
        />
        </ThemeProvider>
      ) : (
        <div
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            background: '#077B83',
            color: '#fff',
            borderRadius: '50%',
            fontSize: '24px',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 9999,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          }}
          onClick={handleChatbotToggle}
        >
          <FaCommentAlt size={24} />
        </div>
      )}
      {isChatbotOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9998,
          }}
          onClick={handleChatbotClose}
        ></div>
      )}
    </div>
  );
};

export default SimpleChatbot;
