import { useEffect, useState } from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, updateTimes, submitForm }) => {
  // ... previous code

  return (
    <main>
      <h1>Make a Reservation</h1>
      <BookingForm availableTimes={availableTimes} onSubmit={submitForm} />
    </main>
  );
};

export default BookingPage;