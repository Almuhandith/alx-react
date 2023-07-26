import React from 'react'
import './Notifications.css'
import closeIcon from './close-icon.png'
import {getLatestNotification} from './utils'

const Notifications = () => {
  return (
    <div className='Notifications'>
      <button
        style={{
          background: 'none',
          border: 'none',
          position: 'absolute',
          right: '2px',
          top: '10px',
          cursor: 'pointer',
        }}
        aria-label="Close" 
        onClick={(e) => {
        console.log("Close button has been clicked")
        }}
      >
        <img src={closeIcon} alt="closeicon"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
				<li data-priority="default">
					New course available
				</li>
				<li data-priority="urgent">
					New resume available
				</li>
				<li
					data-priority="urgent"
					dangerouslySetInnerHTML={{__html: getLatestNotification()}}
				>
				</li>
			</ul>
    </div>
  )
}

export default Notifications
