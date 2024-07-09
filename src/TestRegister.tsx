import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;

interface SignupData {
  username: string;
  password: string;
  name: string;
  email: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupData>({
    username: '',
    password: '',
    name: '',
    email: ''
  });
  const [error, setError] = useState<string | null>(null);

  const onFinish = (event: React.FormEvent) => {
    event.preventDefault();

    axios.post(
      'http://localhost:8080/api/user',
      formData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(response => {
        console.log('Signup successful:', response.data);
        // 여기서 받은 데이터를 처리하거나 상태 업데이트를 할 수 있습니다.

      })
      .catch(err => {
        console.error(err);
        setError('Signup failed. Please try again.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>
      <form onSubmit={onFinish} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginBottom: '15px'
  }
};

export default Signup;
