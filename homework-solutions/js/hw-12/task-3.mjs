/*На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)*/

async function getUsers() {
  try {
    const [usersResponse, albumsResponse, photosResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/albums'),
      fetch('https://jsonplaceholder.typicode.com/photos')
    ]);

    if(!usersResponse.ok) throw new Error(`Request error: ${userResponse.status}`);
    if(!albumsResponse.ok) throw new Error(`Request error: ${albumsResponse.status}`);
    if(!photosResponse.ok) throw new Error(`Request error: ${photosResponse.status}`);

    const [users, albums, photos] = await Promise.all([
      usersResponse.json(),
      albumsResponse.json(),
      photosResponse.json()
    ]);

    const usersList = users.map(user => {
      const userAlbum = albums
      .filter(album => album.userId === user.id)
      .map(album => {
        const photoCount = photos.filter(photo => photo.albumId === album.id).length;
        return `${album.title} (${photoCount} photos)`;
      });

       return {
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: user.company.name, 
        albums: userAlbum         
  };
});
  
  return usersList;

  }
  catch(error) {
    console.log('Error:', error.message);
  } finally {
    console.log('The function has complited');
  }
}

getUsers().then(users => {
  console.log(JSON.stringify(users, null, 2));
});
