import React from 'react'
import './Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
       
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark " id="header">
                <div className="container-fluid">
                    <a className="navbar-brand">Foodie-App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                        </ul>
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                               <button className=" btn btn-outline-dark " id="button"><Link to="/register">Register</Link></button>
                            </li>
                            <li className="nav-item">
                                <button className=" btn btn-outline-dark btn-info" id="button"><Link to="/login">Login</Link></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
               
             
                <section>
                <container>
                <h5 class="text-uppercase">Foodie</h5>
                <h1 class="text-uppercase">Discover the Best Food</h1>		
                </container>
                <div className="container">
                <div className="row">
                <div className="col-md-3 mt-50 offset-md-1 p-2 pt-5 text-center" style={{zIndex:'0',position:'relative'}}>
                    <div className="card">
                    <div className="cardsContainer img w-0 " >
                        <div className="card-body">
                            <img src="https://b.zmtcdn.com/data/reviews_photos/e5f/186ca6f76679ecd8d16f535e20cf2e5f_1505405592.jpg" data-testid="image" className="image" alt="image not available" style={{ height: 20 + "em" }, { width: 8 + "em" }} />
                        </div>
        
                            {/* <h5 className="card-title">Country Details</h5> */}
                            <p className="card-text">Restaurent Name:Sadia Meals</p>
                            <p className="card-text">Category: South Indian</p>
                            <p className="card-text">Ratings:4.4</p>
                        </div>
                    </div>
                    
                {/* </div>  */}
                {/* </div> */}
                </div>  
                <div className="col-md-3 mt-50 offset-md-1 p-2 pt-5 text-center" style={{zIndex:'0',position:'relative'}}>
                    <div className="card">
                    <div className="cardsContainer img w-0 " >
                        <div className="card-body">
                            <img src="https://b.zmtcdn.com/data/res_imagery/18233593_RESTAURANT_00272acd0235af309a0bbe4843e53499.jpg" data-testid="image" className="image" alt="image not available" style={{ height: 5 + "em" }, { width: 8 + "em" }} />
                        </div>
        
                            {/* <h5 className="card-title">Country Details</h5> */}
                            <p className="card-text">Restaurent Name:Farzi Cafe</p>
                            <p className="card-text">Category: North Indian</p>
                            <p className="card-text">Ratings:4.2</p>
                        </div>
                    </div>
                    
                {/* </div>  */}
                {/* </div> */}
                </div>   
                <div className="col-md-3 mt-50 offset-md-1 p-2 pt-5 text-center" style={{zIndex:'0',position:'relative'}}>
                    <div className="card">
                    <div className="cardsContainer img w-0 " >
                        <div className="card-body">
                            <img src="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg" data-testid="image" className="image" alt="image not available" style={{ height: 5 + "em" }, { width: 8 + "em" }} />
                        </div>
        
                            {/* <h5 className="card-title">Country Details</h5> */}
                            <p className="card-text" >Restaurent Name:Royal Indian Hotel</p>
                            <p className="card-text">Category: South Indian</p>
                            <p className="card-text">Ratings:4.2</p>
                        </div>
                    </div>
                    
                {/* </div>  */}
                {/* </div> */}
                </div>   
                </div> 
                </div>
                </section>

                
                </div>
        
    )
}

