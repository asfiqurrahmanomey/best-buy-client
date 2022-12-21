import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query'

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const url = `https://best-buy-service-server-eta.vercel.app/bookings?email=${user?.email}`;
    // * Tan Query * //
    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })

    return (
        <div>
            <div className="overflow-x-auto mt-6">
                <h2 className='mb-2 text-orange-600 font-bold'>My Order</h2>
                <table className="table w-full">

                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => 
                            <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.title}</td>
                                <td>৳{booking.selling_price}</td>
                                <td>{booking.meetLocation}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;