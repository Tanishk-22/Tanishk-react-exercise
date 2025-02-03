import { Link } from "react-router-dom";

const Excercise_01 = () => {
    return (
        <div className="exercise-container">
          <h1>Exercise 01</h1>
          <br/>
          <h2>Task 1: Functional Components</h2>
          <h3>Handling user interactions: <Link to='/functional-example'>page</Link></h3>
          <h4>Fix component at "/components/TitleUpdater.jsx"</h4>
          <ul>
            <li>fix the code to increment the counter for the "Increase Count" button click</li>
            <li>add another button to decrease the count</li>
            <li>display a message when the count reaches 10</li>
            <li>add a cleanup effect (eg. logging when component is unmounted)</li>
          </ul>

          <br/>
          <h2>Task 2: Class Components</h2>
          <h3>Do the same as Task 2, but for a Class Component: <Link to='/class-example'>page</Link></h3>
          <h4>Fix component at "/components/ClassTitleUpdater.jsx"</h4>
          <ul>
            <li>fix the code to increment the counter for the "Increase Count" button click</li>
            <li>add another button to decrease the count</li>
            <li>display a message when the count reaches 10</li>
            <li>add a cleanup effect (eg. logging when component is unmounted)</li>
          </ul>
        </div>
    )
}

export default Excercise_01;
