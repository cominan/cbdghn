import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Route,
  Routes
} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './App.css';
import RegistorwithAxios from './app/registor/RegistorwithAxios';
import { dataAll } from './app/selector/dataCitySlice';
import CommonTemplate from './common/CommonTemplate';
import Login from './common/Login/Login';
import ScrollTop from './component/frames/ScrollTop';



function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    axios('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json').then(function (reuslt) {
      dispatch(dataAll(reuslt.data))
    })
  }, [])

  return (
    <div className='m-auto dark:!bg-slate-800 dark:!text-white'>
      <Router>
        <Routes>
          <Route path='*' element={<CommonTemplate />} />
          <Route path='/registor' element={<RegistorwithAxios />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <ScrollTop />
    </div >
  );
}

export default App;
