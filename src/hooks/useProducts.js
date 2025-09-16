import { useState, useCallback } from 'react';

const API_BASE = process.env.REACT_APP_API_BASE || 'https://price-list-m9of.onrender.com';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    if (!navigator.onLine) {
      setError('You are offline. Please check your internet connection.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/products`);
      if (!response.ok) throw new Error('Failed to fetch products');

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Fetch products failed', err);
      setError('Failed to load products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProduct = useCallback(async (id, product) => {
    try {
      const response = await fetch(`${API_BASE}/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error('Failed to update product');
      return true;
    } catch (err) {
      console.error('Update product failed', err);
      return false;
    }
  }, []);

  const createProduct = useCallback(async (productData) => {
    try {
      const response = await fetch(`${API_BASE}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });

      if (!response.ok) throw new Error('Failed to create product');

      const createdProduct = await response.json();
      return createdProduct;
    } catch (err) {
      console.error('Create product failed', err);
      throw err;
    }
  }, []);

  return {
    products,
    setProducts,
    loading,
    error,
    loadProducts,
    updateProduct,
    createProduct
  };
};