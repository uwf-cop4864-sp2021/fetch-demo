function getUsers() {
  return fetch('https://reqres.in/api/users?page=2')
    .then( users => {
      console.log(users.data);
    }
    )
}

// Usage:
getUsers();