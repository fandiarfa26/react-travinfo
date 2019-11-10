import React from 'react';
import FandiImg from '../assets/img/fandi.png';
import FifahImg from '../assets/img/fifah.png';
import SchemaImg from '../assets/img/schema.png';

const profileDatas = [
  {
    nama: 'M. Fandi Arfabuma',
    nim: '160535611821',
    prodi: 'S1 Teknik Informatika',
    image: FandiImg
  },
  {
    nama: 'Siti Nur Khofifah',
    nim: '160535611806',
    prodi: 'S1 Teknik Informatika',
    image: FifahImg
  },
]

const ProfileCard = ({data}) => (
  <div className="card mb-3" style={{maxWidth: '540px'}}>
    <div class="row no-gutters">
      <div class="col-md-4">
      <img src={data.image} class="img-fluid" alt={data.nim}/>
      </div>
      <div class="col-md-8">
        <div class="card-body text-center" style={{marginTop: '15px'}}>
          <h4 class="card-title">{data.nama}</h4>
          <h6 class="card-text">({data.nim})</h6>
          <h6 class="card-text">{data.prodi}</h6>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">About</h2>
              <p className="card-text">
                Ini adalah website untuk menampilkan informasi mengenai travel di kota Malang.
                Website ini dibuat dengan <span className="text-info">ReactJS</span> dan pengambilan data berupa <span className="text-warning">JSON</span>. 
                Website ini dibuat untuk memenuhi tugas akhir matakuliah <strong>Semantik Web</strong>. 
                Dapat dilihat skema RDF di samping, pada website ini menggunakan 3 objek Class yaitu <i>Travel</i>, <i>Destination</i>, dan <i>Car</i>, yang memiliki atributnya masing-masing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={SchemaImg} className="img-fluid" alt="schema"/>
        </div>
      </div>
      <div className="jumbotron text-center" style={{padding: '10px'}}>
        <h2>Develop by</h2>
      </div>
     
      <div className="row">
        {
          profileDatas.map( data => (
            <div className="col-md-6">
              <ProfileCard 
                data={data}/>
            </div>
          ))
        }
      </div>
    </div>
);

export default AboutPage;