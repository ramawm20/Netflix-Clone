import { useState } from 'react'
import MovieList from './MovieList'
import NavBar from './NavBar';


function Home() {
    const [movies, setmovies] = useState([]);

    const URL = `http://localhost:3007/trending`
    fetch(URL)
        .then((response) => {
            response.json().then((data) => {

                setmovies(data)
            })
        })
        .catch((error) => {
            console.log(error);

        })



    return (
        <>
        <NavBar/>
       <h1>Movie cards</h1>
       <MovieList Movie={movies}/>
       
       {/* <Movie Movie={movies}/> */}
        </>
    )
}
export default Home;