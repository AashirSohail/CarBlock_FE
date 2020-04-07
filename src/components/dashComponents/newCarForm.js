import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {useForm} from 'react-hook-form';

const FormPage = () => {

const {register, handleSubmit, errors} = useForm();

const onSubmit = (data) => {
console.log(data);
}

  return ( 
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <div class="row">
                  
                <form class="col s12">
                <h4 classNameName = "text-center">New Car Entery</h4>

                <div class="row">
                    <div class="input-field col s6">
                    <input id="Vin Number" type="text" class="validate"/>
                    <label for="Vin Number">Vin Number</label>
                    </div>
                    <div class="input-field col s6">
                    <input id="Registration Number" type="text" class="validate"/>
                    <label for="Registration Number">Registration Number</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                    <input id="Make" type="text" class="validate"/>
                    <label for="Make">Make</label>
                    </div>
                    <div class="input-field col s6">
                    <input id="Model" type="text" class="validate"/>
                    <label for="Model">Model</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                    <input id="Year of Manufacture" type="text" class="validate"/>
                    <label for="Year of Manufacture">Year of Manufacture</label>
                    </div>
                    <div class="input-field col s6">
                    <input id="Variant" type="text" class="validate"/>
                    <label for="Variant">Variant</label>
                    </div>
                </div>
                <div class="row">
                <div>
                    <select className="browser-default custom-select">
                    <option>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>
                </div>
 


                    <div class="input-field col s6">
                    <input id="Fuel" type="text" class="validate"/>
                    <label for="Fuel">Fuel</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                    <input id="Drive" type="text" class="validate"/>
                    <label for="Drive">Drive</label>
                    </div>
                    <div class="input-field col s6 text-center">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Add
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                </form>
            </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;