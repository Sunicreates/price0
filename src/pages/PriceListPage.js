import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ProductTable from '../components/ProductTable';
import Alert from '../components/Alert';
import SearchAndActions from '../components/SearchandActions';
import { useProducts } from '../hooks/useProducts';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

export default function PriceListPage() {
  const [searchArticle, setSearchArticle] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [creating, setCreating] = useState(false);

  const [debouncedSearchArticle, setDebouncedSearchArticle] = useState('');
  const [debouncedSearchProduct, setDebouncedSearchProduct] = useState('');

  const isOnline = useNetworkStatus();
  const { products, loading, error, loadProducts, updateProduct, createProduct } = useProducts();


  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchArticle(searchArticle);
      setDebouncedSearchProduct(searchProduct);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchArticle, searchProduct]);

  const handleChange = useCallback(() => {
   
  }, []);

  const handleBlur = useCallback(async (id, product) => {
    await updateProduct(id, product);
  }, [updateProduct]);

  const handleCreateProduct = useCallback(async () => {
    try {
      setCreating(true);
      const blankProduct = {
        article_no: '',
        product_service: '',
        in_price: '',
        price: '',
        unit: '',
        in_stock: '',
        description: ''
      };

      await createProduct(blankProduct);
    } catch (err) {
      console.error('Failed to create product', err);
    } finally {
      setCreating(false);
    }
  }, [createProduct]);

  const filtered = useMemo(() => products.filter(p =>
    (p.article_no || '').toLowerCase().includes(debouncedSearchArticle.toLowerCase()) &&
    (p.product_service || '').toLowerCase().includes(debouncedSearchProduct.toLowerCase())
  ), [products, debouncedSearchArticle, debouncedSearchProduct]);

  const alerts = useMemo(() => {
    const items = [];
    if (!isOnline) {
      items.push({ id: 'offline', message: 'You are offline. Please check your internet connection.', onRetry: loadProducts });
    }
    if (error) {
      items.push({ id: 'error', message: error, onRetry: loadProducts });
    }
    // dedupe by message text
    return Array.from(new Map(items.map(i => [i.message, i])).values());
  }, [isOnline, error, loadProducts]);

  return (
    <div style={{ overflow: 'hidden' }}>
      {alerts.map(a => (
        <Alert key={a.id} message={a.message} onRetry={a.onRetry} />
      ))}

      <SearchAndActions
        searchArticle={searchArticle}
        setSearchArticle={setSearchArticle}
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct}
        onCreateProduct={handleCreateProduct}
        creating={creating}
      />



      {loading ? (
        <div style={{ padding: '40px 0', textAlign: 'center', color: '#555', background: '#f8f9fa' }}>
          Loading products...
        </div>
      ) : (
        <>
          {!error && filtered.length === 0 && (
            <div style={{ padding: '24px 0', textAlign: 'center', color: '#777', background: '#f8f9fa' }}>
              No products match your search.
            </div>
          )}

          {!error && filtered.length > 0 && (
            <ProductTable
              products={filtered}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          )}
        </>
      )}
    </div>
  );
}