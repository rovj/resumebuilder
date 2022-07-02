import React,{useEffect,useState} from "react";
import update from 'immutability-helper';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/authActions";
import { useNavigate } from "react-router";
import { setContactAction } from "../../redux/contactAction";
import { setEducationAction } from "../../redux/educationAction";
import { setDocument } from "../../redux/documentActions";
import { setProfessionalAction } from "../../redux/professionalActions";
import {firestore} from "../../index.js"
import { doc } from "firebase/firestore";


  function Login() {
    let authMine = useSelector(state => state.authReducer);
    let auth = useSelector(state => state.firebaseReducer.auth);
    let document = useSelector(state => state.documentReducer);
    let education = useSelector(state => state.educationReducer);
    let contact = useSelector(state => state.contactReducer);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    /*if(auth.uid){
      //console.log(window.location.href);
      firestore.collection("users").doc(auth.uid).get().then((user)=>{
        user = user.data();
        
        if(user.resumeIds!=undefined && user.resumeIds!=null && user.resumeIds.length>0){
          dispatch(setDocument(user.resumeIds[0].documentresume.skinCd));
          dispatch(setContactAction(user.resumeIds[0].contactresume));
          dispatch(setEducationAction(user.resumeIds[0].educationresume));
          dispatch(setProfessionalAction(user.resumeIds[0].professionalresume));
          
        }
        else{
          
        }
      
      })
    }*/
    //console.log(document);
    //console.log(education);
    //console.log(contact);
    const handleEmail= (e)=>{
    setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
      setPassword(e.target.value);
    }
    const onSubmit=()=>{
    
      let obj = {email:email,password:password}
      dispatch(signin(obj))
    }


    return (
      <>
      
      <>
      {authMine.loading?<h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are logging you in</h4>:
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Enter Login details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={email || ''}  onChange={handleEmail}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={password || ''} onChange={handlePassword}/><span></span>
                            </div>
                        </div>
                        {authMine?.error!==""?<div className="input-group full">
                                <span className="error-message" >{authMine?.error}</span> 
                        </div> :<></>}  
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Login</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  }
  </>
  
        </>
    );
  }



 


  export default Login