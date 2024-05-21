import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { Routes, Route, Link } from "react-router-dom";

const Main = () => (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/booking" element={<BookingPage/>} />
    </Routes>
)
export default Main