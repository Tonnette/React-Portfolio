import React from "react";
import "../assets/css/style.css"
import MovieCarousel from '../Carousel/MovieCarousel';
import movies from "./movies.json";

function Home() {
	return (

		<div className="container">

			<MovieCarousel />

			<div className="container">
				{movies.map(item => (
					<div className="col-sm-12 col-md-4 col-lg-4 col-centered">
						<br></br>
						<div className={item.whichCard}>
							<a href={item.url}>
								<img src={item.image} className="card-img-top thumbnail {item.classy}" alt="{item.alt}" />
								<div className={item.theClass}>
								
									<div className="text1">{item.description}</div>
								</div>
							</a>

						</div>
						
					</div>



				))}



				<br></br>


			</div>
			<br></br>
		</div>


	);
}

export default Home;
