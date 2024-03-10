import React, { useState } from 'react';
import './SessionJoinForm.css';

const SessionJoinForm = () => {
  const [sessionCode, setSessionCode] = useState('');

  const handleSessionCodeChange = (event) => {
    setSessionCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Stub for fetching session data from backend
    console.log('Fetching session data from backend...');
    // Reset form field after submission
    setSessionCode('');
  };

  return (
    <div className="session-join-form">
      <h2>Join Existing Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sessionCode">Session Code:</label>
          <input
            type="text"
            id="sessionCode"
            value={sessionCode}
            onChange={handleSessionCodeChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Join Session</button>
      </form>
    </div>
  );
};

export default SessionJoinForm;
