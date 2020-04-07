import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBAnimation, MDBBox, MDBView,MDBBtn } from "mdbreact";
import log from "./../images/block.png";

const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="mr-2" >
          <MDBCol md="3">
            <MDBRow className="ml-3">
              <MDBView hover waves>
                <img
                  src={log}
                  className="img-fluid"
                  alt=""
                />
              </MDBView>
            </MDBRow>
            <MDBRow className="mt-4">
              <p className="px-5 text-justify">
                CAR-CHAIN is a software that will provide trusted, genuine and verifiable vehicle history reports alongside a traceable spare-part supply chain management system that will eradicate the insecurities that currently exist within prevailing solutions
              </p>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-center px-4">
            <MDBAnimation reveal type="fadeInRight" duration="1s" delay="1.8s">
              <MDBBox tag="h5" className=""><strong>Connect With Us</strong></MDBBox>
            </MDBAnimation>
            <MDBAnimation reveal type="fadeInRight" duration="1s" delay="2.1s">
            
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="5" className = "mt-3 text-center" >
            <MDBContainer>
              <MDBRow>
                <MDBCol md='3'></MDBCol>
                <MDBCol md="9">
                  <form>
                    <p className="h4 text-center mb-4">Write to us</p>

                    <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                      Your email
                    </label>
                    <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                      Subject
                    </label>
                    <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                      Your message
                    </label>
                    <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                    <div className="text-center mt-4">
                      <MDBBtn color="warning" outline type="submit">
                        Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center mt-3 py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="a"> CarChain</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;


/*
              <a href="#!"><MDBIcon className="pl-4" fab size="2x" icon="facebook" />&ensp;&ensp;&ensp; </a>

              <a href="#!"><MDBIcon fab size="2x" icon="instagram" />&ensp;&ensp;&ensp; </a>

              <a href="#!"><MDBIcon fab size="2x" icon="linkedin" />&ensp;&ensp;&ensp; </a>

              <a href="#!"><MDBIcon size="2x" icon="at" />&ensp;&ensp; </a>
*/