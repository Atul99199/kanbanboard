import React, { useEffect } from 'react';
import './Header.css';

export const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {

  const handleGroupingChange = (event) => {
    const newGrouping = event.target.value;
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
  };

  const handleOrderingChange = (event) => {
    const newOrdering = event.target.value;
    setOrdering(newOrdering);
    localStorage.setItem('ordering', newOrdering);
  };

  useEffect(() => {
    const savedGrouping = localStorage.getItem('grouping');
    if (savedGrouping) {
      setGrouping(savedGrouping);
    }

    const savedOrdering = localStorage.getItem('ordering');
    if (savedOrdering) {
      setOrdering(savedOrdering);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>

      <div className="headerContainer">
        <div>
          <label>Grouping:</label>
          <select value={grouping} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
            <option value="userId">User</option>
          </select>
        </div>
        <div>
          <label>Ordering:</label>
          <select value={ordering} onChange={handleOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};
