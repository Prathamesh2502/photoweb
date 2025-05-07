import React, { useEffect, useState } from 'react';

const MyCard = () => {
  const [myCards, setMyCards] = useState([]);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("myCard")) || [];
    setMyCards(savedCards);
  }, []);

  const removeCard = (index) => {
    const updatedCards = myCards.filter((_, i) => i !== index);
    setMyCards(updatedCards);
    localStorage.setItem("myCard", JSON.stringify(updatedCards));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const uniqueNames = myCards.map(card => card.name).join(", ");
    
    const formData = new FormData();
    formData.append("message", `User selected: ${uniqueNames}`);
    
    await fetch("https://formspree.io/f/xvgkawyp", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    alert("Your selection has been sent to your email!");
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">MyCard Page</h1>
      {myCards.length === 0 ? (
        <p>No items in MyCard.</p>
      ) : (
        <div>
          <ul className="flex flex-wrap gap-4 justify-center">
            {myCards.map((card, index) => (
              <li key={index} className="mb-4 px-5 text-center p-4 rounded-lg ">
                <img src={card.img} alt={card.name} className="w-20 h-20 mx-auto rounded" />
                <span className="block mt-2 text-lg font-medium">{card.name}</span>
                <button
                  onClick={() => removeCard(index)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Send to Email
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCard;

  