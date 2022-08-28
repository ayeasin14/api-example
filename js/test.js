const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}


const displayUsers = users => {


    const usersContainer = document.getElementById('users-container');
    for (const user of users) {

        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `

        <h3>User name: ${user.name.first} </h3>
        <p>User Email: ${user.email} </p>
        <p>User Gender: ${user.gender}  </p>
        <p>User Location: ${user.location.country}  </p>
        <p>User Phone: ${user.phone}  </p>

        `
        usersContainer.appendChild(userDiv);
    }
}

loadUsers();




/*


const needUserDetails = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => console.log(data))
}

needUserDetails();




const loadUsers2 = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => console.log(data.results[2].name.first))
}

loadUsers2();

const getUserDetails = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => console.log(data.results[3].name.first))
}

getUserDetails(); */