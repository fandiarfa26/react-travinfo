import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faGlobe, faClock, faRoute } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import data from '../data';

const ScheduleItem = ({text}) => (
    <button type="button" class="btn btn-sm btn-outline-primary" style={{margin: '3px'}}>{text}</button>
);

const CarItem = ({merk}) => {
    const index = data.car.findIndex(x => x.merk === merk);

    return (
    <div className="item">
        <div className="card text-center">
        <img src={data.car[index].image} className="card-img-top" alt={merk}/>
        <div className="card-body">
            <h5 className="card-title">{merk}</h5>
            <button type="button" class="btn btn-outline-dark btn-sm btn-block">Seat: {data.car[index].seat}</button>
        </div>
        </div>
    </div>
)}

const SinglePage = () => {
    let { id } = useParams();
    const index = data.travel.findIndex(x => x.id === id);

    return (
    <div className="container">
      <div className="row">
          <div className="col-sm-8 ">
              <div className="row">
                  <div className="col-sm-6">
                    <img src={data.travel[index].image} class="img-fluid" alt={data.travel[index].id}/>
                  </div>
                  <div className="col-sm-6 text-center">
                    <br/>
                    <h2>{data.travel[index].name}</h2>
                    <br/>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        &nbsp;{data.travel[index].address}
                    </p>
                    <button type="button" className="btn btn-success btn-sm">
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp; {data.travel[index].contact}
                    </button>
                    &nbsp;
                    {(data.travel[index].hasOwnProperty('website'))? (
                                <a href={data.travel[index].website} class="btn btn-secondary btn-sm">
                                    <FontAwesomeIcon icon={faGlobe} />
                                    &nbsp; Website
                                </a>
                            ) : ''}
                    
                  </div>
              </div>
          </div>
          <div className="col-sm-4">
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">
                        <FontAwesomeIcon icon={faClock} />
                        &nbsp; Jadwal Pemberangkatan
                      </h5>
                      <p>
                          {
                            data.travel[index].schedules.map(s => (
                                <ScheduleItem text={s} />
                            ))
                          }
                      </p>
                  </div>
              </div>
              
          </div>
      </div>
      <br/>
      <div className="row">
          <div className="col-sm-5">
              <div className="card">
                  <div className="card-body">
                  <h5 className="card-title">
                <FontAwesomeIcon icon={faRoute} />
                &nbsp; Destinasi dan Harga
              </h5>
          <table class="table">
            <thead>
                <tr>
                <th scope="col">Rute</th>
                <th scope="col">Harga</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.travel[index].have_destination.map( dt => (
                        <tr>
                            <th scope="row">{dt.from} - {dt.to}</th>
                            <td>Rp {dt.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
                  </div>
              </div>
              
          </div>
          <div className="col-sm-7">
              
            <OwlCarousel
                    className="owl-theme"
                    margin={10}
                    items={3}
                >
                    {
                        data.travel[index].have_cars.map( car => (
                            <CarItem merk={car} />
                        ))
                    }
                </OwlCarousel>
          </div>
      </div>
    </div>
)};

export default SinglePage;