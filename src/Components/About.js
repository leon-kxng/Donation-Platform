import React from 'react';


const About = () => {
  return (
    <>
     
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        At Onation, we believe in the transformative power of giving.
        Our platform serves as a bridge between those who are passionate about making a difference
        and the causes that need their support.
        Whether you're driven by a desire to alleviate hunger, champion education, protect the environment,
        or uplift communities in need, Onation provides
        the perfect avenue to turn your generosity into meaningful impact.
        </p>

        <h2 className="text-center py-4">About Us</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/236x/96/3a/62/963a6235b8d907c45807af5d4d22a9fb.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Medical & Blood</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/236x/8a/3a/ca/8a3acae63b6b0727f155e42a9b648cbe.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Social Service</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/236x/03/62/a2/0362a2994affd201e42bf3d3b689eb72.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Send a Charitable</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/236x/dc/79/aa/dc79aad6ae55bcdada193bc531fb6757.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Education</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About;