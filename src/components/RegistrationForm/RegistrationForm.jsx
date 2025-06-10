import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

function RegisterForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Min 3 symbols").required("Name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
      .min(7, "Min 7 symbols")
      .required("Password required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(registerThunk(values));
  };

  return (
    <div>
      <div>
        <div>
          <h1>Register now!</h1>
        </div>
        <div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <label>Name</label>
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="span" />
                <label>Email</label>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="span" />
                <label>Password</label>
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" component="span" />
                <button type="submit">Register</button>
                <Link to="/login">You already have an account? Sign in!</Link>
                <Link to="/">Back to Home</Link>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
