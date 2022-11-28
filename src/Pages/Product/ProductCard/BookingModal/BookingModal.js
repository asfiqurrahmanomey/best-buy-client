import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingModal = ({ booking, categories, setBooking, products }) => {

    const { title } = booking;
    // * User Info * //
    const { user } = useContext(AuthContext);

    // * Booking event handler * //
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        // const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const bookingDetails = {
            email,
            name,
            meetLocation: location,
            phone,

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Booking Confirm');
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-ghost absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {title}</h3>
                    <p className="py-4"></p>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-4'>
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Your Email" className="my-1 input input-bordered w-full rounded-lg" />
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="User Name" className="my-1 input input-bordered w-full rounded-lg" />
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