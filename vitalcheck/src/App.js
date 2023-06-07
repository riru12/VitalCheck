// Importing modules
import React, { useEffect } from "react";
import "./App.css";
 
function App() {
    useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "http://localhost:8000"
        )
      ).json();

      console.log(data)
    };

    dataFetch();
    }, []);
 
    return (
      <div></div>
    );
}
 
export default App;