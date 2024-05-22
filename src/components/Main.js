import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";
import ConfirmedBooking from "./ConfirmedBooking";

let fetchAPI, submitAPI;

try {
  ({ fetchAPI, submitAPI } = await import('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'));
} catch (error) {
  console.error('Error importing api.js:', error);

  fetchAPI = () => {
    return Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  };

  submitAPI = () => {
    return Promise.resolve(true);
  };
}

const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const times = await fetchAPI(today.toISOString().slice(0, 10));
      setAvailableTimes(times);
    };
    initializeTimes();
  }, []);

  const updateTimes = async (selectedDate) => {
    const times = await fetchAPI(selectedDate);
    setAvailableTimes(times);
  };

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate('/confirmed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/booking"
        element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />}
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default Main;