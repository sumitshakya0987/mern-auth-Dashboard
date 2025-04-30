import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await API.post('/auth/signup', formData);
      console.log("res",res.data)
      if(res.status===201){

          alert('Signup successful! Please login.');
          navigate('/login');
      }
      
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || 'Signup failed!';
      alert(errorMessage);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" name="email" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" name="password" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
