import { createContext, useState } from 'react';

import { Form, PostList } from './components';

import ReactSwitch from 'react-switch';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (
      curr === 'light' ? 'dark' : 'light')
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='switch'>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
        </div>
       <Form />
       <PostList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
