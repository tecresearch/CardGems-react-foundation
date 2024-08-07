import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

function About() {
  const { productId } = useContext(ProductContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="text-lg">Received ID: {productId ? productId : 'No ID received'}</p>
    </div>
  );
}

export default About;
