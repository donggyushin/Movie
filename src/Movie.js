import React, { Component } from "react";
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie ({title, poster, synopsis, genres}) {
    return(
        <div className="Movie">
            <div className="Movie__columns">
                <div className="Movie__columns-poster">
                    <MoviePoster poster={poster}/>
                </div>
            </div>
            <div className="Movie__columns">
                    <h1 className="Movie__columns-title">{title}</h1>
                    <div className="Movie__columns-genres">
                        {genres.map((genre, index) => 
                        <MovieGenres genre={genre} key={index}/>)}
                    </div>

                    <div className="test">
                    <div className="Movie__columns-synopsis">
                        <LinesEllipsis
                            text={synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>        
                    </div>
                    
            </div>
        </div>
    )
}

function MovieGenres ({genre}) {
    return(
        <span className="Movie__columns-genre">{genre} </span>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster}></img>
    )
}

MovieGenres.propTypes = {
    genre : PropTypes.string.isRequired
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired

}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

export default Movie