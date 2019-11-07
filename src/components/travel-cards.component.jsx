import React from 'react';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import data from '../data';

const TravelCardItem = ({id, name, image}) => (
    <div className="item">
        <div className="card text-center">
        <img src={image} className="card-img-top" alt={id}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/${id}`} class="btn btn-info btn-sm btn-block">Lihat Info</Link>
        </div>
        </div>
    </div>
);

const TravelCards = () => (
    <OwlCarousel
        className="owl-theme"
        loop
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause
        margin={10}
        center
        items={4}
        dots={false}
    >
        {
            data.travel.map(trav => (
                <TravelCardItem id={trav.id} name={trav.name} image={trav.image} />
            ))
        }
    </OwlCarousel>
);

export default TravelCards;