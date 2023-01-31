import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './App.css';
import { dataAll } from './app/selector/dataCitySlice';
import CommonTemplate from './common/route-page/CommonTemplate';
import RoutesPage from './common/route-page/RoutesPage';
import ScrollTop from './component/frames/ScrollTop';



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios(`${process.env.REACT_APP_MAP}`).then(function (reuslt) {
      dispatch(dataAll(reuslt.data))
    })
  }, [])



  return (
    <div className='m-auto dark:!bg-slate-800 dark:!text-white'>
      <CommonTemplate value={RoutesPage} />
      <ScrollTop />
    </div >
  );
}

export default App;
