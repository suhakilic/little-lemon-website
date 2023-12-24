import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, time, timeChange }) {
    return (
        <div className="bookingpage">
            <BookingForm availableTimes={availableTimes} time={time} timeChange={timeChange} />
        </div>
    )
}

export default BookingPage;