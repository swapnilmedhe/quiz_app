import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import questionss from "../questionpaper/questions.json";
import M from 'materialize-css';
import Sound from '../../assests/audio/answer.mp3';
import IsEmpty from '../../utils/isEmpty';

 
class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            questions:questionss,
            currentQuestion:{},
            nextQuestion:{},
             preQuestion:{},
            answer:'noAnswer',
            noOfQuestion:0,
            noOfAnsweredQuestion:0,
            currentQuestionIndex:0,
            score:0,
            correctAnswers:0,
            wrongAnswers:0,
            hints:5,
            fiftyfifty:2,
            usedFifty:false,
            nextButtonDisable:false,
            prvButtonDisable:true,
            time:{ }
        }
        this.interval =null

    }

   componentDidMount(){
        console.log("inside Component did mount");
        let {questions, currentQuestion, nextQuestion, preQuestion}=this.state;
        this.displayFunction(questions,currentQuestion, nextQuestion, preQuestion );
        this.startTimer();
    }

    startTimer = ()=>{
            const countDownTime = Date.now() +30000;
            this.interval=setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const min = Math.floor((distance %(1000 *60 *60))/(1000 *60 ));  
            const sec  = Math.floor((distance %(1000 *60 ))/(1000 ));  

            if(distance < 0){
                clearInterval(this.interval);
                 this.setState({
                    time:{
                           min:0,
                           sec:0
                    }
                }, () => {
                   alert("Time Out !!!!");
                   this.props.history.push('/');
               });
           }else{
               this.setState({
                   time: {
                       min ,
                       sec
                   }
               });
           }
            }, 1000);

       

    }
    

    hanndleClick = (e) =>{
      console.log("option clicked" ,e.target.innerHTML);
      if(e.target.innerHTML === this.state.answer){
        document.getElementById("correct").play();
        this.currenctOption();
      }
      else{
            document.getElementById("correct").play();
            this.wrongOption();
      }
     
      
    }
     
    currenctOption = ()=>{
        M.toast({
         html:"Correct Answer !",
         displayLength:1500,
         classes:"toast-valid"
        });
  
      this.setState( prev => ({
          score: prev.score +1,
          noOfAnsweredQuestion :prev.noOfAnsweredQuestion + 1 ,
          correctAnswers : prev.correctAnswers + 1,
          currentQuestionIndex :prev.currentQuestionIndex + 1
          
      }),  () =>{
          this.displayFunction(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.preQuestion);
      });

    } 

    wrongOption = ()=>{
        M.toast({
         html:"Wrong Answer!",
         displayLength:1500,
         classes:"toast-invalid"
        });
  
       this.setState( prev => ({
          score: prev.score +1,
          noOfAnsweredQuestion :prev.noOfAnsweredQuestion + 1 ,
          wrongAnswers : prev.wrongAnswers + 1,
          currentQuestionIndex :prev.currentQuestionIndex + 1
          
      }),  () =>{
          this.displayFunction(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.preQuestion);
      });


    }  

   //navigation buttons
   
   handlePreButton = ()=>{
     console.log("Pre Button")
     if(this.state.preQuestion !== undefined ){
         this.setState( pre => ({
             currentQuestionIndex : pre.currentQuestionIndex -1
         }), () =>{
          this.displayFunction(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.preQuestion);
      });
     }else{
         M.toast({
         html:"No more quesions!",
         displayLength:1500,
         classes:"toast-invalid"
        });
     }
       
   }

    handleNextButton = ()=>{
     if(this.state.nextQuestion !== undefined ){
         this.setState( pre => ({
             currentQuestionIndex : pre.currentQuestionIndex +1
         }), () =>{
          this.displayFunction(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.preQuestion);
      });
     }else{
         M.toast({
         html:"No more quesions!",
         displayLength:1500,
         classes:"toast-invalid"
        });
     }
       
   }

   handleQuitButton = ()=>{
      if(window.confirm('Are you sure want to Quit ?'))
      {
          this.props.history.push('/');
      }
   }

    displayFunction = (questions =this.state.questions ,currentQuestion,nextQuestion,preQuestion)=>{
        let{currentQuestionIndex }=this.state;
        console.log("inside displayFunction function");
       
        if( !IsEmpty(questions)){
            questions= this.state.questions;
            currentQuestion =questions[currentQuestionIndex];
            nextQuestion= questions[currentQuestionIndex + 1];
            preQuestion = questions[currentQuestionIndex -1];
            const answer = currentQuestion.answer;     
            this.setState({
                currentQuestion: currentQuestion,
                nextQuestion: nextQuestion,
                preQuestion: preQuestion,
                noOfQuestion: questions.length,
                answer:answer
            });
        
        }else{
            window.alert("Question Set is Empty !!");
        }
    };
    render() {
      console.log(questionss);
      console.log(this.state.questions);
        let {currentQuestion,noOfQuestion,currentQuestionIndex,time} = this.state;
        console.log("currentQuestion ->",currentQuestion);
        return (
            <Fragment>
                <Helmet> <title>Quiz App- Test</title></Helmet>
                <Fragment>
                 <audio  id ="correct" src={Sound}> </audio>
                </Fragment>
                {/* <div>Counte : {this.state.counter}</div>
                 <button onClick ={ () => this.increaseCount()}> Click Me </button> */}
                <div className="quetions ">
                    <div className="lifeline-container">
                        <p> <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span> <span className="lifeline">2</span></p>
                        <p> <span className=" mdi mdi-clock-outline mdi-32px clock1"></span> <br></br><span className="clock1">{time.min}: {time.sec} </span></p>

                    </div>
                    <div>
                        <p>
                          <label> Questions :</label>  <span>{ currentQuestionIndex + 1}/{noOfQuestion}</span>
                            {/* <span className="mdi mdi-clock-outline md-24px"> 111/115</span> */}
                        </p>
                    </div>
                
                <h4>{currentQuestion.question}</h4>
                <div className="answer-container">
                    <p onClick = {(e)=> this.hanndleClick(e)} className="option">{currentQuestion.optionB}</p>
                    <p onClick = {(e)=> this.hanndleClick(e)}className="option">{currentQuestion.optionA}</p>
                </div>
                <div className="answer-container">
                    <p onClick = {(e)=> this.hanndleClick(e)}className="option">{currentQuestion.optionC}</p>
                    <p onClick = {(e)=> this.hanndleClick(e)}className="option">{currentQuestion.optionD}</p>
                </div>
                <div className="button-container">
                    <button id ="preButton" onClick ={this.handlePreButton}>Prev</button>
                    <button id ="nextButton"onClick ={this.handleNextButton} >Next</button>
                    <button id ="quitButton"onClick ={this.handleQuitButton}>Quit</button>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Play;
