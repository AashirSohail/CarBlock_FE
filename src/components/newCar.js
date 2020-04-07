
import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";

import Fab from './dashComponents/fab';
import SideNav from './dashComponents/sideNav';
import CarForm from './dashComponents/newCarForm';
import Profile from './dashComponents/profile';


const CardExample = () => {
  return (
      <div class = "mt-5">
          <MDBRow>
            <MDBCol sm="3">
                <Profile/>
                <SideNav/>  
                <Fab/>
            </MDBCol>
            <MDBCol sm="8">
                <CarForm/>
            </MDBCol>
          </MDBRow>
      </div>
  )
}

export default CardExample;