// Module
import { useState } from 'react';

// Files
import './App.css';
import LeftSide from './components/leftSide';
import IndexMain from './components/Main';
import IndexRightSide from './components/rightSide';

function App() {
  const [showRightSide, setShowRightSide] = useState(false);
  return (
    <div className='h-screen flex flex-row bg-font-screen'>
      {/* left side */}
      <LeftSide />
      {/* Main */}
      <IndexMain showRightSide={showRightSide} setShowRightSide={setShowRightSide} />
      {/* Right side */}
      <IndexRightSide showRightSide={showRightSide} />
    </div>
  );
}

export default App;
