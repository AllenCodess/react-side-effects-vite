import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  // Step 3: Define a function that fetches a programming joke from an API
  const fetchJoke = () => {
    setLoading(true);
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then(response => response.json())
      .then(data => setJoke(data.joke))
      .catch(() => setJoke('Failed to load joke. Please try again.'))
      .finally(() => setLoading(false));
  };

  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;
