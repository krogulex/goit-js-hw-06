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

const ul = document.querySelector(".gallery")

const img = images.
map((el) => 
`<li class="item"><img class="image" src="${el.url}" alt="${el.alt}"></li>`
)
.join("")


ul.insertAdjacentHTML("afterbegin", img);

const style = document.createElement('style');

style.innerHTML = `
.gallery {
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.item {
  margin: 5px;
  border: 1px solid #ccc;
  width: 180px;

}
.item:hover {
  border: 1px solid #777;
}
.image {
  width: 100%;
  height: 100%;
}

`
document.head.appendChild(style);