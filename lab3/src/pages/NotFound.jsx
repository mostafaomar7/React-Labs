import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0', color: '#FFDD00' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '30px' }}>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ 
        padding: '10px 20px',
        backgroundColor: '#FFDD00',
        textDecoration: 'none',
        color: '#000',
        borderRadius: '5px'
      }}>
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
