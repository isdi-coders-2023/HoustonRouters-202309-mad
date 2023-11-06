import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './components/details/datail.scss';
import { Detail } from './components/details/datail';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Detail></Detail>
    </>
  );
}

export default App;
