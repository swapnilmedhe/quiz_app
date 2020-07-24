import React ,{Fragment}from 'react';
import {Helmet} from 'react-helmet';
import { Link } from 'react-router-dom';

 const Home = () => (
 <Fragment>
     <Helmet> <title>Quiz App- Home</title></Helmet>
     <div id="home">
         <section>
         {/* <h4>Home component</h4> */}
          <div>
          <span className="mdi mdi-timer-sand-full  text-align: center; mdi-spin quizicon"></span>
          </div>
          <h1> Quiz App</h1>
          <div className="play-button-container">
           <ul>
               <li> <Link className="paly-button" to ="/play/instructions"> Play </Link></li>
           </ul>
          </div>
          <div className="auth-containers">
             
                 <div className="row auth-button" id="login-button">
                     <ul>
                         <li> <Link className="signupbtn" to="#"> Log In</Link></li>
                     </ul>
                     
                 </div>
                 <div className=" row auth-button" id="signup-button">
                       
                       <ul>
                       <Link className="signupbtn" to="#"> Register</Link>
                     </ul>
                 </div>
              </div>
           
         </section>
     </div>
 </Fragment>
 )

export default Home;