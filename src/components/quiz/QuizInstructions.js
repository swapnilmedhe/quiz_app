import React,{Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
 

function QuizInstructions() {
    return (
        <Fragment>
            <Helmet><title>Quiz- Instructions</title></Helmet>
          <div className="container"> 
              <div className=" container instructions">
                <h4 style={{color :"balck" ,textAlign:"center"}}>Read the instrustion </h4><hr className={{ color:"black" ,fontsize:"10px"}}/>
             <p>
             This test consists of two sections: (1) a multiple-choice question section and (2) a constructed-response assignment section.  Each question in the first section is a multiple-choice question with four answer choices.  Read each question and answer choice carefully and choose the ONE best answer.  
                Try to answer all questions.  In general, if you have some knowledge about a question, it is better to try to answer it.  You will not be penalized for guessing.  
                The second section contains one constructed-response assignment.  Directions for the constructed-response assignment section appear immediately before the assignment.  
                You may work on the multiple-choice questions and the constructed-response assignment in any order that you choose.  Be sure to allocate your time carefully so you are able to complete the entire test within the testing session.  You may go back and review your answers at any time during the testing session.  
                You may NOT use a calculator or reference materials during the testing session.   
             </p>      
            </div>
            <div className="row">
                    <span className="left link"> <Link className="link" to ="/"> No , Take Me Back</Link></span>
                    <span className="right link"> <Link  className ="link-Yes"to ="/play"> Yes , Start Test</Link></span>
            </div>
        </div> 
        </Fragment>
      
    )
}

export default QuizInstructions;
