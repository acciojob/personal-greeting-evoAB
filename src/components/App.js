
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  const handleInputChange = (event) => {
    const temp = event.target.value;
    setName(temp);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter the name:</p>
        <input type="text" onChange={handleInputChange}/>
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
