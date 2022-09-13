async function getPosts () {
    document.getElementById('loading').style.visibility = 'visible';

    const response = await fetch ('https://jsonplaceholder.typicode.com/users');

// HTTP STATUS CODES
// 200, 201 - SUCCESS
// 3XX - REDIRECT
// 4XX - CLIENT-SIDE ERROR
// 401 - unauthorized, 404 - not found, 403 - access forbidden, 405 - wrong format
// 5XX - SERVER-SIDE ERROR
// 500 - server unreachable, 502 - bad gateway, 503 - server down

    if (response.status.toString().startsWith('4')) {   // isto so if (response.status >= 400 && response.status < 500)
        console.log(' KLIENTSKA GRESKA')
        return
    }

    const data = await response.json()

    document.getElementById('loading').style.visibility = 'hidden'
    generateHtml(data)
}

const generateHtml = (data) => {
    console.log(data)
}

const createPost = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                email: 'foo',
                name: 'bar',
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
        })

        const data = await response.json()
        console.log(data)

    } catch (err) {
        console.log(err)
    } finally {
        console.log('cleanup code goes here')
    }
}

createPost()