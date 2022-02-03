import React from 'react';
import { Link } from "react-router-dom";

function App() {
  return (<div>
    <h1>Herbal Life HR test</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
    >
      <Link to="/frontend-test">Frontend test</Link> |{" "}
      <Link to="/backend-test">Backend test</Link>
    </nav>
  </div>
  );
};

export default App;