import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="container mt-5 text-center">
      
      <header className="mb-4">
        <h1 className="display-4">SWAPI</h1>
        <p className="lead">The Star Wars API</p>
        <p className="text-muted">(what happened to swapi.co?)</p>
      </header>

      
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text">https://swapi.dev/api/</span>
          <input
            type="text"
            className="form-control"
            placeholder="people/1/"
            aria-label="SWAPI Query"
          />
          <button className="btn btn-primary">Request</button>
        </div>
        <p className="mt-2 text-muted">Need a hint? Try <code>people/1/</code> or <code>planets/3/</code> or <code>starships/9/</code></p>
      </div>

      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Response</h5>
          <p className="card-text">Response data will appear here...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
