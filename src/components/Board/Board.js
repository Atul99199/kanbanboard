import React, { useEffect, useState } from 'react';
import './Board.css';
import { BoardItem } from '../BoardItem/BoardItem';

export const Board = ({ grouping, ordering }) => {
  const url = 'https://api.quicksell.co/v1/internal/frontend-assignment';
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } else {
        console.log('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const groupingCategories = [...new Set(tickets.map((ticket) => ticket[grouping]))];

  return (
    <div className="boardContainer">
      {tickets.length > 0 && users.length > 0 ? (
        groupingCategories.map((item, index) => {
          const boardTickets = tickets.filter((ticket) => item === ticket[grouping]);

          const sortedTickets = [...boardTickets];
          if (ordering === 'title') {
            sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
          } else if (ordering === 'priority') {
            sortedTickets.sort((a, b) => a.priority - b.priority);
          }
          return (
            <BoardItem
              key={index}
              boardTickets={sortedTickets}
              users={users}
              grouping={grouping}
              ordering={ordering}
            />
          );
        })
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};
