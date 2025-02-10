import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter, clearCharacter } from './store/actions';
import './App.css';

const App = () => {
    const [id, setId] = useState('1');
    const dispatch = useDispatch();
    const { character, loading, error } = useSelector(state => state);

    return (
        <div className="container">
            <h1>SWAPI</h1>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => dispatch(fetchCharacter(id))}>Get Info</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {character && (
                <pre>{JSON.stringify(character, null, 2)}</pre>
            )}
            <footer>
                <button onClick={() => dispatch(clearCharacter())}>Clear</button>
            </footer>
        </div>
    );
};

export default App;