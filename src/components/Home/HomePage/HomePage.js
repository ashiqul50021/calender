import * as React from 'react';

import Calender from '../Calender/Calender';
import TrainerList from '../TrainerList/TrainerList';
import BigCalender from '../BigCalender/BigCalender';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import Calendar from 'react-material-ui-calendar';




const HomePage = () => {
    return (
        <div className="">
          <Navbar/>
          <div className="container">
          <div className="row mb-4">
            <div className="col-md-4">
            <div className='mt-4'>
            <Calender/>
            </div>
            <div className="mt-3">
            <TrainerList/>
            </div>
            </div>
            <div className="col-md-8">
            <div className="mt-5">
            <BigCalender/>
            </div>
            </div>
          </div>
          </div>
          <Footer/>
        </div>
    );
  }
export default HomePage;