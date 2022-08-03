import React,{useState} from 'react';
const Topics = [
    {
        courseName:'Information Technology',
        lessonName:'Softwere testing',
        complexty:'Easy',
        Length:'90 mins'
    },
    {
        courseName:'Fashion Technology',
        lessonName:'Designing',
        complexty:'standart',
        Length:'60 mins'
    },
    {
        courseName:'Photography',
        lessonName:'Animation',
        complexty:'standart',
        Length:'60 mins'
    },
    {
        courseName:'Electronics',
        lessonName:'Hardware process',
        complexty:'Hard',
        Length:'90 mins'
    },
    {
        courseName:'Computer Application',
        lessonName:'Micro Processor',
        complexty:'Hard',
        Length:'70 mins'
    },
    {
        courseName:'Electronics',
        lessonName:'Hardware process ',
        complexty:'Easy',
        Length:'70 mins'
    },
    {
        courseName:'It& Software',
        lessonName:'Oparating Sistem',
        complexty:'Standart',
        Length:'60 mins'
    },
    {
        courseName:'Bussiness Law',
        lessonName:'Prinscies',
        complexty:'Easy',
        Length:'60 mins'
    },
]
export default function SingleInstructorMain() {
const [state,setState] = useState(Topics)
  return (
      <section id='single-instructor-main'>
         <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Instructor</span>
            <i className='fas fa-chevron-right'></i><span>Loshper Cook</span>    
          </div>
          <div className='content'>
                <div className='single-instructor-main_item'>
                     <div className='single-instructor-main_left'>
                         <div className='single-instructor-main_left-elem1'>
                             <img/>
                             <div className='single-instructor-main_left-contact'>
                                 <a><i className='fas fa-mobile'></i>+(61) 123 456  7890</a>
                                 <a><i className='fas fa-phone'></i>+(99) 517 52 57</a>
                                 <a><i className='fas fa-book'></i>Exaple@domenate.com</a>
                                 <div className='single-instructor-main_left-networks'>
                                        <a><i className='fab fa-facebook'></i></a>
                                        <a><i className='fab fa-twitter'></i></a>
                                        <a><i className='fab fa-google'></i></a>
                                        <a><i className='fab fa-instagram'></i></a>
                                 </div>
                             </div>
                             <div className='single-instructor-main_left-send-message'>
                            <h4>SEND MESSAGE</h4>
                            <input type='text' placeholder='Your Name' />
                            <input type='email' placeholder='Email' />
                            <textarea placeholder='Message'/>
                            <a>SEND NOW</a>
                         </div>
                         </div>
                        
                     </div>
                     <div className='single-instructor-main_right'>
                         <div className='single-instructor-main_right-details'>
                            <h6>Lospher Cook</h6>
                            <ul>
                                <li><p>Role: Front End Developer</p></li>
                                <li><p>Experience: 12 years</p></li>
                                <li><p>Specialist In : Digital Media</p></li>
                                <li><p>Current work: Good Studio</p></li>
                            </ul>
                         </div>
                         <h5>Biography</h5>
                         <p>
                            Fusce eleifend donec sapien sed phase lusa. Pellentesque lacus vamus lorem arcu semper duiacCras ornare arcu<br/> 
                            avamus nda leo. Etiam ind arcu morbi us justo mauris tempus pharetra interdum at congue semper purus. acus vamu<br/>
                            lorem arcu semper duiacCras ornare arcu 
                         </p>
                         <h5>Topics Handling</h5>
                         <table>
                             <thead>
                                 <tr>
                                     <th>COURSE NAME</th>
                                     <th>LESSON NAME</th>
                                     <th>COMPLEXTLY</th>
                                     <th>LENGTH</th>
                                 </tr>
                             </thead>
                             {
                                 state.map((elem,index)=>{
                                     return(
                                         <tbody>
                                             <tr className={(index%2===0) ? "instructor-table-tr1": "instructor-table-tr2"}>
                                                 <td>{elem.courseName}</td>
                                                 <td>{elem.lessonName}</td>
                                                 <td>{elem.complexty}</td>
                                                 <td>{elem.Length}</td>
                                             </tr>
                                         </tbody>
                                     )
                                 })
                             }
                         </table>
                     </div>
                </div>
          </div>
      </section>
  )
}
