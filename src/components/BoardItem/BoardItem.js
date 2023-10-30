import React from 'react'
import './BoardItem.css'
import { Card } from '../Card/Card'

export const BoardItem = ({ boardTickets, users, grouping, ordering }) => {


  const priority = ['No Priority', 'Low', 'Medium', "High", "Urgent"]

  const userName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user.name
  }




  return (
    <div className='boardItemContainer'>
      <div className='boardItemHeader'>
        {grouping === "status" &&
          <>
            <p>{boardTickets[0][grouping]}</p>
            <p> {boardTickets.length}</p>
          </>
        }
        {grouping === "priority" &&
          <>
            <p>{priority[boardTickets[0][grouping]]}</p>
            <p> {boardTickets.length}</p>
          </>
        }
        {grouping === "userId" &&
          <>
            <p>{userName(boardTickets[0][grouping])}</p>
            <p> {boardTickets.length}</p>
          </>
        }
      </div>
      {boardTickets.map((ticket) => {
        return <Card ticket={ticket} users={users} />
      })}
    </div>
  )
}
