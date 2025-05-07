"use client";
import React, { useState, useEffect } from "react";
import { ImageOff, X, Loader, Loader2 } from "lucide-react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const ProductImage = ({ src, alt, className }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    if (!src || src === "") {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };

    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
          <ImageOff className="h-10 w-10 text-gray-400" />
          <p className="mt-2 text-sm text-gray-500">Image not available</p>
        </div>
      )}

      {!hasError && (
        <img
          src={src || "/placeholder-image.webp"}
          alt={alt}
          className={`h-full w-full object-cover ${
            isLoading ? "invisible" : "visible"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </div>
  );
};

const AddProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1619296794093-3df1ae6819a8?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFeatured: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFeatured: true,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isFeatured: true,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "https://via.placeholder.com/150",
  });

  const [highlightedProduct, setHighlightedProduct] = useState(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.price) return;

    const newProductWithId = {
      ...newProduct,
      id: Date.now(),
      isFeatured: true,
      price: Number(newProduct.price),
    };

    setProducts([...products, newProductWithId]);

    setNewProduct({
      name: "",
      price: "",
      image: "https://via.placeholder.com/150",
    });
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId,
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="mx-auto max-w-6xl p-4">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">
        Featured Products
      </h2>

      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-4 text-xl font-semibold text-gray-700">
          Add New Product
        </h3>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="image"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Image URL (optional)
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Add Product
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className={`transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              highlightedProduct === product.id ? "ring-2 ring-blue-500" : ""
            }`}
            onMouseEnter={() => setHighlightedProduct(product.id)}
            onMouseLeave={() => setHighlightedProduct(null)}
          >
            <div className="relative">
              <ProductImage
                src={product.image}
                alt={product.name}
                className="h-48"
              />
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white opacity-80 transition hover:opacity-100"
                title="Remove product"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-bold text-gray-700">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => alert(`Added ${product.name} to cart!`)}
                className="mt-4 w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="py-8 text-center text-gray-500">
          No products available. Add some!
        </p>
      )}
    </div>
  );
};

export default AddProducts;
