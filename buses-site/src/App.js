//import logo from './logo.svg';
import './App.css';
import './components/Navbar.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <html>
      <div>
        <Navbar></Navbar>               
      <div className="column-content">

        <h2>Column</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
      </div>
      </div>
    </html>
);
}
export default App;
