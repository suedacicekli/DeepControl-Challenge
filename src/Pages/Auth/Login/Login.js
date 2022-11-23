import React from "react";
import { useFormik } from "formik";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import validationSchema from "./validations";
import { Button } from "react-bootstrap";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
              <h2 className="fw-bold mb-2 text-center">Login</h2>

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
                  id="formControlLg"
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
                <Button size="lg" className="mt-4" type="submit">
                  LOGIN
                </Button>
              </form>

              <hr className="my-4" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Login;
