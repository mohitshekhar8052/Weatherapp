import React from 'react'


const TopButtons = () => {

    const cities = [
        {
            id: 1,
            name: 'Kanpur'
        },
        {
            id: 2,
            name: 'Lucknow'
        },
        {
            id: 3,
            name: 'Gorakhpur'
        },
        {
            id: 4,
            name: 'Delhi'
        },
        {
            id: 5,
            name: 'New York'
        }
    ]
  return (
    <div className="flex items-center justify-around my-6">
        {
            cities.map(city => (
                <button key={city.id}
                className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">{city.name}</button>
            ))
        }
    </div>
  )
};

export default TopButtons;