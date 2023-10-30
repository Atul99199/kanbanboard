import React from 'react'
import './Card.css'

export const Card = ({ ticket, users }) => {
  const priority = ['No Priority', 'Low', 'Medium', "High", "Urgent"]

  const userName = (userId) => {
    const user = users.find(user => user.id === userId);
    if (user) {
      const username = user.name;
      const nameParts = username.split(' ');
      if (nameParts.length > 1)
        return `${nameParts[0].charAt(0)}${nameParts[1].charAt(0).toUpperCase()}`;
      else
        return nameParts[0].charAt(0);
    }
    return '';
  };



  return (
    <div className='cardContainer'>
      <div className='cardHeader'>
        <div>{ticket.id}</div>
        <div className='userName'>{userName(ticket.userId)}</div>
      </div>
      <div className='cardBody'>
        <p>{ticket.title}</p>
      </div>
      <div className='cardFooter'>
        <div>{priority[ticket.priority]}</div>
        <div>{ticket.tag[0]}</div>
      </div>
    </div>
  )
}
