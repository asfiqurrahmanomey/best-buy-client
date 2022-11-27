import React from 'react';

const BookingModal = ({ booking, categories, setBooking }) => {
    const { title } = booking;

    // * Booking event handler * //
    const handleBooking = event  => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const user = form.user.value;
        const price = form.price.value;
        const categories = form.categories.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const bookingDetails = {
            email,
            userName: user,
            price,
            categories,
            meetLocation: location,
            userPhone: phone,

        }
        console.log(bookingDetails);
        setBooking(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {title}</h3>
                    <p className="py-4"></p>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-4'>
                        <input name='email' type="text" placeholder="Your Email" className="my-1 input input-bordered w-full rounded-lg" />
                        <input name='user' type="text" placeholder="User Name" className="my-1 input input-bordered w-full rounded-lg" />
                        <input name='price' type="text" placeholder="Price" className="my-1 input input-bordered w-full rounded-lg" />
                        <input name='categories' type="text" placeholder="Category" className="my-1 input input-bordered w-full rounded-lg" />
                        <input name='location' type="text" placeholder="Your Location" className="my-1 input input-bordered w-full rounded-lg" />
                        <input name='phone' type="text" placeholder="Add Phone" className="my-1 input input-bordered w-full rounded-lg" />
                        <input className=' w-full  px-2 uppercase inline-flex items-center justify-center py-2 font-medium text-white rounded-lg bg-gray-700' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;