import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from './component/headerComponent/Header';
import Content from './component/content/Content';
import Footer from './component/footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import GhnEpress from './component/ghn-express/GhnEpress';
import { dataAll } from './app/selector/dataCitySlice';
import ViewDetail from './component/ghn-express/register/price/price-view-detail/ViewDetail';
import GhnFullfilment from './component/ghn-fullfilment/GhnFullfilment';
import InformationGhn from './component/ve-ghn/InformationGhn';
import Technolgy from './component/technolgy-ghn/Technolgy';
import ScrollTop from './component/frames/ScrollTop';
import Contact from './component/contact-ghn/Contact';
import Recruit from './component/work-with-ghn/Recruit';
import BlockOffiiceWork from './component/work-with-ghn/block-work/BlockOffiiceWork';
import HcmWork from './component/work-with-ghn/block-work/HcmWork';
import Notification from './component/frames/Notification';
import CastGhn from './component/xu-ghn/CastGhn';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    axios('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json').then(function (reuslt) {
      dispatch(dataAll(reuslt.data))
    })
  }, [])

  return (
    <div className='container'>
      <Fragment>
        <Header />
        <Router>
          <Routes>
            <Route path='/price/view-detail' element={<ViewDetail />} />
            <Route path='/pages/block/office' element={<BlockOffiiceWork />} />
            <Route path='/pages/block/detail-hcm-ghn' element={<HcmWork />} />
            <Route path='/pages/ve-ghn' element={<InformationGhn />} />
            <Route path='/pages/work-ghn' element={<Recruit />} />
            <Route path='/pages/contact-ghn' element={<Contact />} />
            <Route path='/pages/xu-ghn' element={<CastGhn />} />
            <Route path='/pages/table-price' element={<ViewDetail />} />
            <Route path='/pages/technolgy-ghn' element={<Technolgy />} />
            <Route path='/pages/notification' element={<Notification />} />
            <Route path='ghn-fullfilment' element={<GhnFullfilment />} />
            <Route path='ghn-express' element={<GhnEpress />} />
            <Route path='/' element={<Content />} />
          </Routes>
        </Router>
        <ScrollTop />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
