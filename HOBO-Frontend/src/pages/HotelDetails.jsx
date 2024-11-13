import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HotelDetailPage() {
    const { id } = useParams();
    const [hotel, setHotel] = useState({
        images: [],
        name: "",
        description: "",
        price_per_night: 0,
        address: "",
        amenities: [],
        policies: [],
    });

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/hotels/hotels/${id}/`);
                console.log(response.data);
                setHotel(response.data);
            } catch (error) {
                console.error("Error fetching hotel data:", error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 pt-24 py-12 flex flex-col md:flex-row items-start w-4/5">
                <div className="flex-shrink-0 mb-8 mt-16 md:mb-0 md:w-1/3 flex justify-center">
                    <img
                        src={hotel.images && hotel.images.length > 0 ? hotel.images[0].image : "default-image-url.jpg"}
                        alt="Hotel"
                        className="h-96 w-64 object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 md:w-2/3 md:ml-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{hotel.name}</h1>
                    <p className="text-md text-gray-600 mb-4">{hotel.description}</p>
                    <div className="text-xl font-semibold text-blue-600 mb-4">₹{hotel.price_per_night} / night</div>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                        Book Now
                    </button>

                    <div className="space-y-6 mt-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Amenities</h3>
                            <ul className="list-disc pl-5 text-gray-700 flex flex-wrap">
                                {hotel.amenities.map((amenity) => (
                                    <li key={amenity.id} className="mb-1 mr-5">{amenity.name}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Policies</h3>
                            <ul className="list-disc pl-5 text-gray-700 flex flex-wrap">
                                {hotel.policies.map((policy) => (
                                    <li key={policy.id} className="mb-1 mr-5">{policy.description}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                            <p className="text-gray-700">{hotel.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
