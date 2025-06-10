import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
      .min(6, "Min 6 symbols")
      .required("Password required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
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
            Login
          </button>

          <Link to="/register" className={css.link}>
            Don't have an account? Sign up
          </Link>
          <Link to="/" className={css.link}>
            Back to Homepage
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
