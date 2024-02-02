import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import './sass/index.scss';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
