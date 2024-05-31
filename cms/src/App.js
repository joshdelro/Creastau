import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/Admin.js'
import EmployeePage from './pages/Employee'
import Login from './pages/Login'

import Products from './components/Products';
import NonFood from './components/NonFood';
import Branches from './components/Branches';

import ProductsEmp from './components/ProductsEmp';
import NonFoodEmp from './components/NonFoodEmp';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/AdminPage' element = {<AdminPage />} />
        <Route path='/EmployeePage' element = {<EmployeePage />} />
        <Route path='/Products' element = {<Products />} />
        <Route path='/NonFood' element = {<NonFood />} />
        <Route path='/Branches' element = {<Branches />} />
        <Route path='/ProductsEmp' element = {<ProductsEmp />} />
        <Route path='/NonFoodEmp' element = {<NonFoodEmp />} />
      </Routes>
    </>
  );
}

export default App;
