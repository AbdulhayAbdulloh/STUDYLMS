import React from 'react';

export default function CoachTraining() {
  return (
      <section  id='coach-training'>
          <div className='content'>
             <div className='coach-training_item'>
                <div className='training_item-image'>
                    <img/>
                </div>
                <div className='training_item-title'>
                    <h5>Get the couching training</h5>
                    <span>1000of the online courses for free</span>
                    <p>German final week mother of god grey viverra no computer unlock impossibru.<br/>
                         Pikachu grin venenatis cuteness...
                    </p>
                    <a>VIEW DETALES</a>
                </div>
                <div className="training_item-date">
                    <p>it's limited seated! Hurry up</p>
                    <div className="data-item">
                        <div className="data_item-elem">
                            <span>{new Date().getDate()}</span>
                            <p>Day</p>
                        </div>
                        <div className="data_item-elem">
                            <span>{new Date().getHours()}</span>
                            <p>Hour</p>
                        </div>
                        <div className="data_item-elem">
                            <span>{new Date().getMinutes()}</span>
                            <p>Minites</p>
                        </div>
                        <div className="data_item-elem">
                            <span>{new Date().getSeconds()}</span>
                            <p>Minites</p>
                        </div>
                    </div>
                </div>
             </div>
             <div className='create-account'>
                    <span>CREATE AN ACCOUNT TO GET STARTED</span>
                    <a>SIGN NOW</a>
             </div>
          </div>
      </section>
  )
}
