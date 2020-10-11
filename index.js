// Add your code here

function submitData(name, email) {
    let meta = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    }
    return fetch(`http://localhost:3000/users`, meta)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.body.innerHTML = `${data.id}`
        })
        .catch(
            message => {
                document.body.innerHTML = `${message}`
            }
        )
}

// const url = "http://localhost:3000/dogs"
// const meta = {
//     method: "post"
//     headers: {
//         "Content-Type": "application/"
//     }
// }
// document.addEventListener("DOMContentLoaded"() => {
//     fetching();
// })

// function fetching(urlLink, meta= {}) {
//     fetch(urlLink, meta)
// }
