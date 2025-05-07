import React, { useState } from 'react';

const paintings = [
  { src: '/home/1 (1).jfif ', title: 'shrinathaji and mural design Wall Painting', oldPrice: '₹ 150/sq feet ', newPrice: '₹ 120/sq feet' },
  { src: '/home/1 (2).jfif ', title: 'Nature’s Beauty Canvas Wall Painting 2.5x6 feet', oldPrice: '₹ 14,000/-', newPrice: '₹ 9,999/-' },
  { src: '/home/1 (3).jfif ', title: 'Rainbow Joy Canvas Wall Painting 2.5x8 feet', oldPrice: '₹ 20,000/-', newPrice: '₹ 13,000/-' },
  { src: '/home/1 (4).jfif ', title: ' Wall Painting', oldPrice: '₹ ', newPrice: '₹ 2,899' },
  { src: '/home/1 (5).jfif ', title: 'Happy Village Canvas Wall Painting', oldPrice: '₹ 5,999', newPrice: '₹ 2,599' },
  { src: '/home/1 (6).jfif ', title: 'Underwater World Canvas Wall Painting', oldPrice: '₹ 6,299', newPrice: '₹ 2,499' },
  { src: '/home/1 (7).jfif ', title: 'Flying Kites Canvas Wall Painting', oldPrice: '₹ 5,799', newPrice: '₹ 2,399' },
  { src: '/home/1 (8).jfif ', title: 'Dreamy Night Canvas Wall Painting', oldPrice: '₹ 6,199', newPrice: '₹ 2,599' },
  { src: '/home/1 (9).jfif ', title: 'Smiling Sun Canvas Wall Painting', oldPrice: '₹ 7,299', newPrice: '₹ 3,099' },
  { src: '/home/1 (10).jfif ', title: 'Colorful Birds Canvas Wall Painting', oldPrice: '₹ 5,999', newPrice: '₹ 2,799' },
  { src: '/home/1 (11).jfif ', title: 'Little Farm Canvas Wall Painting', oldPrice: '₹ 6,899', newPrice: '₹ 2,999' },
  { src: '/home/1 (12).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (13).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (14).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (15).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (16).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (17).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (18).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (19).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (20).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (21).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (22).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (23).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (24).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (25).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (26).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (27).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (28).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (29).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (30).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
  { src: '/home/1 (31).jfif ', title: 'Mountain View Canvas Wall Painting', oldPrice: '₹ 7,499', newPrice: '₹ 3,299' },
];
function Homee() {
  const [cart, setCart] = useState([]);

  const addToCart = (painting) => {
    setCart([...cart, painting]);
    alert(`${painting.title} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">Home's Paintings</h1>
      <div className="grid grid-cols-4 gap-6">
        {paintings.map((painting, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={painting.src} alt={painting.title} className="w-full h-80 object-cover rounded-lg" />
            <h3 className="mt-3 text-lg font-semibold text-center">{painting.title}</h3>
            <p className="text-gray-400 line-through">{painting.oldPrice}</p>
            <p className="text-green-400 font-bold">{painting.newPrice}</p>
            <button
              onClick={() => addToCart(painting)}
              className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homee;





