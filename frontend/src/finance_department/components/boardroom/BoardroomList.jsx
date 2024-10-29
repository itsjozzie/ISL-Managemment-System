import React, { useState, useEffect } from 'react';

const BoardroomList = () => {
  const [boardrooms, setBoardrooms] = useState([]);

  useEffect(() => {
    // Fetch available boardrooms
    const fetchBoardrooms = async () => {
      const response = await fetch('/api/boardrooms');
      const data = await response.json();
      setBoardrooms(data);
    };
    fetchBoardrooms();
  }, []);

  return (
    <div className="boardroom-list">
      <h2>Available Boardrooms</h2>
      <ul>
        {boardrooms.map((room, index) => (
          <li key={index}>
            {room.name} - Capacity: {room.capacity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardroomList;
