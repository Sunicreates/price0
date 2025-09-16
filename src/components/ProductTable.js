import { useState, useEffect } from 'react';

const headers = {
  article_no: 'Article No.',
  product_service: 'Product/Service',
  in_price: 'In Price',
  price: 'Price',
  unit: 'Unit',
  in_stock: 'In Stock',
  description: 'Description'
};

function calcFields(width, orientation) {
  if (width < 520) return ['product_service', 'price'];
  if (width < 640) return ['article_no', 'product_service', 'price'];
  if (width < 768) return ['article_no', 'product_service', 'price', 'unit'];
  // Tablet layout - show Article No., Product/Service, Price, In Stock, Unit
  if (width < 1024) {
    return ['article_no', 'product_service', 'price', 'in_stock', 'unit'];
  }
  return ['article_no', 'product_service', 'in_price', 'price', 'unit', 'in_stock', 'description'];
}

export default function ProductTable({ products, handleChange, handleBlur }) {
  const getOrientation = () => (window.matchMedia && window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape');
  const [orientation, setOrientation] = useState(getOrientation());
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [fields, setFields] = useState(() => calcFields(window.innerWidth, orientation));

  useEffect(() => {
    const mq = window.matchMedia('(orientation: portrait)');
    const handleOrientation = () => {
      const o = getOrientation();
      setOrientation(o);
      setFields(calcFields(window.innerWidth, o));
    };
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setFields(calcFields(window.innerWidth, getOrientation()));
    };
    mq.addEventListener ? mq.addEventListener('change', handleOrientation) : mq.addListener(handleOrientation);
    window.addEventListener('resize', handleResize);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handleOrientation) : mq.removeListener(handleOrientation);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (viewportWidth < 768) {
    return (
      <div className="mobile-product-list">
        <div className="list-header">
          <div className="header-cell">Product/Service</div>
          <div className="header-cell">Price</div>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={product.id} className="product-item">
              <div className="product-info">
                <div className="product-name">
                  <input
                    className="product-input"
                    value={product.product_service ?? ''}
                    onChange={e => handleChange(product.id, 'product_service', e.target.value)}
                    onBlur={() => handleBlur(product.id, product)}
                    placeholder="Product/Service"
                  />
                </div>
                <div className="product-price">
                  <input
                    className="price-input"
                    value={product.price ?? ''}
                    onChange={e => handleChange(product.id, 'price', e.target.value)}
                    onBlur={() => handleBlur(product.id, product)}
                    placeholder="Price"
                  />
                  <button className="more-options">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  if (viewportWidth < 1000) {
    return (
      <div className="mobile-product-list tablet-list">
        <div className="list-header">
          {['article_no', 'product_service', 'price', 'in_stock', 'unit'].map(field => (
            <div key={field} className="header-cell">{headers[field]}</div>
          ))}
          <div className="header-cell"></div>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={product.id} className="product-item tablet-row">
              <div className="tablet-field">
                <input
                  className="product-input"
                  value={product.article_no ?? ''}
                  onChange={e => handleChange(product.id, 'article_no', e.target.value)}
                  onBlur={() => handleBlur(product.id, product)}
                  placeholder="Article"
                />
              </div>
              <div className="tablet-field">
                <input
                  className="product-input"
                  value={product.product_service ?? ''}
                  onChange={e => handleChange(product.id, 'product_service', e.target.value)}
                  onBlur={() => handleBlur(product.id, product)}
                  placeholder="Product/Service"
                />
              </div>
              <div className="tablet-field">
                <input
                  className="price-input"
                  value={product.price ?? ''}
                  onChange={e => handleChange(product.id, 'price', e.target.value)}
                  onBlur={() => handleBlur(product.id, product)}
                  placeholder="Price"
                />
              </div>
              <div className="tablet-field">
                <input
                  className="product-input"
                  value={product.in_stock ?? ''}
                  onChange={e => handleChange(product.id, 'in_stock', e.target.value)}
                  onBlur={() => handleBlur(product.id, product)}
                  placeholder="In Stock"
                />
              </div>
              <div className="tablet-field">
                <input
                  className="product-input"
                  value={product.unit ?? ''}
                  onChange={e => handleChange(product.id, 'unit', e.target.value)}
                  onBlur={() => handleBlur(product.id, product)}
                  placeholder="Unit"
                />
              </div>
              <div className="tablet-field actions-field">
                <button className="more-options">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  return (
    <div className="mobile-product-list laptop-list">
      <div className="list-header">
        {fields.map(field => (
          <div key={field} className="header-cell">{headers[field]}</div>
        ))}
        <div className="header-cell"></div>
      </div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={product.id} className="product-item laptop-row">
            <div className="laptop-field">
              <input
                className="product-input"
                value={product.article_no ?? ''}
                onChange={e => handleChange(product.id, 'article_no', e.target.value)}
                onBlur={() => handleBlur(product.id, product)}
                placeholder="Article No."
              />
            </div>
            <div className="laptop-field">
              <input
                className="product-input"
                value={product.product_service ?? ''}
                onChange={e => handleChange(product.id, 'product_service', e.target.value)}
                onBlur={() => handleBlur(product.id, product)}
                placeholder="Product/Service"
              />
            </div>
            <div className="laptop-field">
              <input
                className="product-input"
                value={product.in_price ?? ''}
                onChange={e => handleChange(product.id, 'in_price', e.target.value)}
                onBlur={() => handleBlur(product.id, product)}
                placeholder="In Price"
              />
            </div>
            <div className="laptop-field">
              <input
                className="price-input"
                value={product.price ?? ''}
                onChange={e => handleChange(product.id, 'price', e.target.value)}
                onBlur={() => handleBlur(product.id, product)}
                placeholder="Price"
              />
            </div>
            <div className="laptop-field">
              <input
                className="product-input"
                value={product.unit ?? ''}
                onChange={e => handleChange(product.id, 'unit', e.target.value)}
                onBlur={() => handleBlur(product.id, product)}
                placeholder="Unit"
              />
            </div>
            <div className="laptop-field">
              <input
                className="product-input"
                value={product.in_stock ?? ''}
                onChange={e => handleChange(product.id, 'in_stock', e.target.value)}
                onBlur={() => handleBlur(product.id, product)}
                placeholder="In Stock"
              />
            </div>
            <div className="laptop-field">
              <input
                className="product-input"
                value={product.description ?? ''}
                onChange={e => handleChange(product.id, 'description', e.target.value)}
                onBlur={() => handleBlur(product.id, product)}
                placeholder="Description"
              />
            </div>
            <div className="laptop-field actions-field">
              <button className="more-options">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}