
// Used to store our users that we want to show
let userList = [];

/** Loads users from the API  */
const fetchUsers = (page) => {
  fetch('https://reqres.in/api/users?page=' + page)
  .then(
    (response) => {
      // Handle a bad response (other than 200)
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((users) => {
        console.log(users.data);
        userList = users.data;
      });
    }
  )
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
}

/** Outputs users from a given list */
const drawUsers = (list) => {
  // Gets a reference to our parent list element
  let listElement = document.getElementById("employee-list");
  listElement.innerHTML = '';

//   <li class="list-group-item">

//   <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
//   </div>

// </li>
} 

fetchUsers(1);
