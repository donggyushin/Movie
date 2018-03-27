import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  
  componentDidMount(){
    this._getMovies();
  }


  _callApi = () => {
    
    return(
    fetch("https://yts.am/api/v2/list_movies.json?quality=3D")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
    );
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _renderMovies = () => {
      const movies = this.state.movies.map(movie => {
        console.log("1")
        console.log(movie)
        return(
          <Movie title={movie.title_english} 
          poster={movie.medium_cover_image}
          key={movie.id}
          synopsis={movie.synopsis}
          genres={movie.genres}/>
        );
      });
      return movies;
  }


  render() {
    const {movies} = this.state;
    return (
     <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading..."}
     </div>
    )
  }
}

export default App;