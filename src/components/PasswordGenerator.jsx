import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  // Function to generate a random password
  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setPassword(password);
  };

  // Function to download the password as a file
  const downloadPassword = () => {
    const element = document.createElement('a');
    const file = new Blob([password], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'secret.txt';
    document.body.appendChild(element); // Required for Firefox
    element.click();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Password Generator</h2>
      <button onClick={generatePassword}>Generate Password</button>
      {password && (
        <>
          <div style={{ marginTop: '20px' }}>
            <strong>Generated Password:</strong> {password}
          </div>
          <button onClick={downloadPassword} style={{ marginTop: '10px' }}>
            Download Password
          </button>
        </>
      )}
    </div>
  );
};

export default PasswordGenerator;