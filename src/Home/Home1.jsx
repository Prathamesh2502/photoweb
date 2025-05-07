import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3400, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  
const images = [
  { img: "/assets/1.png", name: "Sunset Bliss", type: "Oil Painting", price: "$250" },
  { img: "/assets/2.png", name: "Golden Forest", type: "Acrylic Painting", price: "$180" },
  { img: "/assets/3.png", name: "Ocean Dreams", type: "Watercolor", price: "$150" },
  { img: "/assets/4.png", name: "Mystic Mountains", type: "Digital Art", price: "$200" },
  { img: "/assets/5.png", name: "Autumn Reflections", type: "Charcoal", price: "$220" },
  { img: "/assets/6.png", name: "Serene Lake", type: "Oil Painting", price: "$190" },
  { img: "/assets/7.png", name: "Abstract Wonders", type: "Mixed Media", price: "$280" },
  { img: "/assets/8.png", name: "Night Sky", type: "Watercolor", price: "$170" },
  { img: "/assets/9.png", name: "Wild Horses", type: "Acrylic Painting", price: "$300" },
  { img: "/assets/10.png", name: "Tranquil Forest", type: "Sketch", price: "$160" },
  ];
const image1 = [
  { img: "/assets/1.png", name: "Sunset Bliss", type: "Oil Painting", price: "$250" },
  { img: "/assets/2.png", name: "Golden Forest", type: "Acrylic Painting", price: "$180" },
  { img: "/assets/3.png", name: "Ocean Dreams", type: "Watercolor", price: "$150" },
  { img: "/assets/4.png", name: "Mystic Mountains", type: "Digital Art", price: "$200" },
  { img: "/assets/5.png", name: "Autumn Reflections", type: "Charcoal", price: "$220" },
  { img: "/assets/6.png", name: "Serene Lake", type: "Oil Painting", price: "$190" },
  { img: "/assets/7.png", name: "Abstract Wonders", type: "Mixed Media", price: "$280" },
  { img: "/assets/8.png", name: "Night Sky", type: "Watercolor", price: "$170" },
  { img: "/assets/9.png", name: "Wild Horses", type: "Acrylic Painting", price: "$300" },
  { img: "/assets/10.png", name: "Tranquil Forest", type: "Sketch", price: "$160" },
  ];

  const paintings = [
    { img: "/assets/1.png", name: "Sunset Bliss", type: "Oil Painting", price: "$250" },
    { img: "/assets/2.png", name: "Golden Forest", type: "Acrylic Painting", price: "$180" },
    { img: "/assets/3.png", name: "Ocean Dreams", type: "Watercolor", price: "$150" },
    { img: "/assets/4.png", name: "Mystic Mountains", type: "Digital Art", price: "$200" },
    { img: "/assets/5.png", name: "Autumn Reflections", type: "Charcoal", price: "$220" },
    { img: "/assets/6.png", name: "Serene Lake", type: "Oil Painting", price: "$190" },
    { img: "/assets/7.png", name: "Abstract Wonders", type: "Mixed Media", price: "$280" },
    { img: "/assets/8.png", name: "Night Sky", type: "Watercolor", price: "$170" },
    { img: "/assets/9.png", name: "Wild Horses", type: "Acrylic Painting", price: "$300" },
    { img: "/assets/10.png", name: "Tranquil Forest", type: "Sketch", price: "$160" },
  ];
  
function Home1() {

  const navigate = useNavigate();

  const addToMyCard = (item) => {
    let myCard = JSON.parse(localStorage.getItem("myCard")) || [];
    const isAlreadyAdded = myCard.some((card) => card.img === item.img);
    
    if (!isAlreadyAdded) {
      myCard.push(item);
      localStorage.setItem("myCard", JSON.stringify(myCard));
      alert(`${item.name} added to MyCard!`);
    } else {
      alert(`${item.name} is already in MyCard!`);
    }
  };
  
  return (
    <>
  {/* //   <div 
  //   className="min-h-screen bg-gray-900 flex flex-col items-center justify-center bg-cover bg-center" 
  //   style={{ backgroundImage: "url('/assets/12.jpg')" }}
  // > */}
    <h1 className=" text-4xl font-bold mb-8">Welcome to My Art Gallery</h1>
    <Carousel responsive={responsive} autoPlay={true} infinite={true} className="w-full">
  {images.map((painting, index) => (
    <div key={index} className="p-4 bg-black rounded-lg shadow-lg mx-1 text-white">
      <img
        src={painting.img}
        alt={painting.name}
        className="w-80 h-80 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold">{painting.name}</h2>
      <p className="text-gray-400">{painting.type}</p>
      <p className="text-lg font-bold text-yellow-400">{painting.price}</p>
     <button
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => addToMyCard(painting)}
            >
              Add to MyCard
            </button>
    </div>
  ))}
</Carousel>


    <h1 className=" text-4xl font-bold mb-8">Welcome to My Art Gallery</h1>
    <Carousel responsive={responsive} autoPlay={true} infinite={true} className="w-full">
  {image1.map((painting, index) => (
    <div key={index} className="p-4 bg-black rounded-lg shadow-lg mx-1 text-white">
      <img
        src={painting.img}
        alt={painting.name}
        className="w-80 h-80 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold">{painting.name}</h2>
      <p className="text-gray-400">{painting.type}</p>
      <p className="text-lg font-bold text-yellow-400">{painting.price}</p>
      <button
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => addToMyCard(painting)}
            >
              Add to MyCard
            </button>
    </div>
  ))}
</Carousel>


    <h1 className=" text-4xl font-bold mb-8 text-center pt-10" >Popular paintings</h1>
    <Carousel responsive={responsive} autoPlay={true} infinite={true} className="w-full">
  {paintings.map((painting, index) => (
    <div key={index} className="p-4 bg-black rounded-lg shadow-lg mx-1 text-white">
      <img
        src={painting.img}
        alt={painting.name}
        className="w-80 h-80 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold">{painting.name}</h2>
      <p className="text-gray-400">{painting.type}</p>
      <p className="text-lg font-bold text-yellow-400">{painting.price}</p>
      <button
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => addToMyCard(painting)}
      >
        Add to MyCard
      </button>
    </div>
  ))}
</Carousel>

  {/* // </div> */}
      </>

  )
}

export default Home1
