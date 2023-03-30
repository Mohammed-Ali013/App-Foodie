import React, { useEffect } from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './Dashboard.css';
import { Link } from 'react-router-dom';


export default function Dashboard() {

    const [citycode, setCity] = useState('');
    const [dish, setDish] = useState('');
    const [details,setDetails]= useState([]);



    // useEffect(() => {

    //     details

    // }, [])

    

    function getdetail(){
        let token = localStorage.getItem('token');
       
            fetch(`http://localhost:8081/searchservice/api/v1/${dish}/${citycode}`,{
                headers: {
                'token': token
              }

    
            })
                     .then(res => res.json())
                    .then(data => setDetails(data.restaurants))

    }


    function addFav(item) {
        let emailid=localStorage.getItem('email');
  
        var pushingObj={}
        var sendObj={}
        let id1=uuidv4();
        pushingObj.id=id1
        pushingObj.foodName=dish
        pushingObj.restaurantName=item.restaurant.name
        pushingObj.foodPrice=item.restaurant.average_cost_for_two
        pushingObj.category=item.restaurant.cuisines
        pushingObj.rating=item.restaurant.user_rating.aggregate_rating
        pushingObj.image=item.restaurant.featured_image

        let foodItem=[];
        
        foodItem.push(pushingObj)
  
        // sendObj.userEmail=emailid
        // sendObj.foodItems=foodItem

        let userEmail=emailid
        let foodItems=foodItem

        let token1 = localStorage.getItem('token');


        fetch('http://localhost:8081/favoriteservice/api/v1/favourite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
               
                    'token': token1
             

            },
            // body: JSON.stringify({sendObj})
            body: JSON.stringify({userEmail,foodItems})
        }).then(res => {

            if(res.status==200){
                alert("added succesfully")
            }
            else{
                alert("Error in adding")
            }
            
        });

    console.log(sendObj);
    }





     console.log(details);


    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark " id="header">
            <div className="container-fluid ">
                <a href="/" className="navbar-brand">Foodie-App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{paddingLeft:300}}>



            <select onChange={(e) => setCity(e.target.value)} >
                            <option value="">Select City</option>
                            <option value="1">New Delhi</option>
                            <option value="2">Kolkata</option>
                            <option value="3">Mumbai</option>
                            <option value="4">Bangalore</option>
                            <option value="5">Pune</option>
                        </select>

                </div>
                <div style={{paddingRight:300}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <form className="d-flex" action="#">
                        <input  onChange={(e) => setDish(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="button" onClick={getdetail}>  Search</button>
                    </form>
                    </ul>
                    

                </div>
                <div className="dropdown" >
                                <button className="bg-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <a to="login" className="nav-link"><i className="fas fa-user-circle"></i></a> 
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link to="/" className="dropdown-item">Logout</Link></li>
                                    <li><Link to="/edit" className="dropdown-item">EditProfile</Link></li>
                                    <li><Link to="/favourite" className="dropdown-item">Favorite</Link></li>
                                </ul>
                            </div>

            </div>
        </nav>
           
        {/* <div className="container"  > */}
            <section id="sec1">
            
            <div className="row">
                    {
                        details.map(item => (  
                        
                        <div className="col-md-3">
                        
                                <div className="card">
                                    
                                    {/* <img src={`https://tse2.mm.bing.net/th/id/OIP.zVKdiMLwKrwhSjWvVe3IxQHaE7?pid=ImgDet&rs=1`} class="card-img-top" alt="..."/> */}
                                    <img src={`${item.restaurant.featured_image}`} class="card-img-top" alt="..."/>

                                    <div className="card-body">
                                        {/* <i className="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteContactHandler.bind(this, props.id)}></i> */}
                                        {/* <Link to={`/edit/${props.id}`}><i className="fas fa-pencil-alt fa-lg float-end text-primary px-2"></i></Link> */}
                                        
                                        <p className="card-text" >Food Name:{dish}</p>
                                        
                                        <p className="card-text" >Restuarent Name:{item.restaurant.name}</p>
                                        
                                        <p className="card-title" >Categery:{item.restaurant.cuisines}</p>

                                        <p className="card-title" >Price for Two:{item.restaurant.average_cost_for_two}</p>

                                        <p className="card-text" >Ratings:{item.restaurant.user_rating.aggregate_rating}</p>

                                    </div>
                                    <div class="card-footer bg-transparent border-success"><a href="#" onClick={addFav.bind(this, item)} >Add to favourite</a></div>
                                </div>
                            </div>
                            
                         
                        ))
                    }
                    </div>

                    
                   
               
            </section>
            </div>
            
        // </div>

    )
}
