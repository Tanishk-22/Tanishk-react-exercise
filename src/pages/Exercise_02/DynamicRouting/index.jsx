import { useParams } from "react-router-dom";


const DynamicRoutingPage = () => {
  const params = useParams()
  const id = 'blank';
  return (
      <div className='exercise-container'>
        <h1>Dynamic route</h1>
        <p>
          This component should use dynamic routing to display the id from the URL.
          <br/>
          <br/>
          <div>Tip:</div>
          Route is set in App.jsx file at:
          <div className="code">
            <code>
              {`<Route path="dynamic">
                <Route path="/:id" element={<DynamicRoutingPage />} />
              </Route>`}
            </code>
          </div>

        </p>
        <br/>
        <br/>
        <p>
          The id from the URL is: {id}
        </p>

        <p>
          The (other-param) from the URL is: ??
        </p>
      </div>

  );
};

export default DynamicRoutingPage
