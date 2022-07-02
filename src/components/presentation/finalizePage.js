import React from "react";
import ResumePreview from './resumePreview'
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
import { useSelector } from "react-redux";
import {firestore} from "../../index.js"

function Finalize() {
   
    let contactresume = useSelector(state => state.contactReducer);
    let documentresume = useSelector(state => state.documentReducer);
    let educationresume = useSelector(state => state.educationReducer); 
    let professionalresume = useSelector(state => state.professionalReducer);
    let auth = useSelector(state => state.firebaseReducer.auth);
    const saveToDatabase= async()=>{
      let user = await firestore.collection("users").doc(auth.uid).get();
      user = user.data();
      firestore.collection("users").doc(auth.uid).update({
        resumeIds : [{educationresume : educationresume,contactresume : contactresume,documentresume : documentresume,professionalresume:professionalresume}]
      })
    }
     const downloadResume=()=> {
    
      const input = document.getElementById('resumePreview');
       html2canvas(input)
         .then((canvas) => {
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF("p", "mm", "a4");
           var width = pdf.internal.pageSize.getWidth();
           var height = pdf.internal.pageSize.getHeight();
           pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
           // pdf.output('dataurlnewwindow');
           pdf.save("resume.pdf");
         }).catch(function(error){
           console.log(error)
         })
     }
    return (
      <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
            <ResumePreview  contactSection={contactresume} educationSection={educationresume} skinCd={documentresume?.skinCd} professionalSection={professionalresume}></ResumePreview>   
          </div>
          <div className="finalize-settings center">            

             
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
             </div>
    </div>
    </div>
    </div>
    )

    
}



export default (Finalize)
