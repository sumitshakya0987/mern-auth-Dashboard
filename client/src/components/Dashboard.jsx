import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
        setStatus('success');
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  }, []);

  if (status === 'loading') return <div className="text-center mt-5">Loading...</div>;
  if (status === 'error') return <div className="text-center mt-5">Error loading products!</div>;

  return (
    <div className="container mt-5">
      <h2>Dashboard - Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mt-3">
            <div className="card">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
