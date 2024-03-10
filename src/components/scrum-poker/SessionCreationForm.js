import React, { useState } from 'react';
import './SessionCreationForm.css';

const SessionCreationForm = ({ onSaveSession }) => {
  const [sessionName, setSessionName] = useState('');

  const handleSessionNameChange = (event) => {
    setSessionName(event.target.value);
  };

  const generateSessionCode = () => {
    // Generate a UUID (GUID)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const sessionCode = generateSessionCode();
    // Call the onSaveSession function with the session name and code
    onSaveSession({ name: sessionName, code: sessionCode });
    // Reset form field after submission
    setSessionName('');
  };

  return (
    <div className="session-creation-form">
      <h2>Create New Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sessionName">Session Name:</label>
          <input
            type="text"
            id="sessionName"
            value={sessionName}
            onChange={handleSessionNameChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Session</button>
      </form>
    </div>
  );
};

export default SessionCreationForm;
