const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

// // const url = 'https://randomuser.me/api/?results=10'
// const url = `https://randomuser.me/api/?results=10`

const displayUsers = users => {
    /*
        step-1: getElementById
        step-2: run a for loop for get a specific user details.
        step-3: create a div in loop
        step-4: create a class in div
        step-5: create innterHTML for get desire users details.
        step-6: appendChild the innerHTML in getElementId
    */

    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        // console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.name.first} ${user.name.last} </h3>
        <p>User Email: ${user.email}</p>
        <p> User info:  ${user.gender} </p>
        <p> Username:  ${user.login.username} </p>
        
        `;
        usersContainer.appendChild(userDiv);
    }
}

loadUsers();