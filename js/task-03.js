const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// for (const iterator of images) {
//   const createli = document.createElement("li");
//   const createimg = document.createElement("img");
//   document.querySelector(".gallery").insertAdjacentHTML("afterbegin", createli);
//   createimg.src = iterator.url
//   document.querySelector('li').insertAdjacentHTML("afterbegin", createimg);
// }
for (const iterator of images) {
  const markup = images.map(({url, alt}) => `<li><img src="${url}" alt="${alt}"></li>`).join('');
  document.querySelector(".gallery").insertAdjacentHTML('beforeend', markup)
  // const createli = document.createElement("li");
  // const createimg = document.createElement("img");
  // document.querySelector(".gallery").prepend(createli)
  // createimg.src = iterator.url
  // document.querySelector('li').prepend(createimg)
}

