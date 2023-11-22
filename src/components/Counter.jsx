import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setValue(value + 1)}>
        +1
      </button>
      {value}
      <button type="button" onClick={() => setValue(value - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
