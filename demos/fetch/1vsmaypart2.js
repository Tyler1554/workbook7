fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    for (const album of albums) {
      console.log(album.title);
    }
  });
  

fetch("https://jsonplaceholder.typicode.com/album")
  .then((response) => response.json())
  .then((album) => {
    console.log(album.title);
  });
