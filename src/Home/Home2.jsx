import React from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: '/assets/1.png', title: 'Children Paintings', path: '/child' },
  { src: '/assets/2.png', title: 'Home Paintings', path: '/home' },
  { src: '/assets/3.png', title: 'Hotel Paintings', path: '/hotel' },
  { src: '/assets/4.png', title: 'Modern Art', path: '/modern' },
  { src: '/assets/5.png', title: 'Nature Art', path: '/nature' },
];

const Home2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#ecddd911] flex flex-col items-center py-10 px-4">
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
        Discover the Bestseller
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate(item.path)}
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg border-4 border-white flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-xs sm:text-sm md:text-base font-bold text-center py-2">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2;
