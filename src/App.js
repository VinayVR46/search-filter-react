import { useState } from 'react';
import './style.css';
import data from "./TemplateData.json"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
   <>
   <nav><h1>Search Filter</h1></nav>
    <div className="templateContainer">
      <div className='searchInput_Container'>
        <input id="searchInput"
         type='text' placeholder='Search here'
         onChange={(e)=>setSearchTerm(e.target.value)}/>
         <div className='template_Container'>
          {
          data
          .filter((val)=>{
            if(searchTerm === ""){
            return val;
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
             return val;
            }
          })
          .map((val)=>{
            return(
              <div className='template'>
                <img src={val.image} alt='img'/>
              </div>
            )
          })
          }
         </div>
      </div>
    </div></>
  );
}

export default App;
