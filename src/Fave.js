import React, {useState} from 'react';

const Fave = ({onFaveToggle}) => {
  const initialFaveState = false;
  const [isFave, setIsFave] = useState(initialFaveState);

  const handleClick = (event) => {
    event.stopPropagation();
    console.log('Fave was clicked!');
    setIsFave(!isFave);
    onFaveToggle();
  };

  const faveIndicator = (isFave) ? 'remove_from_queue' : 'add_to_queue';
  return (
    <button className={`film-row-fave ${faveIndicator}`} onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </button>
  );
};

export default Fave;
