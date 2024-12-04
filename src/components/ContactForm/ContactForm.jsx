import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().matches(/^[\d-]+$/, "Wrong format!").min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
    name: '',
    number: '',
}

const ContactForm = () => {
    const dispatch = useDispatch();

    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number
        };
		dispatch(addContact(newContact));
	};
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={s.contact_form}>
                <div className={s.form_input_container}>
                    <label className={s.form_label} htmlFor={nameFieldId}>Name</label>
                    <Field className={s.form_field} type="text" name="name" placeholder="Name Surname" id={nameFieldId} />
                    <ErrorMessage className={s.form_error} name="name" component="span" />
                </div>

                <div className={s.form_input_container}>
                    <label className={s.form_label} htmlFor={numberFieldId} >Number</label>
                    <Field className={s.form_field} type="text" name="number" placeholder="XXX-XX-XX" id={numberFieldId} />
                    <ErrorMessage className={s.form_error} name="number" component="span" />
                </div>

                <button className={s.form_button} type="submit">Add contact</button>
            </Form>
        </Formik>
  )
}

export default ContactForm