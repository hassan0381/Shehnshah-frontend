import React from 'react'
import Style from './bookings.module.css'
import BlackArrow from '../../assets/svg/blackArrow.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookingCards from '../../components/bookingCards/BookingCards';

function Bookings() {
   return (
      <>
        <div className={Style.home}>
            <div className={Style.topHeading}><img src={BlackArrow} alt="arrow" className={`mr-3`} />Bookings</div>
            <Tabs>
               <TabList>
                  <Tab>Schedule</Tab>
                  <Tab>History</Tab>
               </TabList>

               <TabPanel>
                  <BookingCards />
                  <BookingCards />
                  <BookingCards />
               </TabPanel>
               <TabPanel>
                  <BookingCards />
               </TabPanel>
            </Tabs>
         </div>
      </>
   )
}

export default Bookings
