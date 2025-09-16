const Alert = ({ message, type = 'error', onRetry }) => {
  const alertStyles = {
    error: {
      background: '#ffe5e5',
      border: '1px solid #f5b5b5',
      color: '#900'
    },
    warning: {
      background: '#fff3cd',
      border: '1px solid #ffeaa7',
      color: '#856404'
    },
    info: {
      background: '#d1ecf1',
      border: '1px solid #bee5eb',
      color: '#0c5460'
    }
  };

  return (
    <div 
      role="alert" 
      style={{
        ...alertStyles[type],
        padding: '8px 12px',
        marginBottom: 12,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span>{message}</span>
      {onRetry && (
        <button 
          className="btn-pill" 
          style={{ background: '#900', color: '#fff' }} 
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Alert;