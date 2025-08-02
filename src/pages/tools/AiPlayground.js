// AiPlayground.js

import React, { useState } from 'react';

const AiPlayground = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleAsk = async () => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!apiKey) {
      setError('No API key set');
      return;
    }

    try {
      setError('');
      setResponse('Loading...');
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.choices?.[0]?.message?.content;
      setResponse(text || 'No response');
    } catch {
      setError('Request failed');
      setResponse('');
    }
  };

  return (
    <div>
      <h2>AI Playground</h2>
      <div>
        <label htmlFor="prompt-input">Prompt</label>
        <textarea
          id="prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={5}
          cols={50}
          placeholder="Ask something..."
        ></textarea>
      </div>
      <div>
        <button onClick={handleAsk}>Ask AI</button>
      </div>
      {error && (
        <p role="alert" style={{ color: 'red' }}>
          {error}
        </p>
      )}
      {response && <pre data-testid="ai-response">{response}</pre>}
    </div>
  );
};

export default AiPlayground;
