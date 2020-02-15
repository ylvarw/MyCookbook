import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const APP_ID = "339fd9a2";
  const APP_KEY = "9f399c69784b2a5a81c85a617161751a";

  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() =>{
    console.log('effect has been run');
    getRecipe();
  }, []);

  const getRecipe = async () => {
    // external request, await fetched content. alternative need to use fetch and .then(response=> {response.json})
    var response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    var data = response.json();

    console.log(data);
  }

  return (
    <div className="MyApp">
      <h1>My cookbook app</h1>

      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}
export default App;
