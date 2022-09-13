// const request = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Request completed sucessfully!")
//     reject("Request not completed! :(")
//   }, 1500)
// })
// // then call back
// request.then(
//   (response) => { console.log(response) },
//   (error) => { console.log(error)}
// )

function sendRequest () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // podatocite sto gi dobivame od baza ili server postojat samo vo ovaa funkcija 
        console.log(data)

        handleData(data)
    })
    .catch(error => {
        console.log(error)
    })
}

function handleData (data) {
    //create html elements here
}