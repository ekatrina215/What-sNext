
import { useEffect, useState } from 'react';
import './App.css';
import video from './hobby.mp4';


function App() {


const [myInfo, setMyInfo]=useState ("");

useEffect( ()=> {
  fetchmyInfo();
},[])

  const fetchmyInfo = async ()=>{
    const response = await fetch (`http://bored.api.lewagon.com/api/activity/`);
    const data = await response.json();
    console.log(data.activity);
    setMyInfo (data.activity);
  }

 
return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type= "video/mp4"/>
        </video>
      </div>
      <div className='container'>
     <h1> What's Next? </h1>
     </div>
     <div className='container'>

      <p> {myInfo}</p>
      </div>
      <div className='container'>
      <button onClick={fetchmyInfo}> New Tip 
        <img src="https://img.icons8.com/?size=100&id=42848&format=png&color=000000" alt="icon"/>
      </button>
     </div>
    

     

    
    </div>
  );
}

export default App;
