import React from 'react';
import Home from './Home';
import About from './About';
import user from '../data/user';

function App() {
  return (
    <div>
      <nav>
        {/* Navigation content can go here */}
      </nav>
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
