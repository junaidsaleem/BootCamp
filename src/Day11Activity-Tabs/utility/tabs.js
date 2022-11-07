
function fetchData() {
    var url = "https://api.github.com/users";
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.length > 0) {
                json.forEach(user =>
                    document.getElementById('userParent').innerHTML +=
                    `
                    <div class="col-md-4 my-2">
                    <div class="card ">
                        <img class="card-img-top" src=${user.avatar_url} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${user.login}</h5>
                            <p class="card-text">${user.url}</p>
                                <div class="viewProfileBtn" >
                                    <a href="${user.html_url}" target="_blank" class="btn btn-primary">View profile</a>
                                </div>
                        </div>
                    </div>
                </div>
                    `
                )
            }
        })
        .catch(error => console.log(error));


    // Post
    var url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.length > 0) {
                json.forEach(user =>
                    document.getElementById('userPost').innerHTML +=
                    `
                    <div class="col-md-4 my-2">
                    <div class="card ">
                        <img class="card-img-top" src="http://cdn.shopify.com/s/files/1/0523/9875/1922/collections/GS7030-1_160x_5115ca53-1833-43a4-b941-91141738c845_1200x1200.jpg?v=1660202765" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${user.title}</h5>
                            <p class="card-text">${user.body}</p>
                        </div>
                    </div>
                </div>
                    `
                )
            }
        })
        .catch(error => console.log(error));
    //
    userSelected()
}

function userSelected() {
    document.getElementById('userParent').classList.remove('visually-hidden');
    document.getElementById('userPost').classList.add('visually-hidden');

    document.getElementById('userBtn').classList.add('active');
    document.getElementById('postBtn').classList.remove('active');
}

function postSelected() {
    document.getElementById('userParent').classList.add('visually-hidden');
    document.getElementById('userPost').classList.remove('visually-hidden');

    document.getElementById('userBtn').classList.remove('active');
    document.getElementById('postBtn').classList.add('active');
}

