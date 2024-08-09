import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`/api/message`);
        
        // Check if the response is OK and has content
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const responseText = await response.text();
  
        // Check if the responseText is non-empty and valid JSON
        if (responseText) {
          const data = JSON.parse(responseText);
          setData(data.text);
        } else {
          throw new Error('Empty response from API');
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setData('Error fetching data');
      }
    })();
  }, []);
  

  return <div>{data}</div>;
}

export default App;