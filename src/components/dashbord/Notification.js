import React from 'react';

const Notification = (props) => {
  const { notifications } = props;
  return (
    <div className='section'>
      <div className='card z-depth-2'>
        <div className='card-content'>
          <span className='card-title'>Notifications</span>
          <ul className='notifications'>
            {notifications &&
              notifications.map((n) => {
                return (
                  <li key={n.id}>
                    <span className='pink-text'>{n.user} </span>
                    <span>{n.content}</span>
                    <div className='grey-text note-date'>
                      {n.time.toDate().toString().slice(0, 15)}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
// <div className='grey-text note-date'>{n.time}</div>;
