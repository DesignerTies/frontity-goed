import { connect } from "frontity";
import { Global, css } from "frontity";
import { init } from "emailjs-com";
import { Formik } from "formik";
import { useEffect } from "react";
import externalCss from "../style/contact.css";
import emailjs from "emailjs-com";

init("user_apzS9T524x1iyBPVN1LrM");

const ContactPage = () => {
  // useEffect(() => {
  //   const existingScript = document.querySelector(
  //     "script[src='https://assets.calendly.com/assets/external/widget.js']",
  //   );

  //   if (!existingScript) {
  //     const script = document.createElement('script');
  //     script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }, []);

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
              alert("De e-mail is verzonden.");
              emailjs
                .sendForm("service_g86r2il", "template_i7f32xz", "form")
                .then(
                  function (response) {
                    console.log(
                      "Email gestuurd",
                      response.status,
                      response.text,
                    );
                  },
                  function (error) {
                    console.log("Er is iets fout gegaan...", error);
                  },
                );
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
          }) => (
            <form id="form" onSubmit={handleSubmit}>
              <input
                type="text"
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
              {errors.email && touched.email && <div>{errors.email}</div>}

              <input
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                value={values.phoneNumber}
                placeholder="Telefoonnummer"
              />

              <textarea
                name="message"
                onChange={handleChange}
                value={values.message}
                placeholder="Vraag"
              />

              <div className="center-button">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>

        {/* <h3>Of maak een afspraak:</h3>

        <div
          className='calendly-inline-widget'
          data-url='https://calendly.com/francisca-psycholooginbloemendaal/30min?primary_color=0042ff'
          style={{ minWidth: '320px', height: '700px', marginTop: '2rem' }}
        /> */}

        <Global styles={css(externalCss)} />
      </div>
    </>
  );
};

export default connect(ContactPage);
