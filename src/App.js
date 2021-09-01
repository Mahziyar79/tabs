import { useEffect } from "react";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch("https://course-api.com/react-tabs-project");
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) return <h1>Loading...</h1>;

  const item = jobs[value];

  return (
    <div className="App">
      <h1>Experience</h1>
      <div className="divider"></div>
      <div className="items">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="item">
          <div className="oneItem" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.company}</p>
            <p>{item.dates}</p>
            {item.duties.map((duty) => (
              <div className="job-desc">
                <span>
                  <FaAngleDoubleRight />
                </span>
                <p>{duty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
