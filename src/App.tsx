import { type Component } from 'solid-js';

import { ThemeProvider } from './providers/ThemeProvider';
import Routing from './Routing';
import { CounterProvider } from './providers/CounterProvider';

const App: Component = () => {
  return (
    <>
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
    </>
  );
};

export default App;
