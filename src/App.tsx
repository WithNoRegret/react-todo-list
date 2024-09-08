import { useState } from 'react';
import clsx from 'clsx';
import styles from './App.module.css'
import Header from './components/Header/Header';

const App = () => { 
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
  <div className={clsx(styles.app, isDarkMode && styles.app_dark)}>
    <div className={'container'}>
      <Header />
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle dark mode</button>
    </div>
  </div>
)}

export default App
