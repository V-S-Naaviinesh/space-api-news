import  React ,{useEffect, useState} from 'react';
import './App.css';


function App() {

const [newsList, setNewsList] = useState([])

useEffect(()=>{
  fetch("https://api.spaceflightnewsapi.net/v3/articles")
  .then((res)=> res.json())
  .then((data)=>{
    setNewsList(data)
    
  })
  //stops the infinite calling of api []
},[])

  return (
    <div className="App">
      <div className='title'>
        <h1>Space News</h1>
     </div>
     <div className='newsContainer'>
        {newsList.map((val, key)=>{
          return <div key={key} className='article'onClick={()=>{window.location.href = val.url}}>
            <h3>{val.title}</h3>
            <img src={val.imageUrl} alt='news pictures'/>
            <p>{val.summary}</p>
            <h4>{val.publishedAt}</h4>
          </div>
        })}
     </div>
    </div>
  );
}

export default App;
