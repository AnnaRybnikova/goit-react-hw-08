import PropTypes from "prop-types";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { id, name, number } }) => {
    const dispatch = useDispatch();

    return (
        <div className={s.contact_card}>
            <div className={s.contact_card_info_container}>
                <p className={s.contact_card_info_item}>
                    <IoPerson className={s.contact_icon} />
                    {name}
                </p>
                <p className={s.contact_card_info_item}>
                    <FaPhoneAlt className={s.contact_icon} />
                    {number}
                </p>
            </div>
            <button className={s.contact_card_btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    )
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Contact