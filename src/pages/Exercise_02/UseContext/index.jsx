import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

function UseContextPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="exercise-container">
      <div className="p-4">
        <h1>useContext Example</h1>
        <ParentComponent count={count}/>
        <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
      </div>
    </div>
  );
}

function ParentComponent(props) {
  const count = props.count;
  return (
      <div>
        <h2>Parent Component</h2>
        <ChildComponent count={count}/>
      </div>
  );
}

ParentComponent.propTypes = {
  count: PropTypes.number,
}

function ChildComponent(props) {
  const count = props.count;
  return (
      <div>
        <h3>Child Component</h3>
        <p>User: {count}</p>
      </div>
  );
}

ChildComponent.propTypes = {
  count: PropTypes.number,
}


export default UseContextPage;
