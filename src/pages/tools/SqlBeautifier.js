// SqlBeautifier.js

import React, { useState } from 'react';
import { format as formatSQL } from 'sql-formatter';

const SqlBeautifier = () => {
  const [sqlQuery, setSqlQuery] = useState('');
  const [formattedSql, setFormattedSql] = useState('');

  const handleInputChange = (event) => {
    setSqlQuery(event.target.value);
  };

  const handleFormatSql = () => {
    const formattedQuery = formatSQL(sqlQuery);
    setFormattedSql(formattedQuery);
  };

  return (
    <div>
      <h2>SQL Beautifier</h2>
      <div>
        <textarea
          value={sqlQuery}
          onChange={handleInputChange}
          rows={10}
          cols={50}
          placeholder="Enter your SQL query here"
        ></textarea>
      </div>
      <div>
        <button onClick={handleFormatSql}>Format SQL</button>
      </div>
      {formattedSql && (
        <div>
          <h3>Formatted SQL:</h3>
          <pre>{formattedSql}</pre>
        </div>
      )}
    </div>
  );
};

export default SqlBeautifier;
