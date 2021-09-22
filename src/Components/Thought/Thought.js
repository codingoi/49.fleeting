import React, {useEffect} from 'react';

import './Thought.css'

export function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const expired = setTimeout(() => {
      removeThought(thought.id)
    }, thought.expiresAt - Date.now())
    return () => {
      clearInterval(expired)
    }
  }, [thought] )

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  const classNameSelector = () => {
    if(thought.id % 2 === 0) {
      return 'lightbar';
    }
    return 'darkbar';
  }

  return (
    <li className="Thought">
      <div className={classNameSelector()}>{thought.text}

      </div>
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
    </li>
  );
}
