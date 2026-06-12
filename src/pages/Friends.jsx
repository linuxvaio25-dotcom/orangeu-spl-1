import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Friends = () => {
  const { isLoggedIn } = useAuth();

  // Redirect to signin if not logged in
  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  const friends = [
    { id: 1, name: 'Alice', hobby: 'Reading' },
    { id: 2, name: 'Bob', hobby: 'Gaming' },
    { id: 3, name: 'Charlie', hobby: 'Coding' },
    { id: 4, name: 'Diana', hobby: 'Traveling' },
    { id: 5, name: 'Eve', hobby: 'Painting' },
    { id: 6, name: 'Frank', hobby: 'Music' },
  ];

  return (
    <div className="flex-1 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">My Friends</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <div key={friend.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{friend.name}</h2>
              <p className="text-gray-600">Hobby: {friend.hobby}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
