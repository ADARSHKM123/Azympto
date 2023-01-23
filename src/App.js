
import './App.css';
import Hero from './Hero';
import Category from './Category';
import Products from './Products';
import Features from './Features';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <Hero/>
     <Category/>
     <Products/>
     <button className="viewBtn">View All</button>
     <Features/>
     <Footer/>
    </div>
  );
}

export default App;
