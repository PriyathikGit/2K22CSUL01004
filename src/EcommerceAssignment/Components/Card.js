import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${product.name}`} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Price: ${product.price}<br />
          Rating: {product.rating}<br />
          Discount: {product.discount}%<br />
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
