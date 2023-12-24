import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function BookingForm({ availableTimes, time, timeChange }) {

    const todayDate = new Date().toLocaleDateString("en-CA")
    const [dateOfBooking, setDateOfBooking] = useState(todayDate)

    const [gusets, setGuests] = useState()

    const [occasion, setOccasion] = useState("Select Occasion")
    const navigate = useNavigate();

    const HandleSubmit = () => {
        navigate("/confirmedbooking")
        setTimeout(() => {
            navigate("/")
        }, 2000);
    }


    return (
        <div style={{backgroundColor:"#f4ce14", padding:"20px"}}>
            <div className="bookingform">
                <form onSubmit={HandleSubmit} style={{ display: "grid", maxWidth: 200, gap: 20 }}>
                    <h1>Reservation</h1>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" placeholder="Required"></input>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" placeholder="Required"></input>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Required"></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Required"></input>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={dateOfBooking} onChange={(e) => setDateOfBooking(e.target.value)} required />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" type="time" value={time} onChange={timeChange} required>
                        {availableTimes.map((num) => (
                            <option>{num}</option>
                        ))}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder={"Required"} min={1} max={10} id="guests" value={gusets} onChange={(e) => setGuests(e.target.value)} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Select Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input id="bookingsubmit" type="submit" defaultValue="Make Your reservation" />
                </form>
            </div>
        </div>
    )
}

export default BookingForm;