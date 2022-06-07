import { connect, styled } from "frontity";
import { Global, css } from "frontity";
import { init } from "emailjs-com";
import { Formik } from "formik";
import externalCss from "../style/contact.css";
import emailjs from "emailjs-com";

init("user_apzS9T524x1iyBPVN1LrM");

const ContactPage = () => {
  return (
    <>
      <div className="contact-page-banner">
        <div className="contact-page-title">
          <h1>CONTACT</h1>
        </div>
      </div>
      <div className="contact-wrapper">
        <Formik
          initialValues={{ name: "", email: "", phoneNumber: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Geen geldig e-mail adres";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              alert("De e-mail is verzonden.");
              emailjs
                .sendForm("service_g86r2il", "template_i7f32xz", "form")
                .then(
                  function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                  },
                  function (error) {
                    console.log("FAILED...", error);
                  }
                );
              setSubmitting(false);
            }, 400);
          }}
          className="form-wrapper"
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
                type="name"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="Naam"
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="E-mail"
              />
              {errors.email && touched.email && errors.email}

              <input
                type="phoneNumber"
                name="phoneNumber"
                onChange={handleChange}
                value={values.subject}
                placeholder="Telefoonnummer"
              />
              <input
                type="message"
                name="message"
                onChange={handleChange}
                value={values.message}
                placeholder="Vraag"
              />
              {errors.password && touched.password && errors.password}
              <div className="center-button">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
        <Global styles={css(externalCss)} />
      </div>
    </>
  );
};

export default connect(ContactPage);
