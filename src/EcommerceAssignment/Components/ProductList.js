import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import ProductCard from './Card';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Phone');
  const [company, setCompany] = useState('AMZ');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [topN, setTopN] = useState(10);
  
  console.log('im here');
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Njg5Nzg5LCJpYXQiOjE3MTg2ODk0ODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ4ZTNhNWNhLTk5MGQtNGE3NC1hNDcxLWJlZWRkMTkyOTU1YiIsInN1YiI6InByaXlhdGhpa3JhakBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6ImQ4ZTNhNWNhLTk5MGQtNGE3NC1hNDcxLWJlZWRkMTkyOTU1YiIsImNsaWVudFNlY3JldCI6Imhvb3lCa3VzdXlKVGNBd08iLCJvd25lck5hbWUiOiJQcml5YXRoaWtyYWoiLCJvd25lckVtYWlsIjoicHJpeWF0aGlrcmFqQGdtYWlsLmNvbSIsInJvbGxObyI6IjJrMjJDU1VMMDEwMDQifQ.v3aSghSEd2i-C-03xde0hvU0VpFo51b2mm2n5zJ5Ni8';
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://20.244.56.144/test/companies/${company}/categories/${category}/products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            top: topN,
            minPrice: minPrice,
            maxPrice: maxPrice,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error fetching products:', error.response.data);
      } else {
        console.error('Error fetching products:', error.message);
      }
    }
  };

  useEffect(() => {
    if (category && company) {
      fetchProducts();
    }
  }, [category, company, minPrice, maxPrice, topN]);
  console.log('hello');
  return (
    <Container>
      <h1>Top Products</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Min Price</Form.Label>
              <Form.Control
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Max Price</Form.Label>
              <Form.Control
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Top N</Form.Label>
              <Form.Control
                type="number"
                value={topN}
                onChange={(e) => setTopN(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" onClick={fetchProducts}>
          Fetch Products
        </Button>
      </Form>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
