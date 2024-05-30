// src/components/UserDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {user.username}</p>
      {/* Add more user details if needed */}
    </div>
  );
};

export default UserDetails;
