import React from 'react';

const Fruits = () => {
  const fruits = [
    { name: 'Apple', color: 'red', emoji: '🍎' },
    { name: 'Banana', color: 'yellow', emoji: '🍌' },
    { name: 'Orange', color: 'orange', emoji: '🍊' },
    { name: 'Strawberry', color: 'red', emoji: '🍓' },
    { name: 'Blueberry', color: 'blue', emoji: '🫐' },
    { name: 'Grape', color: 'purple', emoji: '🍇' },
  ];

  return (
    <div className="flex-1 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Fruits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fruits.map((fruit) => (
            <div key={fruit.name} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">{fruit.emoji}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{fruit.name}</h2>
              <p className="text-gray-600">
                Enjoy this delicious {fruit.name.toLowerCase()} fruit!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
