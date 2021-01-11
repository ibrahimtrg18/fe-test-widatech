import React from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

import { createEvent } from "../../redux/actions";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  location: yup.string().required(),
  notes: yup.string().min(50).required(),
});

const Form = ({ createEvent }) => {
  const notify = () => toast.info("event has been added!");

  return (
    <div className="container">
      <Formik
        initialValues={{
          title: "",
          location: "",
          participants: [
            {
              name: "",
              avatar: "",
            },
          ],
          datetime: {
            start: new Date(),
            finish: new Date().setHours(new Date().getHours() + 2),
          },
          notes: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          createEvent(values);
          notify();
          //mock
          const res = await fetch("/api/event", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
          if (res.ok) {
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
          handleSubmit,
        }) => (
          <form className="form-container" onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                name="title"
                type="text"
                className="input"
                onChange={handleChange}
                value={values.title}
              />
              <span className="text-danger">
                {errors.title && touched.title && errors.title}
              </span>
            </label>
            <label>
              Location:
              <input
                name="location"
                type="text"
                className="input"
                onChange={handleChange}
                value={values.location}
              />
              <span className="text-danger">
                {errors.location && touched.location && errors.location}
              </span>
            </label>
            <label>
              Participants:
              {values.participants.map((participant, index) => (
                <label key={index}>
                  participant - {index + 1}
                  <input
                    name={`participants[${index}].name`}
                    type="text"
                    className="input"
                    onChange={(e) =>
                      setFieldValue(
                        `participants[${index}].name`,
                        e.target.value
                      )
                    }
                    value={values.participant}
                  />
                </label>
              ))}
              <button
                type="button"
                onClick={() =>
                  setFieldValue("participants", [
                    ...values.participants,
                    { name: "", avatar: "" },
                  ])
                }
              >
                add participant
              </button>
              <span className="text-danger">
                {errors.participants &&
                  touched.participants &&
                  errors.participants}
              </span>
            </label>
            <label>
              Notes:
              <textarea
                name="notes"
                type="text"
                className="input"
                onChange={handleChange}
                value={values.notes}
              />
              <span className="text-danger">
                {errors.notes && touched.notes && errors.notes}
              </span>
            </label>
            <label>
              <DatePicker
                name="datetime.start"
                selected={values.datetime.start}
                onChange={(val) => {
                  setFieldValue("datetime.start", val);
                }}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default connect(null, {
  createEvent: (event) => createEvent(event),
})(Form);
