import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      console.log(values);
    },
  });
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Create Account</h2>

              <form onSubmit={formik.handleSubmit}>
                <MDBInput
                  wrapperClass="mb-2 mt-5 w-100"
                  placeholder="Email address"
                  type="email"
                  size="lg"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className=" text-danger">{formik.errors.email}</div>
                )}
                <MDBInput
                  wrapperClass="mb-2 mt-4 w-100"
                  placeholder="Password"
                  type="password"
                  size="lg"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className=" text-danger">{formik.errors.password}</div>
                )}
                <MDBInput
                  wrapperClass="mb-2 mt-4 w-100"
                  placeholder="Password Confirm"
                  type="password"
                  size="lg"
                  name="passwordConfirm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                />
                {formik.errors.passwordConfirm &&
                  formik.touched.passwordConfirm && (
                    <div className=" text-danger">
                      {formik.errors.passwordConfirm}
                    </div>
                  )}

                {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4 ' label='Remember password' /> */}

                <Button size="lg" className="mt-4" type="submit">
                  SIGN UP
                </Button>
              </form>
              <hr className="my-4" />
              <a href="/login" className="text-decoration-none">Do you already have an account</a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
