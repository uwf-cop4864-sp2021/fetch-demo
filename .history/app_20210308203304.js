
/** Global state */
let userList = [];   // Used to store our users that we want to show
let currentPage = 1; // Represents the page of users we are viewing
let totalPages = 1;  // Will be set to the number of pages we have on the API


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

        // We have our user data now
        console.log(users.data);

        // Store the max number of pages from the API
        totalPages = users.totalPages;

        // Store this in the global state
        userList = users.data;

        // Redraw the user list
        drawUsers(userList);

      });
    }
  )
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
}

/** Outputs users from a given list */
const drawUsers = (userList) => {
  // Gets a reference to our parent list element
  let listElement = document.querySelector("#employee-list");
  listElement.innerHTML = '';

  // For every item in the userList data, make an <li> and append it
  for(let i = 0; i < userList.length; i++) {
    // Make a list element and add the appropriate class
    let li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${userList[i].avatar}" class="card-img-top" alt="${userList[i].first_name} ${userList[i].last_name}'s avatar">
      <div class="card-body">
        <h5 class="card-title">${userList[i].first_name} ${userList[i].last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${userList[i].email}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="mailto:${userList[i].email}" class="card-link">Email</a>
      </div>
    </div>
    `;

    // Finally, append the li we've built up to the parent element
    listElement.appendChild(li);
  }

} 

/** Click listeners */
let prevButton = document.querySelector("#prev-button");
let nextButton = document.querySelector("#next-button");

prevButton.addEventListener('click', () => {
  if(currentPage > 1) {
    currentPage--;
    fetchUsers(currentPage);
  } else {
    console.log("We're already at the first page");
  }
});

nextButton.addEventListener('click', () => {
  if(currentPage >= 1) {
    currentPage++;
    fetchUsers(currentPage);
  } else {
    console.log("We're already at the first page");
  }
});

// Kick of the initial data load
fetchUsers(currentPage);
