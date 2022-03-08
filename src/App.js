import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles} from './components/styles/Globals';
import Background from './components/Background';
import InfoContainer from './components/InfoContainer';
import Map from './components/Map';
import theme from './theme';

export const TrackerContext = createContext(null);


function App() {
  
  const [ipData, setIpData] = useState(null);

  return (
    <TrackerContext.Provider value = {{ ipData, setIpData }}>
      <ThemeProvider theme= { theme } >
        <>
          <GlobalStyles />
          <Background />
          { ipData && <Map /> }
        </>
      </ThemeProvider>
    </TrackerContext.Provider>
  );
}

export default App;
