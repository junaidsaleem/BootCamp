
async function fetchData() {
    var url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url)
    let json = await response.json()

    console.log(json)
    if (json.length > 0) {
        json.forEach(user =>
            document.getElementById('tableBody').innerHTML +=
            `
                    <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.street}, ${user.address.city}, zip - ${user.address.zipcode}</td>
                </tr>
                    `
        )
    }
}

