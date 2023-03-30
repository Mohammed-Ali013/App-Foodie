import React, { useState, useEffect } from 'react'
import Favdishes from '../Favdishes/Favdishes';
import { Link } from 'react-router-dom';

import './Fav.css';
export default function Fav() {

    const [favDishs, setfavDishes] = useState([])

    

    useEffect(() => {
        // let token = localStorage.getItem('token');
        let emailid=localStorage.getItem('email');
        fetch(`http://localhost:8081/favoriteservice/api/v1/favourite/${emailid}/getAllFavourites`, {
            // fetch(`http://localhost:8084/favoriteservice/api/v1/favourite/jeeva12345@gamil.com/getAllFavourites`, {
            // headers: {
            //     'token': token
            // }
        })
            .then(res => res.json())
            .then(data => {
                setfavDishes(data.foodItems);
                localStorage.getItem('token', data.token);
                console.log(data.foodItems);
            })

    }, [])

    function DeleteFavDishes(id) {
        let emailid2=localStorage.getItem('email');
        console.log(id);
        // let filteredDish = favDishs.filter(x => x.id !== id);
        let filteredDish = favDishs.filter(x =>x.foodName !=id);
        console.log(filteredDish);
        setfavDishes([...filteredDish]);
        let token = localStorage.getItem('token');
        fetch(`http://localhost:8081/favoriteservice/api/v1/favourite/${emailid2}/deleteFromFavourite/${id}`, {
            method: 'DELETE',
            headers: {
                'token': token
            }
        })
    }
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark " id="header">
                <div className="container-fluid">
                    <Link to="/dashboard" className="navbar-brand">Foodie-App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                                
                                <a to="/login" className="nav-link active">Login</a>
                            </li>
                            
                            
                    </ul> */}
                </div>
            </nav>
            {/* <div className="container"> */}
              <section id="favcs">
               <div className="row">
                    {
                    favDishs.map(item => 
                    <Favdishes DeleteFav={DeleteFavDishes}
                        key={item.restaurantName}
                        favoriteId={item.id}
                        favfoodName={item.foodName}
                        favrestaurantName={item.restaurantName}
                        favimage={item.image}
                       
                    />
                    )}
                   </div>
            </section>
            </div>
        // </div>
    )
}