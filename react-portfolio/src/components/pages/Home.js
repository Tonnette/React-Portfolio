import React from "react";
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';
import MovieCarousel from '../Carousel/MovieCarousel';
import HomeMovies from '../HomeMovies';
import movies from "./movies.json";

function Home() {
  return (

<div className="container">

<MovieCarousel />

<div className="container-fluid myContainer ">
    <div className="row firstRow row-centered">
            <div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[0].name}
				image={movies[0].image}
				alt={movies[0].alt}
				description={movies[0].description}
				url={movies[0].url}
				whichCard={movies[0].whichCard}
				theClass={movies[0].theClass}
				classy={movies[0].classy}
 				/>

			</div>
			<div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[1].name}
				image={movies[1].image}
				alt={movies[1].alt}
				description={movies[1].description}
				url={movies[1].url}
				whichCard={movies[1].whichCard}
				theClass={movies[1].theClass}
				classy={movies[1].classy}
 				/>

			</div>

			<div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[2].name}
				image={movies[2].image}
				alt={movies[2].alt}
				description={movies[2].description}
				url={movies[2].url}
				whichCard={movies[2].whichCard}
				theClass={movies[2].theClass}
				classy={movies[2].classy}
 				/>

			</div>


    </div>
    <div className="row firstRow row-centered">
            <div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[3].name}
				image={movies[3].image}
				alt={movies[3].alt}
				description={movies[3].description}
				url={movies[3].url}
				whichCard={movies[3].whichCard}
				theClass={movies[3].theClass}
				classy={movies[3].classy}
 				/>

			</div>
			<div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[4].name}
				image={movies[4].image}
				alt={movies[4].alt}
				description={movies[4].description}
				url={movies[4].url}
				whichCard={movies[4].whichCard}
				theClass={movies[4].theClass}
				classy={movies[4].classy}
 				/>

			</div>

			<div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[5].name}
				image={movies[5].image}
				alt={movies[5].alt}
				description={movies[5].description}
				url={movies[5].url}
				whichCard={movies[5].whichCard}
				theClass={movies[5].theClass}
				classy={movies[5].classy}
 				/>

			</div>


    </div>
    <div className="row firstRow row-centered">
            <div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[6].name}
				image={movies[6].image}
				alt={movies[6].alt}
				description={movies[6].description}
				url={movies[6].url}
				whichCard={movies[6].whichCard}
				theClass={movies[6].theClass}
				classy={movies[6].classy}
 				/>

			</div>
			<div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[7].name}
				image={movies[7].image}
				alt={movies[7].alt}
				description={movies[7].description}
				url={movies[7].url}
				whichCard={movies[7].whichCard}
				theClass={movies[7].theClass}
				classy={movies[7].classy}
 				/>

			</div>

			<div className="col-sm-13 col-md-6 col-lg-4 col-xl-4 col-centered">

				<HomeMovies

				name={movies[8].name}
				image={movies[8].image}
				alt={movies[8].alt}
				description={movies[8].description}
				url={movies[8].url}
				whichCard={movies[8].whichCard}
				theClass={movies[8].theClass}
				classy={movies[8].classy}
 				/>

			</div>


    </div>
</div>
</div>

    
  );
}

export default Home;
