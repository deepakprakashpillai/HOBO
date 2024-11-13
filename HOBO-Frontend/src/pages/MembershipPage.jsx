import React, { useState } from 'react';

export default function MembershipPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleMenu = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // toggle the selected item
    };

    return (
        <>
            <div className="grid grid-cols-7 gap-10 px-16 my-20">
                <div className="col-span-4">
                    <h2 className="text-4xl mb-10 font-semibold">Get your membership now!</h2>
                    
                    <div className="cursor-pointer p-4 border-b hover:bg-gray-100 transition duration-150" onClick={() => toggleMenu(0)}>
                        <h2 className="text-xl font-medium">Platinum Membership</h2>
                        {activeIndex === 0 && (
                            <p className="mt-2 text-gray-600">
                                Platinum Membership offers premium features including unlimited bookings, priority support, and exclusive discounts.
                            </p>
                        )}
                    </div>

                    <div className="cursor-pointer p-4 border-b hover:bg-gray-100 transition duration-150" onClick={() => toggleMenu(1)}>
                        <h2 className="text-xl font-medium">Gold Membership</h2>
                        {activeIndex === 1 && (
                            <p className="mt-2 text-gray-600">
                                Gold Membership provides enhanced features like increased booking limits, faster support, and member-only deals.
                            </p>
                        )}
                    </div>

                    <div className="cursor-pointer p-4 hover:bg-gray-100 transition duration-150" onClick={() => toggleMenu(2)}>
                        <h2 className="text-xl font-medium">Silver Membership</h2>
                        {activeIndex === 2 && (
                            <p className="mt-2 text-gray-600">
                                Silver Membership offers standard features, with moderate booking options and regular support.
                            </p>
                        )}
                    </div>
                </div>

                <div className="col-span-3 flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
                    {activeIndex === 0 && (
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/360_F_122447824_YQI3Rhs5GzShIohTQrkgrglkzG0e5NkU.jpg?alt=media&token=9db7168f-a8ea-44a1-af0c-432cb1305308"
                            alt="Platinum Membership"
                            className="w-full h-full object-cover"
                        />
                    )}
                    {activeIndex === 1 && (
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/gold.jpg?alt=media&token=34799a23-ce18-421b-8e89-1b1b50cf290d"
                            alt="Gold Membership"
                            className="w-full h-full object-cover"
                        />
                    )}
                    {activeIndex === 2 && (
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/images.jpg?alt=media&token=1a351a25-d769-4c58-8cdf-6d8762b392d6"
                            alt="Silver Membership"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            </div>
        </>
    );
}
