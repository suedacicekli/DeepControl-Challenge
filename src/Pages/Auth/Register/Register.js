import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function Register() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Create Account</h2>

              <MDBInput
                wrapperClass="mb-4 mt-5 w-100"
                placeholder="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mt-2 w-100"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mt-2 w-100"
                placeholder="Password Confirm"
                id="formControlLg"
                type="password"
                size="lg"
              />

              {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4 ' label='Remember password' /> */}

              <MDBBtn size="lg" className="mt-4">
                SIGN UP
              </MDBBtn>

              <hr className="my-4" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
