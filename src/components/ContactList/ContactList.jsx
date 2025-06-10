import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((item) => (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        ))}
      </ul>
      {error && <h2>Error fetching contacts</h2>}
      {loading && <span>Loading...</span>}
    </>
  );
};

export default ContactList;
