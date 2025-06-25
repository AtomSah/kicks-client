import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DynamicProductSection = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/shoes');
                // Shuffle to make them random
                const shuffled = res.data.sort(() => 0.5 - Math.random());
                setProducts(shuffled.slice(0, 8)); // limit to 8 products
            } catch (err) {
                console.error("Failed to fetch shoes", err);
            }
        };

        fetchProducts();
    }, []);
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            onClick={() => navigate(`/product/${product._id}`)}
                        >
                            <div className="relative">
                                <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{product.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                                    <button className="p-2 rounded-full bg-gray-200 text-gray-600">
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DynamicProductSection;
