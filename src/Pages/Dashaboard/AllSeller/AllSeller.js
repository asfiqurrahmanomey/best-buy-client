import React from 'react';
import { useQuery } from '@tanstack/react-query'

const AllSeller = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <div>
                <div>
                <h2 className='mt-6 text-orange-600 font-bold'>My Order</h2>
                    <div className="overflow-x-auto mt-2">
                        <table className="table w-full">

                            <thead>
                                <tr className=''>
                                    <th></th>
                                    <th>Category</th>
                                    <th>aDMIN</th>
                                    <th>EMAIL</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, i) =>
                                        <tr key={user._id}>
                                            <th>{i + 1}</th>
                                            <td>{user?.name && user.category }</td>
                                            <td>{user?.name && user.role }</td>
                                            <td>{user.email}</td>
                                            <td><button className='btn btn-sm btn-ghost'>X</button></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;