// Files
import './App.css';
import LeftSide from './components/leftSide';
import IndexMain from './components/Main';
import IndexRightSide from './components/rightSide';

function App() {
  return (
    <div className='h-screen flex flex-row bg-font-screen'>
      {/* left side */}
      <LeftSide />
      {/* Main */}
      <IndexMain />
      {/* Right side */}
      <IndexRightSide />
    </div>
  );
}

export default App;
