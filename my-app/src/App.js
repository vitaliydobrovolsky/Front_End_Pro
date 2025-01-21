// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedVotes = localStorage.getItem('votes');
    this.state = {
      votes: savedVotes ? JSON.parse(savedVotes) : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem('votes', JSON.stringify(this.state.votes));
    }
  }

  handleVote = (id) => {
    this.setState((prevState) => ({
      votes: { ...prevState.votes, [id]: prevState.votes[id] + 1 },
    }));
  };

  showResults = () => {
    const { votes } = this.state;
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

  clearResults = () => {
    this.setState({
      votes: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    });
    localStorage.removeItem('votes');
  };

  render() {
    const { votes } = this.state;
    const { winnerId, maxVotes } = this.showResults();

    return (
      <div className="App">
        <h1>Голосування за найкращий смайлик</h1>
        <div className="emoji-container">
          {Object.entries(votes).map(([id, count]) => (
            <div key={id} className="emoji" onClick={() => this.handleVote(id)}>
              <span role="img" aria-label={`emoji-${id}`} className="emoji-icon">
                {['😀', '😊', '😎', '🤩', '😍'][id - 1]}
              </span>
              <span className="emoji-count">{count}</span>
            </div>
          ))}
        </div>
        <button
          className="button"
          onClick={() => alert(`Переможець: ${['😀', '😊', '😎', '🤩', '😍'][winnerId - 1]} (Кількість голосів: ${maxVotes})`)}
        >
          Show Results
        </button>
        <button className="button" onClick={this.clearResults}>Очистити результати</button>
      </div>
    );
  }
}

export default App;