import React from 'react';
import {fieldCd} from '../../constants/typeCodes'
function ResumePreview(props){
    // console.log('Resume Preview');
    const rvContact=(key, valToAppend)=>{
        if(props.contactSection){
          return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    const rvEducation=(key, valToAppend)=>{
        if(props.educationSection){
          return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    const rvProfessional=(key)=>{
        if(props.professionalSection){
          if(props.professionalSection[key]){
            let newarray = props.professionalSection[key].split("\n").map((line)=>{
                return <>{line}<br/></>
            })
            return newarray;
          }
          //return props.professionalSection[key]?props.professionalSection[key]  :'';
        }
        return '';
    }
        return (
            <div className={props.skinCd + " resume-preview "}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }> {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </p>
                    <p className={'center address'}>{rvContact(fieldCd.Street,', ') + rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                    <p className={'center'}>{rvContact(fieldCd.Email ) }</p>
                    <p className={'center'}>{rvContact(fieldCd.Phone) } </p>
                    <p className={'center'}>{rvContact(fieldCd.Profession) }</p>
                </div>

                <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{rvContact(fieldCd.ProfSummary)}</p>
                </div>
                <div className='professional-section'>
                    <p className="heading bold">SKILLS</p>
                    <div className={'divider'}></div>
                    <p>{rvProfessional(fieldCd.Skills)}</p>
                    <p className="heading bold">EXPERIENCE</p>
                    <div className={'divider'}></div>
                    <p>{rvProfessional(fieldCd.Experience)}</p>
                    <p className="heading bold">CERTIFICATIONS</p>
                    <div className={'divider'}></div>
                    <p>{rvProfessional(fieldCd.Certifications)}</p>
                    <p className="heading bold">ACHIEVEMENTS</p>
                    <div className={'divider'}></div>
                    <p>{rvProfessional(fieldCd.Achievements)}</p>
                </div>
                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <div className='center educationDetailsContainer'>
                        <p><b>{rvEducation(fieldCd.SchoolName)}</b></p>
                        <p><b>{rvEducation(fieldCd.Degree)===""?"":"("+rvEducation(fieldCd.Degree)+")"}</b></p>
                     </div>
                     <div className='center educationDetailsContainer'>
                        <p><b>CGPA - </b>{rvEducation(fieldCd.GraduationCGPA)}</p>
                        <p><b>Passing Month - </b>{rvEducation(fieldCd.GraduationDate)}</p>
                        <p><b>Passing Year - </b>{rvEducation(fieldCd.GraduationYear)}</p>
                        <p><b>City - </b>{rvEducation(fieldCd.City)}</p>
                     </div>
                     {"\u00A0"}

                     <div className='center educationDetailsContainer'>
                        <p><b>{rvEducation(fieldCd.JuniorCollege)}</b></p>
                     </div>

                     <div className='center educationDetailsContainer'>
                        <p><b>HSC %  - </b>{rvEducation(fieldCd.HscPercentage)}</p>
                        <p><b>Passing Month - </b>{rvEducation(fieldCd.HscMonth)}</p>
                        <p><b>Passing Year - </b>{rvEducation(fieldCd.HscYear)}</p>
                     </div>

                     {"\u00A0"}
                     <div className='center educationDetailsContainer'>
                        <p><b>{rvEducation(fieldCd.HighSchool)}</b></p>
                     </div>
                     <div className='center educationDetailsContainer'>
                        <p><b>SSC % - </b>{rvEducation(fieldCd.SscPercentage)}</p>
                        <p><b>Passing Month - </b>{rvEducation(fieldCd.SscMonth)}</p>
                        <p><b>Passing Year - </b>{rvEducation(fieldCd.SscYear)}</p>
                     </div>-
                </div>
                
          
            </div>
        )
    }
export default ResumePreview;