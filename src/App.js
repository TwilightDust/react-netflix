import './App.css';
import { Nav } from './componets/Nav';
import Footer from './componets/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';

const Layout = () => {
    return (
      <div>
        <Nav/>
        <Outlet/>
        <Footer/>
      </div>
    );
}


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage></MainPage>}></Route>
          <Route path=':movieId' element={<DetailsPage></DetailsPage>}></Route>
          <Route path='search' element={<SearchPage></SearchPage>}></Route>
        </Route>
      </Routes>

      
    </div>
  );
}

export default App;
