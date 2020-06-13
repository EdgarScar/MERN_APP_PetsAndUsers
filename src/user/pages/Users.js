import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [{
    id: 'u1',
    name: 'Oscar Kennedy Smith',
    image: "https://dashingdesignerdogs.com.au/wp-content/uploads/2019/04/Doggy-Day-Care-Mornington-3.jpg",
    places: 3,
  }
];

  return <UsersList items={USERS}/>
};

export default Users; 