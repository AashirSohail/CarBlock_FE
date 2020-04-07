import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";

import Fab from './dashComponents/fab';
import SideNav from './dashComponents/sideNav';
import TransForm from './dashComponents/transferForm';
import Profile from './dashComponents/profile';


const CardExample = () => {
  return (
      <div class = "mt-5">
          <MDBRow>
            <MDBCol md="3">
                <Profile/>
                <SideNav/>  
            </MDBCol>
            <MDBCol md="9">
                <TransForm/>
            </MDBCol>
          </MDBRow>
          <Fab/>
      </div>
  )
}

export default CardExample;