import React, { useState } from 'react';

const paintings = [
  { src: '/child/1.jpg', title: ' worSpaceld', oldPrice: '₹ 80/sq feet', newPrice: '₹ 69/sq feet' },
  { src: '/child/2.jpg', title: ' stary Space world ', oldPrice: '₹ 150/sq feet', newPrice: '₹ 90/sq feet' },
  { src: '/child/3.jpg', title: 'Rainbow Joy Wall Painting', oldPrice: '₹ 80/sq feet ', newPrice: '₹ 60/sq feet ' },
  { src: '/child/4.jpg', title: 'Magical Forest  Wall Painting', oldPrice: '₹ 90/sq feet', newPrice: '₹ 60/sq feet ' },
  { src: '/child/5.jpg', title: 'flowery trees Wall Painting', oldPrice: '₹ 90/sq feet', newPrice: '₹ 60/sq feet' },
  { src: '/child/6.jpg', title: 'stary cloud Wall Painting', oldPrice: '₹ 150/sq feet ', newPrice: '₹ 100/sq feet' },
  { src: '/child/7.jpg', title: 'Flying Kites,forest Wall Painting', oldPrice: '₹ 120/sq feet', newPrice: '₹ 70/sq feet' },
  { src: '/child/8.jpg', title: 'Dreamy  Wall Painting', oldPrice: '₹ 70/sq feet', newPrice: '₹ 50/sq feet' },
  { src: '/child/9.jpg', title: 'simpal baloon and sky Wall Painting', oldPrice: '₹ 90/sq feet ', newPrice: '₹ 60/sq feet' },
  { src: '/child/10.jpg', title: 'Colorful lotus  Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 80/sq' },
  { src: '/child/11.jpg', title: 'simpal space  Wall Painting', oldPrice: '₹ 100/sq feet', newPrice: '₹ 60/sq feet' },
  { src: '/child/13.jpg', title: 'simpal satry sapce Wall Painting', oldPrice: '₹ 80/sq feet ', newPrice: '₹ 50/sq feet' },
  { src: '/child/14.jpg', title: 'A big Moon & stars Wall Painting', oldPrice: '₹ 150/sq feet', newPrice: '₹ 100/sq feet' },
  { src: '/child/15.jpg', title: 'magical well and butterfly Wall Painting', oldPrice: '₹ 80/sq feet', newPrice: '₹ 50/sq feet' },
];

const ChildPainting = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (painting) => {
    setCart([...cart, painting]);
    alert(`${painting.title} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">Children's Paintings</h1>
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
};

export default ChildPainting;
