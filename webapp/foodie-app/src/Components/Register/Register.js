import React from 'react'
import { useState } from "react";
import { useHistory } from 'react-router';

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    function RegisterUserHandler() {
        fetch('http://localhost:8081/userservice/api/v1/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username,email,password })
        }).then(res =>{
            if(res.status==200){
                alert("Registered Succesfully")
                history.push('/login');
            }
            else{
                alert("Unsuceessfull")
                
            }
        })
        // .then(res => {
        //     history.push('/login');
        // });
    }




    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark " id="header">
        <div className="container-fluid">
            <a href="/" className="navbar-brand">Foodie-App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
        </div>
    </nav>

    <section className="regbody">

        <div className="container-fluid" >
           

           <div className="row">
            <div className="col-md-4 offset-md-4">
                <h2 className="text-center mt-5">Register Here</h2>
               
                {/* <div className="mb-4 mt-4 "> */}

                <div class="input-group mt-4">
                    <span>
                        <i class="fas fa-user-alt fa-2x "></i>
                    </span>
                    <input  type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />
                </div>
              
         
               
               
                <div className="mb-4 mt-4 input-group">
                    <span>
                        <i class="fas fa-envelope fa-2x"></i>
                    </span>

                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                </div>

                <div className="mb-2 input-group">
                    <span>
                    <i class="fas fa-key fa-2x"></i>
                    </span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                </div>
                <div className="mb-2 mt-4">
                    <button  className="btn btn-primary" onClick={RegisterUserHandler}>Register</button>
                    {/* <input type="submit" value="Submit" style={{color:"blue"}} onClick={RegisterUserHandler} /> */}
                </div>
            </div>
        </div>  
        </div>

        </section>

        </div>























    //     <div className="container-fluid mt-3" id="register" style={{backgroundImage:`url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)`,position:`fixed`}}>
        
    // </div>

    )
}
