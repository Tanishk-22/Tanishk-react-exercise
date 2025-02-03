import { Link } from "react-router-dom";

// get random character string
const randomString = () => {
  return Math.random().toString(36).substring(7);
}

const Exercise_02 = () => {
  return (
    <div className="exercise-container">
      <h1>Exercise 02</h1>
      <br/>
      <h2>Task 1: Dynamic Routing</h2>
      <h3>Retrieve url parameters: <Link to={`/dynamic/${randomString()}`}>page</Link></h3>
      <h4>Fix the code in "/pages/Exercise_02/DynamicRouting/index.jsx"</h4>
      <ul>
        <li>pull the id from "useParams"</li>
        <li>add another parameter to the url should handle url like '/dynamic/1/asdf'</li>
        <li>display the 2nd parameter (use any param name you like)</li>
      </ul>
      <br/>

      <h2>Task 2: UseRef</h2>
      <h3>Reading value by referencing an element: <Link to="/api-call/">page</Link></h3>
      <h4>Fix the code in "/pages/Exercise_02/ApiCal/index.jsx"</h4>
      <ul>
        <li>submit input field text to the api</li>
      </ul>
      <br/>

      <h2>Task 3: UseContext</h2>
      <h3>Passing state to deep Child component: <Link to="/use-context/">page</Link></h3>
      <h4>Fix the code in "/pages/Exercise_02/UseContext/index.jsx"</h4>
      <ul>
        <li>Convert the code to use "useContext" instead of passing params</li>
      </ul>

    </div>
  )
}

export default Exercise_02;
