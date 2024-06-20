import './App.css';
import Sidebar from './Components/SideBar/Sidebar.component';
import Navbar from './Components/NavBar/Navbar.component';
import { Route, Routes } from 'react-router-dom';
import Calendar from './routes/Apps/Calendar/Calendar';
import Editor from './routes/Apps/Editor/Editor';
import Colorpicker from './routes/Apps/ColorPicker/Colorpicker';
import Kanban from './routes/Apps/Kanban/Kanban';
import Orders from './routes/pages/Orders/Orders';
import Customers from './routes/pages/Customers/Customers';
import Employees from './routes/pages/Employees/Employees';
import Area from './routes/Charts/Area/Area';
import Line from './routes/Charts/Line/Line';
import Pie from './routes/Charts/Pie/Pie';
import Color from './routes/Charts/Color/Color';
import Finance from './routes/Charts/Finance/Finance';
import Pyramid from './routes/Charts/Pyramid/Pyramid';
import Bar from './routes/Charts/Bar/Bar';
import { useContext } from 'react';
import { SideBarContext } from './Context/contextProvider';
import ECommerce from './routes/dashboard/E-commerce/ECommerce';

function App() {

  const { isSideBarOpen } = useContext(SideBarContext);

  return (
    <div className="page-container">
      <Sidebar/>
      <div className={isSideBarOpen?'main-page-container-partial':'main-page-container-full'}>
        <Navbar/>
        <Routes>
          <Route index element={<ECommerce/>}/>

          <Route path='/apps'>
            <Route path='/apps/calendar' element={<Calendar/>}/>
            <Route path='/apps/editor' element={<Editor/>}/>
            <Route path='/apps/colorPicker' element={<Colorpicker/>}/>
            <Route path='/apps/kanban' element={<Kanban/>}/>
          </Route>

          <Route path='/pages'>
            <Route path='/pages/orders' element={<Orders/>}/>
            <Route path='/pages/customers' element={<Customers/>}/>
            <Route path='/pages/employees' element={<Employees/>}/>
          </Route>

          <Route path='/charts'>
            <Route path='/charts/area' element={<Area/>}/>
            <Route path='/charts/line' element={<Line/>}/>
            <Route path='/charts/pie' element={<Pie/>}/>
            <Route path='/charts/color' element={<Color/>}/>
            <Route path='/charts/finance' element={<Finance/>}/>
            <Route path='/charts/pyramid' element={<Pyramid/>}/>
            <Route path='/charts/bar' element={<Bar/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
