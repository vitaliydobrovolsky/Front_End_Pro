import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';


const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark' : 'light'}>{children}</div>
    </ThemeContext.Provider>
  );
};


const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="p-4 shadow-md flex justify-between items-center">
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Головна</Link>
        <Link to="/contacts" className="hover:underline">Контакти</Link>
        <Link to="/about" className="hover:underline">Про мене</Link>
      </nav>
      <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
        Змінити тему
      </button>
    </header>
  );
};


const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Список TODO</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-grow rounded"
          placeholder="Додати завдання"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded">
          Додати
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="p-2 border-b">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Contacts = () => (
  <div className="p-4">
    <h1 className="text-2xl mb-4">Контакти</h1>
    <p>Контактна інформація: vitaliy@example.com, +380 123 456 789</p>
  </div>
);

const About = () => (
  <div className="p-4">
    <h1 className="text-2xl mb-4">Про мене</h1>
    <p>Доброго дня, мене звати Віталій</p>
  </div>
);


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Щось пішло не так. Спробуйте перезавантажити сторінку.</h1>;
    }

    return this.props.children;
  }
}


const App = () => (
  <ThemeProvider>
    <Router>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  </ThemeProvider>
);

export default App;
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
