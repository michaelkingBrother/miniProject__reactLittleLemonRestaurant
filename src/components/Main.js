import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { Routes, Route, Link } from "react-router-dom";
import { useReducer } from "react";

const Main = () => {
    const updateTimes = (state, selectedDate) => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      };
      
    const initializeTimes = () => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      };
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes());

    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes}/>} />
        </Routes>
    )
}
export default Main