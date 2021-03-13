
// Used to store our users that we want to show
let userList = [];

/** Loads users from the API  */
let fetchUsers = (page) => {
  fetch('https://reqres.in/api/users?page=' + page)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(users) {
        console.log(users.data);
        userList = users.data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

fetchUsers(1);
