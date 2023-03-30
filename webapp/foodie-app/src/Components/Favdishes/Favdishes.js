import React from 'react'
import "./Favdishes"

export default function Favdishes(props) {
    function DeleteFavdishesHandler(id){
        props.DeleteFav(id);
         }
    return (
           
            // <div className="row">
            <div className="col-md-3">
                <div className="card"  id="cardcs">
                    <div className="card-body">
                        <i className="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteFavdishesHandler.bind(this,props.favfoodName)}></i>
                        {/* <img src={`${props.favimage}`}></img> */}
                        {/* <Link to={`/edit/${props.id}`}><i className="fas fa-pencil-alt fa-lg float-end text-primary px-2"></i></Link> */}
                        <p className="card-title ">FavouriteId:{props.favoriteId}</p>
                        <p className="card-text ">Food Name:{props.favfoodName}</p>
                        <p className="card-text ">Resturent Name:{props.favrestaurantName}</p>
                        {/* <i class="fas fa-heart text-danger"></i> */}
                    </div>
                    </div>
                </div>
            // </div>
          
 )

    
}
