const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 24,
      gender: 'male'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 5,
      gender: 'female'
    },
    {
      id: 3,
      firstName: 'Jim',
      lastName: 'Carrey',
      age: 54,
      gender: 'male'
    },
    {
      id: 4,
      firstName: 'Kate',
      lastName: 'Winslet',
      age: 40,
      gender: 'female'
    }
  ];
  
  function getUsers() {
    var output = '';
    for(let i = 0; i < users.length; i++) {
      output += findUserById(users[i].id);
      output += '\n';
    }
    console.log(output);
    return output;
  }
  
  function findUserById(id) {
    try {
      var user = users.find(user => user.id === id);
      var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
      console.log(iFindUser);
      return iFindUser;
    } catch(err) {
      return "Cannot read property 'id'";
    }
  }
  
  getUsers();
  findUserById('Doe', 'male');
  
  module.exports = findUserById;