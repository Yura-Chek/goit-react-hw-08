import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

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
    <div className={css.container}>
      <h1 className={css.title}>Register now!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />

          <label className={css.label}>Email</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="span" className={css.error} />

          <label className={css.label}>Password</label>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />

          <button className={css.button} type="submit">
            Register
          </button>

          <Link to="/login" className={css.link}>
            Already have an account? Sign in
          </Link>
          <Link to="/" className={css.link}>
            Back to Home
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;
