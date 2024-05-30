// src/App.js
import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserDetails from './components/UserDetails';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='));
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/auth/protected', {
            headers: {
              'Authorization': `Bearer ${token.split('=')[1]}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data', error);
        }
      }
    };
    checkUser();
  }, []);

  return (
    <div>
      {!user ? (
        <div>
          <LoginForm setUser={setUser} />
          <RegisterForm />
        </div>
      ) : (
        <UserDetails user={user} />
      )}
    </div>
  );
};

export default App;
