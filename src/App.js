import './App.css';
import Navbar from './Navbar';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.apple.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App component</h1>
      </div>
    </div>
  );
}

export default App; //this line is to make this component usable anywhere in the project
