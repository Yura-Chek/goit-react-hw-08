import css from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contacts }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <span className={css.span}>
        <IoIosContact />
        {contacts.name}
      </span>
      <span>
        <FaPhoneAlt />
        {contacts.number}
      </span>
      <button
        className={css.deletebtn}
        onClick={() => dispatch(deleteContact(contacts.id))}
      >
        Delete
      </button>
    </li>
  );
}
