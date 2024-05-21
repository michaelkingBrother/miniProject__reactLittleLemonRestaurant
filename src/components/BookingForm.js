import { useState } from "react";

const BookingForm = () =>{

    let curentDate = new Date().toISOString().slice(0, 10);
    let currentTime = new Date().toISOString().slice(11, 19);
    let occasionList = ['Birthday', 'Anniversary'];
    
    const handleClick = (e) =>{
        e.preventDefault();
        console.log(bookingInfor)
    }
    
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    const [bookingInfor, setBookingInfor] = useState({
        Date: curentDate,
        Time: currentTime,
        NumberOfGuests: 1,
        Occasion: null,
    })
    return(
        <form
         style={{display: 'grid', maxWidth: '200px', gap: '20px', margin: 'auto'}}
         onSubmit={handleClick}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
             id="res-date"
             type="date"
             value={bookingInfor.Date}
             onChange={
                e => {setBookingInfor({
                    ...bookingInfor,
                    Date: e.target.value});
                }}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
             id="res-time"
             onChange={e=>{setBookingInfor({...bookingInfor, Time: e.target.value})}}
            >
                <option value={bookingInfor.Time}>{bookingInfor.Time}</option>
                {availableTimes.map((time)=> (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            {/* <input
             id='res-time'
             type="time"
             value={bookingInfor.Time}
             onChange={
                e => {setBookingInfor({
                    ...bookingInfor,
                    Time: e.target.value});
                }}
            /> */}
            <label htmlFor="guests">Number of guests</label>
            <input
             id="guests"
             type="number"
             placeholder="1"
             min={1}
             max={10}
             value={bookingInfor.NumberOfGuests}
             onChange={
                e => {setBookingInfor({
                    ...bookingInfor,
                    NumberOfGuests: e.target.value});
                }}
            />
            <label htmlFor="occasion">Occasion</label>
            <input
             id='occasion'
             list='occasion-list'
             name='occasion'
             value={bookingInfor.Occasion}
             onChange={e=>{setBookingInfor({
                ...bookingInfor,
                Occasion: e.target.value});
             }}
            />
            <datalist id="occasion-list">
                {occasionList.map((item, index)=>(
                    <option key={index} value={item}>{item}</option>
                ))}
            </datalist>
            <input type="submit" value="Make Your reservation"></input>
        </form>
    )}
export default BookingForm;
   