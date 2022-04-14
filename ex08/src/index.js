const users = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 24,
      gender: 'male'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 5,
      gender: 'female'
    },
    {
      firstName: 'Jim',
      lastName: 'Carrey',
      age: 54,
      gender: 'male'
    },
    {
      firstName: 'Kate',
      lastName: 'Winslet',
      age: 40,
      gender: 'female'
    }
  ];
  
  function getUsers() {
    var output = '';
    for(let i = 0; i < users.length; i++) {
      output += findUser(users[i].lastName, users[i].gender);
      output += '\n';
    }
    console.log(output);
    return output;
  }
  
  function findUser(lastName, gender) {
    try {
      var user = users.find(user => user.lastName === lastName && user.gender === gender);
      var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
      console.log(iFindUser);
      return iFindUser;
    } catch(err) {
      return "Cannot read property 'firstName' of undefined";
    }
  }
  
  getUsers();
  findUser('Doe', 'male');
  
  module.exports = findUser;