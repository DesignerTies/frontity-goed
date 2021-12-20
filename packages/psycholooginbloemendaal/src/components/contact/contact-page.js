import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { init } from "emailjs-com";
import { Formik } from "formik";
import externalCss from "../style/contact.css";

init("user_apzS9T524x1iyBPVN1LrM");

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="name"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            <input
              type="subject"
              name="subject"
              onChange={handleChange}
              value={values.subject}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Global styles={css(externalCss)} />
    </div>
  );
};

export default connect(ContactPage);
