import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});
  const fetchData = () => {
    console.log("inside fetch data");
    fetch("http://jsonplaceholder.typicode.com/comments?postId=1")
      // fetch("/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // setData(json);
      });
  };
  return (
    <div className="App">
      <button
        style={{
          textAlign: "left",
          backgroundColor: "#e3e3e3",
          borderRadius: "1vh",
          margin: "1vh",
          padding: "2vh"
        }}
        onClick={fetchdata}
      >
        Fetch Content
      </button>
      {data.map((obj) => {
        return (
          <div
            key={obj.id}
            style={{
              textAlign: "left",
              backgroundColor: "#e3e3e3",
              borderRadius: "1vh",
              margin: "5vh 2vh",
              padding: "2vh"
            }}
          >
            <div
              style={{
                textAlign: "left",
                backgroundColor: "#c6c6c6",
                borderRadius: "1.5vh",
                padding: "2vh",
                fontSize: "3vh",
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              <div>{obj.id}. </div>
              <div>
                <div> &nbsp;{obj.name}</div>
                <div style={{ fontSize: "2vh" }}>&nbsp; {obj.email}</div>
              </div>
            </div>
            <div style={{ paddingLeft: "24px" }}>
              &nbsp;&nbsp;&nbsp;{obj.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}
