import React from 'react'
import Navbar from '../components/Navbar'
import { Card } from 'antd';
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { Meta } = Card;

export default function HotelsPage() {
    const { term } = useParams();
    const [hotels, setHotels] = useState([])
    const API_URL = term? `http://127.0.0.1:8000/hotels/all/?search=${term}`: `http://127.0.0.1:8000/hotels/my/`
    useEffect(() => {
      const fetchDetails = async() => {
          const response = await(axios.get(API_URL))
          console.log(response.data)
          console.log(API_URL)
          setHotels(response.data)}

        fetchDetails();
      
    }, [term])
  return (

    <div className="px-10 py-5">

    
        <Navbar/>
        <div className="cards-container w-full grid grid-cols-4 justify-center mt-20 mx-auto place-items-center">
            {hotels.map((hotel) => (
                <Link to={`/hotels/${hotel.id}`}>
            <Card hoverable style={{width: 240,} } className="my-6"
            key={hotel.id} cover={<img alt="example" src={hotel.hotel_image}
                                    className="h-64 object-cover" />}>
            <Meta title={hotel.name} description={`From $${hotel.price_per_night} per night`} />
            </Card>
            </Link>
            ))}
        </div>
        </div>
        
  )
}
