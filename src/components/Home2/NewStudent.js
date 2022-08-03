import React from 'react';
import './Home2.css'
export default function NewStudent() {
  return (
      <section id='new-student'>
          <div className='content'>
                <div className='new-student_item'>
                    <div className='join-every-week'>
                        <i className='fas fa-user-tie'></i>
                        <h6>New Student Join Every Week
                             <span>New courses, interesting posts, popular books and much more!</span>
                        </h6>
                    </div>
                    <div className='apply-course'>
                        <a>Apply Course Now </a>
                    </div>
                </div>
          </div>
      </section>
  )
}

