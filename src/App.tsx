import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme, type ThemeMode } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { NotificationProvider } from './providers/NotificationProvider';
import { WindowsProvider } from './providers/WindowsProvider';
import Dashboard from './components/pages/Dashboard';

function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    const inStorage = localStorage.getItem('theme');
    const initialValue: ThemeMode = inStorage
      ? (inStorage as ThemeMode)
      : 'light';
    setTheme(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <>
        <GlobalStyles />
        <NotificationProvider>
          <WindowsProvider>
            <Dashboard changeTheme={changeTheme} theme={theme} />
          </WindowsProvider>
        </NotificationProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
