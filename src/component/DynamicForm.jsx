import React, { useState } from 'react';

function DynamicForm() {
  const [input, setInput] = useState({ username: '', password: '' });
  const [record, setRecord] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRecord([...record, input]);
  };
  const handleDelete = (para) => {
    const removedUser = record.filter((user, i) => i !== para);
    setRecord(removedUser);
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name: </label>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Passsword: </label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h4>Registered Users: </h4>
        {record.map((user, i) => (
          <li key={record.indexOf(user)}>
            <h3>Name:{user.username}</h3>
            <button type="button" onClick={() => handleDelete(i)}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default DynamicForm;
