const searchForm = document.getElementById('search_form');
const searchLogin = document.getElementById('search-login');
const searchBtn = document.getElementById('search_btn');
const searchRes = document.getElementById('search-res');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    user = searchLogin.value.trim();
    if (user) {
        GetDataUser(user)
    }
})

async function GetDataUser(user) {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const reData = await response.json()
        console.log(reData)
        if (reData) {
            getUserOutData(reData)
        }
    } catch (e) {
        displayEror(e)
    }
}

function getUserOutData(user) {
    if (user.login == undefined) {
        searchRes.textContent = 'Пользователь не найден';
        searchRes.classList.add('error-user')
    }
    const profileCard = document.createElement('div')
    profileCard.className = 'profile-card'
}

function displayEror(e) {
    searchRes.textContent = e;
    searchRes.classList.add('error')
}

// fetch(url)
//     .then((response) => {
//         console.log(response)
//         if (response.ok) {
//             return response.json()
//         }
//         else {
//             return console.log('error')
//         }
//     })
//     .then((data) => {
//         console.log(data)

//     })