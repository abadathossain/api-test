function loadImg(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayImg(data.slice(0, 5)))
}

function displayImg(data){
    data.forEach(user => {
        console.log(user)
        const postContainer = document.getElementById('container')
        const postDiv = document.createElement('div')
        postDiv.innerHTML =`
        <h1 style="text-align: center; margin: 20px;">id:${user.id}</h1>
        <h3>title:${user.title}</h3>
        <p>body</p>
        <img style="text-align: center;" src="${user.thumbnailUrl}" alt="">
        `
        postContainer.appendChild(postDiv)
    });
}
loadImg()