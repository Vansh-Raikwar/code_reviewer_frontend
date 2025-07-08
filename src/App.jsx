import { useState,useEffect } from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import axios from "axios";
import Markdown from 'react-markdown';
import rehypeHightlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


function App() {
  const [prompt,setprompt] = useState(" ");
  const [Response,setResponse] = useState(" ");
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    Prism.highlightAll()
  },[])
  function handleChange(event){
    setprompt(event.target.value);
  }
  const handleReview = async () => {
    try {
      setLoading(true);
      const result = await axios.post(`${import.meta.env.VITE_URL}`,{prompt});
      setResponse(result.data || JSON.stringify(result));
      setLoading(false);
    } catch (error) {
      setResponse("Error: " + error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <main>
        <div className="left">
          <textarea name="" id="textarea" 
            placeholder='// Write Your Code here //'
            onChange={handleChange}
          />
          <button className="review-button" type="button" onClick={handleReview}>Review</button>
        </div>
        <div className="right">
          {loading ? (
            <div className="loader"><div className="loader-spinner"></div></div>
          ) : (
            <Markdown rehypePlugins={[rehypeHightlight]}>
              {Response}
            </Markdown>
          )}
        </div>
      </main>
    </>
  )
}

export default App
