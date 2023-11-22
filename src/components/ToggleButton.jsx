import React, { useState } from 'react';

function ToggleButton() {
  const [log, setLog] = useState(false);
  const handleClick = () => {
    setLog(!log);
  };
  return (
    <div>
      <button type="submit" onClick={handleClick}>
        {log ? 'Log In' : 'Log Out'}
      </button>
    </div>
  );
}

export default ToggleButton;
