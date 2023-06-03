import { Link } from 'react-router-dom';

const GoBackLink = ({ path }) => {
  return (
    <div
      style={{
        marginBottom: '10px',
        padding: '2px',
        color: '#f2f2f2',
        letterSpacing: '0.06em',
        textDecoration: 'none',
        border: '1px solid grey',
        borderRadius: '10px',
      }}
    >
      <Link to={path}>Go Back</Link>
    </div>
  );
};

export default GoBackLink;
