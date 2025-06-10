import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isEditContact } from "../../redux/contacts/slice";
import { useId } from "react";
import { selectIsEdit } from "../../redux/contacts/selectors";
import styles from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactFormAudit = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string()
      .matches(/^[0-9+\-() ]+$/, "Invalid format")
      .required("Required"),
  });

  const initialValues = { id, name, number };
  const isEdit = useSelector(selectIsEdit);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  const handleEdit = (values) => {
    dispatch(editContact(values));
    dispatch(isEditContact(null));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleEdit}
      validationSchema={ContactFormAudit}
    >
      {({ values }) => (
        <div className={styles.contactCard}>
          <Form>
            {isEdit === id ? (
              <>
                <fieldset className={styles.fieldset}>
                  <label htmlFor={nameFieldId}>
                    Name
                    <Field type="text" name="name" id={nameFieldId} />
                  </label>
                  <ErrorMessage name="name" component="span" />
                </fieldset>
                <fieldset className={styles.fieldset}>
                  <label htmlFor={numberFieldId}>
                    Number
                    <Field type="text" name="number" id={numberFieldId} />
                  </label>
                  <ErrorMessage name="number" component="span" />
                </fieldset>
                <div className={styles.buttons}>
                  <button type="submit">Save</button>
                  <button
                    type="button"
                    onClick={() => dispatch(isEditContact(null))}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.contactInfo}>
                <h2>{values.name}</h2>
                <p>{values.number}</p>
                <div className={styles.buttons}>
                  <button
                    type="button"
                    onClick={() => dispatch(isEditContact(id))}
                  >
                    Edit
                  </button>
                  <button type="button" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Contact;
