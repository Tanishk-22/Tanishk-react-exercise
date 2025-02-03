import { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

function Increment(){
  setCount(count+1);
}

function Decrement(){
  setCount(count-1);
}
  // Update the document title whenever the count changes
  useEffect(() => {
    document.title = `Count: ${count}`;

  }, [count]); // Dependency array ensures it runs only when count changes


function display10(){
  if(count===10){
    alert(`count reaches 10`);
  }
}
// Cleanup effect for when the component unmounts
useEffect(() => {
  return () => {
    console.log("TitleUpdater component is unmounting. Cleanup happens here!");
  };
}, []);

  return (
      <div>

        <h1>Current Count: {count}</h1>
        <button onClick={() => {if(count==10) {display10()} Increment()}}>Increase Count</button>
        <div>
        <button onClick={() => {Decrement()}}>Decrease Count</button>
        </div>
      </div>
      

  );
}

export default TitleUpdater;
