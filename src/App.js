
import './App.css';
import ContentWrapper from './components/ContentWrapper';
import SideBar from './components/SideBar';
import TotalProducts from './components/TotalProducts'
import TotalUsers from './components/TotalUsers';



import ProductsInDB from './components/ProductsInDB'
import{Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div id="wrapper">
       
      <SideBar/>
      <ContentWrapper/>
     
      <Routes>
       
        <Route path='/products' element={<ProductsInDB/>}></Route>
        <Route path='/totalProducts' element={<TotalProducts/>}></Route>
        <Route path='/totalUsers' element={<TotalUsers/>}></Route>
        
      
      </Routes>
      
    </div>
  );
}

export default App;
