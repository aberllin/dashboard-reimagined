import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { NotificationProvider } from './providers/NotificationProvider';
import { WindowsProvider } from './providers/WindowsProvider';
import Dashboard from './components/pages/Dashboard';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    const inStorage = localStorage.getItem('theme');
    const initialValue: Theme = inStorage ? (inStorage as Theme) : 'light';
    setTheme(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={themes[theme]}>
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
