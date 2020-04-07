import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer className = "mt-4">
      <MDBRow className = "text-center">
          <MDBCol>
          <p className="h3 text-center py-4">Workshop Details</p>
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-2">Owner Details</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="at"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Phone Number"
                    icon="phone"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  <MDBInput
                    label="Your CNIC"
                    icon="fingerprint"
                    group
                    type="text"
                  />
                  
                </div> 
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
        <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center">Company Details</p>
                <div className="grey-text">
                  <MDBInput
                    label="Company Name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Work Email"
                    icon="at"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Work Number"
                    icon="phone"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Address"
                    icon="map-marked-alt"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="City"
                    icon="city"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Zip Code"
                    icon="envelope-open-text"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className = "text-center">
        <MDBCol>
        <div className="text-center py-3">
            <MDBBtn color="cyan" type="submit">
            Register
            </MDBBtn>
        </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;