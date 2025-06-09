import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const defaultValues = {
  name: "",
  tel: "",
};

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
  tel: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={(values, actions) => {
        dispatch(addContact({ name: values.name, number: values.tel }));
        actions.resetForm();
      }}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <Field
          className={css.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <ErrorMessage name="name" component="span" />
        <Field
          className={css.tel}
          type="tel"
          name="tel"
          placeholder="phone number"
        />
        <ErrorMessage name="tel" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
