import { Outlet } from 'react-router-dom';
import Footer from './components/mainLayouts/footer/Footer';
import Header from './components/mainLayouts/header/Header';
import "./translations/i18n";

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
