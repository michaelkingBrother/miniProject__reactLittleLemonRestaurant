import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ availableTimes, onSubmit }) => {
  const initialValues = {
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toISOString().slice(11, 19),
    numberOfGuests: 1,
    occasion: null,
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    date: Yup.date()
      .min(new Date().toISOString().slice(0, 10), 'Date must be today or later')
      .required('Date is required'),
    time: Yup.string()
      .oneOf(availableTimes, 'Invalid time slot')
      .required('Time is required'),
    numberOfGuests: Yup.number()
      .integer('Number of guests must be an integer')
      .min(1, 'Number of guests must be at least 1')
      .max(10, 'Number of guests must not exceed 10')
      .required('Number of guests is required'),
    occasion: Yup.string().required('Occasion is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Call the onSubmit function passed as a prop
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form
          style={{
            display: 'grid',
            maxWidth: '200px',
            gap: '20px',
            margin: 'auto',
          }}
        >
          <label htmlFor="date">Choose date</label>
          <Field
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            required
            aria-invalid={touched.date && Boolean(errors.date)}
            aria-describedby={touched.date && errors.date ? 'date-error' : undefined}
          />
          {touched.date && errors.date && (
            <div id="date-error" style={{ color: 'red' }}>
              {errors.date}
            </div>
          )}

          <label htmlFor="time">Choose time</label>
          <Field
            as="select"
            id="time"
            name="time"
            required
            aria-invalid={touched.time && Boolean(errors.time)}
            aria-describedby={touched.time && errors.time ? 'time-error' : undefined}
          >
            <option value={initialValues.time}>{initialValues.time}</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </Field>
          {touched.time && errors.time && (
            <div id="time-error" style={{ color: 'red' }}>
              {errors.time}
            </div>
          )}

          <label htmlFor="numberOfGuests">Number of guests</label>
          <Field
            id="numberOfGuests"
            name="numberOfGuests"
            type="number"
            placeholder="1"
            min={1}
            max={10}
            required
            aria-invalid={touched.numberOfGuests && Boolean(errors.numberOfGuests)}
            aria-describedby={
              touched.numberOfGuests && errors.numberOfGuests
                ? 'numberOfGuests-error'
                : undefined
            }
          />
          {touched.numberOfGuests && errors.numberOfGuests && (
            <div id="numberOfGuests-error" style={{ color: 'red' }}>
              {errors.numberOfGuests}
            </div>
          )}

          <label htmlFor="occasion">Occasion</label>
          <Field
            id="occasion"
            name="occasion"
            list="occasion-list"
            required
            aria-invalid={touched.occasion && Boolean(errors.occasion)}
            aria-describedby={
              touched.occasion && errors.occasion ? 'occasion-error' : undefined
            }
          />
          <datalist id="occasion-list">
            {['Birthday', 'Anniversary'].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </datalist>
          {touched.occasion && errors.occasion && (
            <div id="occasion-error" style={{ color: 'red' }}>
              {errors.occasion}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            Make Your reservation
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;