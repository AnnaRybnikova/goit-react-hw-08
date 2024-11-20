import PropTypes from "prop-types";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css"

const Contact = ({ contactName, contactPhone }) => {
    return (
        <div className={s.contact_card}>
            <div className={s.contact_card_info_container}>
                <p className={s.contact_card_info_item}>
                    <IoPerson className={s.contact_icon} />
                    {contactName}
                </p>
                <p className={s.contact_card_info_item}>
                    <FaPhoneAlt className={s.contact_icon} />
                    {contactPhone}
                </p>
            </div>
            <button className={s.contact_card_btn}>Delete</button>
        </div>
    )
}

Contact.propTypes = {
    contactName: PropTypes.string.isRequired,
    contactPhone: PropTypes.string.isRequired,
}

export default Contact