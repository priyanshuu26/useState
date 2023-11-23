import React, { useEffect, useState } from 'react';

function UpdateDocumentTitle() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `current count is ${value}`;
  }, [value]);

  return (
    <div>
      <button type="button" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      <h5>You have clicked {value} times</h5>
    </div>
  );
}

export default UpdateDocumentTitle;
