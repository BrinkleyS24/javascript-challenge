const url = 'https://jsonplaceholder.typicode.com/users';
const data = document.getElementById('data');
const posts = document.getElementById('posts')

fetch(url)
    .then((response) => response.json())
    .then((json) => json.forEach(tableElements)
    )

function tableElements(element, index, arr) {
    const tr = document.createElement('tr');
    arr[index] = tr.innerHTML +=
        `<td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>`;
    tr.setAttribute('id', element.id);
    data.appendChild(tr);
    tr.addEventListener('click', getPosts);

}


function getPosts(event) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}`)
        .then((response) => response.json())
        .then((json) => json.forEach(postElements)
        )
}

function postElements(element, index, arr) {
    arr[index] = posts.innerHTML +=
        `<h5>Post #: ${element.id}</h5>
        <p> <strong>Title:</strong> ${element.title}</p>
        <p>${element.body}</p>`;
}








