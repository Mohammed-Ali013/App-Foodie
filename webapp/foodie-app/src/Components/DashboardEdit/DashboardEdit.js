import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import React from 'react'
// import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Edit.css';


export default function DashboardEdit() {
    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [Newpassword, setNewPassword] = useState('');
    // const [Confirmpassword, setConfirmPassword] = useState('');
    // let { email} = useParams();
    let history= useHistory();

    let email=localStorage.getItem('email');
    // useEffect(() => {
    //     fetch(`http://localhost:8088/userservice/api/v1/${emailEdit}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsername(data.username)
    //             setPassword(data.password)
    //         });
    // }, [])
    function EditContact() {
        fetch(`http://localhost:8081/userservice/api/v1/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        }).then(res => {
            if (res.status == 200) {
                alert("Edited Succesfully")
                history.push('/dashboard');

            } else {
                alert("USER NOT FOUND")
                history.push('/register');
            }

        });
    }


    return (
    //     <div>
    //         <nav className="navbar navbar-expand-lg navbar-dark " id="header">
    //             <div className="container-fluid">
    //                 <Link to="/dashboard" className="navbar-brand">Foodie-App</Link>
    //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                     <span className="navbar-toggler-icon"></span>
    //                 </button>

    //                 <ul className="navbar-nav ml-auto">
    //                 <li className="nav-item">
                                
    //                             <a to="/login" className="nav-link active">Login</a>
    //                         </li>
                            
                            
    //                 </ul>
    //             </div>
    //         </nav>
    //         <div className="block">
    //             <section className="Edit">
    //             <div className="block">


    //                 <h3 className="text-light bg-dark text-center">Edit Profile</h3>
    //                 <div className="container mt-3 mb-3  ">
    //                     <h2><i className="fas fa-user-edit mb-3 offset-md-6 icon" ></i></h2>
    //                     <div class="input-group mt-4 ">
    //                 <span>
    //                     <i class="fas fa-user-alt fa-2x "></i>
    //                 </span>
    //                 <input  type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />
    //             </div>

    //             <div className="mb-4 mt-4 input-group">
    //                 <span>
    //                     <i class="fas fa-envelope fa-2x"></i>
    //                 </span>

    //                 <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
    //             </div>

    //             <div className="mb-2 input-group">
    //                 <span>
    //                 <i class="fas fa-key fa-2x"></i>
    //                 </span>
    //                 <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
    //             </div>
    //             <div className="mb-2 mt-4">
    //                 <button  className="btn btn-primary offset-md-6" onClick={EditContact}>SaveChanges</button>
    //                 {/* <input type="submit" value="Submit" style={{color:"blue"}} onClick={RegisterUserHandler} /> */}
    //             </div>

    //                 </div >
    //                 <br />
    //                 {/* <button type="submit" className="btn btn-primary" onClick={EditContact}>
    //                     SaveChanges
    //                 </button> */}
                            
    //             </section>
    //             </div>

    //     </div>
        
    // );

    <div>
        <nav className="navbar navbar-expand-lg navbar-dark " id="header">
        <div className="container-fluid">
            <a href="/" className="navbar-brand">Foodie-App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
        </div>
    </nav>

    <section className="regbody" id="editcs">

        <div className="container-fluid" >
           

           <div className="row">
            <div className="col-md-4 offset-md-4">
                <h2 className="text-center mt-5">Edit Profile</h2>
               
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

                    <input type="text"  value={email} className="form-control" placeholder="Email" />
                </div>

                <div className="mb-2 input-group">
                    <span>
                    <i class="fas fa-key fa-2x"></i>
                    </span>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                </div>
                <div className="mb-2 mt-4">
                    <button  className="btn btn-primary" onClick={EditContact}>Save Changes</button>
                    {/* <input type="submit" value="Submit" style={{color:"blue"}} onClick={RegisterUserHandler} /> */}
                </div>
            </div>
        </div>  
        </div>

        </section>

        </div>

    )
}

{/* // onChange={(e) => setNewPassword(e.target.value)} value={NewPassword}
// onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword}
// onClick={EditPassword} */}