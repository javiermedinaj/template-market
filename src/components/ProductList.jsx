import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Announcement from './Announcement';
import Footer from './Footer';
const fetchProducts = async () => {
  const { data } = await axios.get('http://localhost:8080/api/products');
  return data;
};

const ProductList = () => {
  const { data: products, isLoading, error } = useQuery('products', fetchProducts);
  const [visibleCount, setVisibleCount] = useState(8);

  if (isLoading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-xl text-red-500">An error has occurred: {error.message}</div>;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="bg-white min-h-screen p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-auto object-cover"
                src={product.linkImgSrc}
                alt={product.name}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-700">Brand: {product.brand}</p>
                <p className="text-gray-700">Price: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>
      <div className='mt-8 mb-8'>
        <Announcement />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
