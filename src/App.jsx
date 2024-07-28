import React from 'react';
import { Card } from './components/Card';
import { cardData } from './data/data'; // Import the data

function App() {
  return (
    <div className="p-4">
      <h1 className="bg-gray-100 text-black p-4 text-center">Products</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
