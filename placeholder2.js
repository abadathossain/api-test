function losdPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data.slice(0, 5)))
}

function displayPost(data) {
    // console.log(data)
    data.forEach(post => {
        console.log(post)
        const postContainer = document.getElementById('container')
        const postDiv = document.createElement('div')
        postDiv.innerHTML = `
            <h1 style="text-align: center;">id:${post.id}</h1>
            <h3>title:${post.title}</h3>
            <p>body:${post.body}</p>
        `
postContainer.appendChild(postDiv)
    });
   
}
losdPosts()