import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const addProduct = async (productData) => {
  const { data } = await axios.post('procces.env.API_URL', productData, {
    auth: {
      username: 'procces.env.USERNAME', 
      password: 'procces.env.PASSWORD'
    }
  });
  return data;
};

const AdminPanel = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const productData = Object.fromEntries(formData.entries());
    mutation.mutate(productData);
  };

  return (
    <div className=" flex flex-col items-center p-8 bg-gray-500 shadow-md ">
      <h1 className="text-4xl font-bold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="linkImgSrc" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            id="linkImgSrc"
            name="linkImgSrc"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;