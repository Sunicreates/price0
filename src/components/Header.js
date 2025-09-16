const LANG_FLAGS = {
  sv: 'https://storage.123fakturere.no/public/flags/SE.png',
  en: 'https://storage.123fakturere.no/public/flags/GB.png',
  no: 'https://storage.123fakturere.no/public/flags/NO.png',
};

export default function Header({ lang = 'no', setLang, avatarUrl, userName = 'John Andre', companyName = 'Storfjord AS', onToggleSidebar, sidebarOpen }) {
  // Default avatar - a simple SVG with initials
  const defaultAvatar = `data:image/svg+xml;base64,${btoa(`
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#0285f7"/>
      <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="600">JA</text>
    </svg>
  `)}`;
  
  return (
    <header className="header">
      <div className="header-left">
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={sidebarOpen ? 'true' : 'false'}
          onClick={onToggleSidebar}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="user-info">
          <img
            src={avatarUrl || defaultAvatar}
            alt={userName}
            className="avatar"
            onError={(e) => {
              e.target.src = defaultAvatar;
            }}
          />
          <div className="user-details">
            <div className="user-name-text">{userName}</div>
            <div className="company-name-text">{companyName}</div>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="lang-selector">
          <span className="lang-text">English</span>
          <img
            src={LANG_FLAGS[lang]}
            alt={lang}
            className="lang-flag"
            onClick={() => setLang(lang === 'en' ? 'no' : 'en')}
          />
        </div>
      </div>
    </header>
  );
}
