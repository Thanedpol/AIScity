import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import { NewsProvider } from './context/NewsContext';

function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Layout />
      </NewsProvider>
    </ThemeProvider>
  );
}

export default App;