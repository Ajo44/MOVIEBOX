import React from "react";
import Navbar from "./Components/Nacbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/rowpost/Rowpost";
import { action, originals, comedy } from "./urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost title="ORINGINALS" url={originals} />
      <Rowpost title="ACTION" isSmall url={action} />
      <Rowpost title="COMEDY" isSmall url={comedy} />
    </div>
  );
}

export default App;

/*
netflix-logo='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
https://jsonplaceholder.typicode.com/users
nav-avatar='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'§

banner='https://wallpaperaccess.com/full/2703652.png

card = 'https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w'

//////////////////////////////////////////////////////////////API's//////////////////////////////////////////////////////////////////////////

imageUrl = 'https://image.tmdb.org/t/p/original'

apiBaseUrl='https://api.themoviedb.org/3'

trending ='https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY_HERE}&language=en-US'

action ='https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}&with_genres=28'

originals ='https://api.themoviedb.org/3/discover/tv?api_key={API_KEY_HERE}&with_networks=213'

ComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=35',

HorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=27',

ActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28',

RomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749',

Documentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=b88c73736823edb037b8b47c72e9c214&with_genres=99',

////////////////////////////////////////////////////////////////////API KEY////////////////////////////////////////////////////////////////////////////

API_KEY = "b88c73736823edb037b8b47c72e9c214"
*/
