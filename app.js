const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((response) => response.json())
  .then((json) => json.forEach(tableElements)
  )

  function tableElements (element, index, arr){
    arr[index] = document.getElementById('data').innerHTML +=
    `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
    </tr>`
  }

   

    




