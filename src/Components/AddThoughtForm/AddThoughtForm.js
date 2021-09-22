import React, { useState } from 'react';

import { generateId, getNewExpirationTime } from '../../util/utilities';

import './AddThoughtForm.css'

export function AddThoughtForm(props) {
  const { addThought } = props;
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      }
      console.log(thought)
      addThought(thought);
    }
    setText('')
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
    console.log("Text", text)
  }



  return (
    <form className="AddThoughtForm"
      onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
        min="1"
        maxLength="280"
      />
      <button type="submit">
        <span class="material-icons">
        add
        </span>
      </button>
    </form>
  );
}
