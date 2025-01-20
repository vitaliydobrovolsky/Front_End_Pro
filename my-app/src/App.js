import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem('votes');
    return savedVotes ? JSON.parse(savedVotes) : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  });

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (id) => {
    setVotes((prevVotes) => ({ ...prevVotes, [id]: prevVotes[id] + 1 }));
  };

  const showResults = () => {
    let maxVotes = 0;
    let winnerId = null;
    for (let id in votes) {
      if (votes[id] > maxVotes) {
        maxVotes = votes[id];
        winnerId = id;
      }
    }
    return { winnerId, maxVotes };
  };

  const clearResults = () => {
    setVotes({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
    localStorage.removeItem('votes');
  };

  const { winnerId, maxVotes } = showResults();

  return (
    <div className="App">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="emoji-container">
        {Object.entries(votes).map(([id, count]) => (
          <div key={id} className="emoji" onClick={() => handleVote(id)}>
            <span role="img" aria-label={`emoji-${id}`} className="emoji-icon">
              {['😀', '😊', '😎', '🤩', '😍'][id - 1]}
            </span>
            <span className="emoji-count">{count}</span>
          </div>
        ))}
      </div>
      <button className="button" onClick={() => alert(`Переможець: ${['😀', '😊', '😎', '🤩', '😍'][winnerId - 1]} (Кількість голосів: ${maxVotes})`)}>
        Show Results
      </button>
      <button className="button" onClick={clearResults}>Очистити результати</button>
    </div>
  );
};



export default App;

