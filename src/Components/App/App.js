import React, { useState } from 'react';

import { AddThoughtForm } from '../AddThoughtForm/AddThoughtForm';
import { Thought } from '../Thought/Thought';
import { generateId, getNewExpirationTime } from '../../util/utilities';

import './App.css';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 60 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  
const addThought = (thought) => {
  setThoughts((prev) => [...prev, thought])
}

const removeThought = (thoughtId) => {

  setThoughts(prev => prev.filter((thought) => {return thought.id !== thoughtId}))
    console.log(thoughts)

}

  return (
    <div className="App">
      <header>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <main>
      <h1>My friend, let's not think of tomorrow, but let's enjoy this fleeting moment of life.</h1>
        <AddThoughtForm addThought ={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

