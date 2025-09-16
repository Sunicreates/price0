const printIcon = 'https://res.cloudinary.com/dae90vgu0/image/upload/v1757979940/WhatsApp_Image_2025-09-13_at_2.00.03_AM_ei34wq.png';

const SearchAndActions = ({
  searchArticle,
  setSearchArticle,
  searchProduct,
  setSearchProduct,
  onCreateProduct,
  creating
}) => {
  return (
    <div className="mobile-search-section">
      <div className="search-inputs">
        <div className="search-input-wrapper">
          <input
            className="search-input"
            placeholder="Search Article No ..."
            value={searchArticle}
            onChange={e => setSearchArticle(e.target.value)}
          />
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            placeholder="Search Product ..."
            value={searchProduct}
            onChange={e => setSearchProduct(e.target.value)}
          />
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
      </div>
      <div className="action-buttons">
        <div className="action-btn-container">
          <span className="action-label laptop-only">New Product</span>
          <button
            className="action-btn add-btn"
            disabled={creating}
            onClick={onCreateProduct}
          >
            <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
        <div className="action-btn-container">
          <span className="action-label laptop-only">Print List</span>
          <button className="action-btn print-btn">
            <img 
              src={printIcon} 
              alt="Print" 
              className="action-icon-img"
            />
          </button>
        </div>
        <div className="action-btn-container">
          <span className="action-label laptop-only">Advanced Mode</span>
          <button className="action-btn toggle-btn">
            <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="8" width="20" height="8" rx="4" fill="#00BFFF"/>
              <circle cx="18" cy="12" r="3" fill="#fff"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndActions;