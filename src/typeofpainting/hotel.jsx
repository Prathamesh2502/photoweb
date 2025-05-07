import React, { useState } from 'react'


const paintings = [
  { src: '/hotel/1 (1).jfif ', title: 'singuler  realstic product and more ', oldPrice: '₹ 170/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (2).jfif ', title: 'cofee greenery Murals', oldPrice: '₹ 150/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (3).jfif ', title: 'black bord murals Wall Painting', oldPrice: '₹ 120/sq feet ', newPrice: '₹ 90/sq feet' },
  { src: '/hotel/1 (4).jfif ', title: ' Wall Painting', oldPrice: '₹ 190/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (5).jfif ', title: 'text and design  Wall Painting', oldPrice: '₹ 120/sq feet', newPrice: '₹ 90/sq feet' },
  { src: '/hotel/1 (6).jfif ', title: 'one colour Wall design ', oldPrice: '₹ 100/sq feet ', newPrice: '₹ 70/sq feet' },
  { src: '/hotel/1 (7).jfif ', title: 'foods item and text design  Painting', oldPrice: '₹ 130/sq feet ', newPrice: '₹ 100/sq feet' },
  { src: '/hotel/1 (8).jfif ', title: 'text and design  Canvas Wall Painting', oldPrice: '₹ 120/sq feet ', newPrice: '₹ 100/sq feet ' },
  { src: '/hotel/1 (9).jfif ', title: 'one colour charectors  Wall Painting', oldPrice: '₹ 120/sq feet', newPrice: '₹ 80/sq feet ' },
  { src: '/hotel/1 (10).jfif ', title: 'couple and design  Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (11).jfif ', title: 'creative design and text Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (12).jfif ', title: 'forest greenery Wall Painting', oldPrice: '₹ 250/sq feet', newPrice: '₹ 200/sq feet' },
  { src: '/hotel/1 (13).jfif ', title: 'forest greenery Wall Painting', oldPrice: '₹ 170/sq feet', newPrice: '₹ 150/sq feet' },
  { src: '/hotel/1 (14).jfif ', title: '3d shapes food product Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (15).jfif ', title: 'text design Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (16).jfif ', title: ' coffee murals Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 100/sq feet' },
  { src: '/hotel/1 (17).jfif ', title: 'mural  Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 100/sq feet' },
  { src: '/hotel/1 (18).jfif ', title: 'foodie products Wall Painting', oldPrice: '₹ 150/sq feet ', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (19).jfif ', title: 'text and design Wall Painting', oldPrice: '₹ 120/sq feet ', newPrice: '₹ 80/sq feet' },
  { src: '/hotel/1 (20).jfif ', title: 'creative art  Walls ', oldPrice: '₹ 150/sq feet', newPrice: '₹ 120/sq feet' },
  { src: '/hotel/1 (21).jfif ', title: ' one line potrait Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 100/sq feet' },
  { src: '/hotel/1 (22).jfif ', title: 'natural touch  Wall Painting', oldPrice: '₹ 150/sq feet ', newPrice: '₹ 120/sq feet ' },
    ];
    function Hotel() {
      const [cart, setCart] = useState([]);
    
      const addToCart = (item) => {
        setCart([...cart, item]);
        alert(`${item.title} has been added to the cart!`);
      };
    
      return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
          <h1 className="text-4xl font-bold mb-8">Hotel's Paintings</h1>
          <div className="grid grid-cols-4 gap-6">
            {paintings.map((painting, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                <img src={painting.src} alt={painting.title} className="w-full h-80 object-cover rounded-lg" />
                <h3 className="mt-3 text-lg font-semibold">{painting.title}</h3>
                <p className="text-gray-400 line-through">{painting.oldPrice}</p>
                <p className="text-green-400 font-bold">{painting.newPrice}</p>
                <button
                  onClick={() => addToCart(painting)}
                  className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Hotel;