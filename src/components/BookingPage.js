import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, dispatchAvailableTimes }) => (
    <main>
        <BookingForm 
         availableTimes={availableTimes}
         dispatchAvailableTimes ={dispatchAvailableTimes}
        />
    </main>
)
export default BookingPage