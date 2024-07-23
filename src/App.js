
import './App.css';
import ConsoleEffectExample from './Component/Useeffect';
import Counter from './Component/Usestate';

import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './Component/Usecontext';
import Userefexample from './Component/Useref';
import Useref_state from './Component/Useref&state';
import Usecallback from './Component/UseCallback';
import UseMemo from './Component/UseMemo';


const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    light: {
      backgroundColor: 'green',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }
  };

  return (
    <div style={theme === 'light' ? styles.light : styles.dark}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <ConsoleEffectExample /> */}
      
      <ThemeProvider> <ThemedComponent /></ThemeProvider>
      <Userefexample/>

        <Useref_state/>
        <Usecallback/>
        <UseMemo/>
    </div>
  );
}

export default App;
