import React from 'react';
import { Carousel, List } from 'antd';

const data1 = [
  'Taj Mahal',
  'Hampi',
  'Jaipur City Palace',
  'Kerala Backwaters',
  'Ranthambore National Park',
];

const data2 = [
  'Varanasi Ghats',
  'Meenakshi Temple',
  'Jaisalmer Fort',
  'Sundarbans National Park',
  'Mysore Palace',
];

const data3 = [
  'Ajanta and Ellora Caves',
  'Qutub Minar',
  'Rishikesh',
  'Golden Temple',
  'Andaman and Nicobar Islands',
];

export default function PopularPage() {
  return (
    <div className="w-screen flex flex-col">
      <h2 className="text-center text-4xl mb-10 font-bold">Popular Hotels</h2>

      <Carousel autoplay arrows className="mb-24 w-4/5 ml-32">
        <div className="relative">
          <img
            className="w-screen h-96 bg-blue-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/hotel1.jpg?alt=media&token=a438b6ad-af11-464a-8eae-8562c8b45211"
            alt="Hotel Taj"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Hotel Taj
          </h4>
        </div>
        <div className="relative">
          <img
            className="w-screen h-96 bg-red-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/hotel3.jpg?alt=media&token=f05f381b-d2ec-4876-b559-70d0d57e9945"
            alt="Hotel Arcade"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Hotel Arcade
          </h4>
        </div>
        <div className="relative">
          <img
            className="w-screen h-96 bg-green-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/ab975b16834c6869fbe48191bcfea78d.jpg?alt=media&token=b3c729c3-9ef2-439a-a29b-82d8f3923d05"
            alt="Hotel Yamuna"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Hotel Yamuna
          </h4>
        </div>
        <div className="relative">
          <img
            className="w-screen h-96 bg-yellow-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/banner.jpg?alt=media&token=adde4e4d-e0ad-4b12-aec3-f3149a73b2f3"
            alt="Hotel Frisby"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Hotel Frisby
          </h4>
        </div>
      </Carousel>

      <h2 className="text-center text-3xl mb-10 font-semibold">
        Popular Destinations For This Summer
      </h2>

      <Carousel autoplay arrows className="mb-24 w-4/5 ml-32">
        <div className="relative">
          <img
            className="w-full h-96 bg-blue-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/dest-bg.jpg?alt=media&token=8a632813-5a37-4799-9399-c98d344cd658"
            alt="Puducheri"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Puducheri
          </h4>
        </div>
        <div className="relative">
          <img
            className="w-full h-96 bg-red-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/dest1.jpg?alt=media&token=37e509ee-cd68-4850-87ee-4688243f551f"
            alt="Varkala"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Varkala
          </h4>
        </div>
        <div className="relative">
          <img
            className="w-full h-96 bg-green-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/dest2.jpg?alt=media&token=f3a89ce2-55fb-4387-a564-b7660e94479f"
            alt="Goa"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Goa
          </h4>
        </div>
        <div className="relative">
          <img
            className="w-full h-96 bg-yellow-400 object-cover rounded-lg shadow-md"
            src="https://firebasestorage.googleapis.com/v0/b/hobo-6816a.appspot.com/o/dest3.jpg?alt=media&token=82cb9112-450c-4d8a-b204-d279430803d0"
            alt="Lakshadweep"
          />
          <h4 className="absolute bottom-4 left-4 z-50 text-4xl text-white font-bold">
            Lakshadweep
          </h4>
        </div>
      </Carousel>

      <div className="grid grid-cols-5 gap-5 px-10 mb-20 w-full">
        <div className="col-span-2 text-4xl font-semibold px-10 flex justify-center items-center">
          <h2>Popular Tourist Destinations in India</h2>
        </div>

        <List
          size="small"
          dataSource={data1}
          renderItem={(item) => (
            <List.Item>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(item)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {item}
              </a>
            </List.Item>
          )}
        />

        <List
          size="small"
          dataSource={data2}
          renderItem={(item) => (
            <List.Item>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(item)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {item}
              </a>
            </List.Item>
          )}
        />

        <List
          size="small"
          dataSource={data3}
          renderItem={(item) => (
            <List.Item>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(item)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {item}
              </a>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
