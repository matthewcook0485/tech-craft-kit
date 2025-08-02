// JsonBeautifier.js

import React, { useState } from 'react';

const JsonBeautifier = () => {
  const [rawJson, setRawJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');

  const handleBeautify = () => {
    try {
      const parsed = JSON.parse(rawJson);
      const pretty = JSON.stringify(parsed, null, 2);
      setFormattedJson(pretty);
      setError('');
    } catch {
      setError('Invalid JSON');
      setFormattedJson('');
    }
  };

  const handleCopy = async () => {
    if (formattedJson && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(formattedJson);
      } catch {
        // ignore copy errors
      }
    }
  };

  return (
    <div>
      <h2>JSON Beautifier</h2>
      <div>
        <label htmlFor="json-input">JSON Input</label>
        <textarea
          id="json-input"
          value={rawJson}
          onChange={(e) => setRawJson(e.target.value)}
          rows={10}
          cols={50}
          placeholder="Paste JSON here"
        ></textarea>
      </div>
      <div>
        <button onClick={handleBeautify}>Beautify JSON</button>
        {formattedJson && (
          <button onClick={handleCopy} style={{ marginLeft: '0.5rem' }}>
            Copy to Clipboard
          </button>
        )}
      </div>
      {error && (
        <p role="alert" style={{ color: 'red' }}>
          {error}
        </p>
      )}
      {formattedJson && (
        <pre data-testid="formatted-json">{formattedJson}</pre>
      )}
    </div>
  );
};

export default JsonBeautifier;
