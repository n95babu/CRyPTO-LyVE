const button = document.querySelector('#butt');
const ul = document.querySelector('#assets'); // List of data will be post
const API_KEY = '32d342e3d7043f6d8f20c78a3291560f';
const API = `https://api.coinranking.com/v1/public/coins`



function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}




fetch(API)
  .then((response) => response.json())
  .then(function(data) {
  let assets = data.data.coins; 
  return assets.map(function(coin) { 
    let li = createNode('li');
    let span = createNode('span');
    let img = createNode('img')
  
    img.src = coin.iconUrl
    span.innerHTML = `${coin.price} ${coin.name} `; 
    append(li, span);
    append(ul, li);
    append(li, img);
    console.log(API)
  })
})

.catch(function(error){
  console.log(error);
});


/*Page refresh*/
// setTimeout(function() {
//   location.reload();
// }, 10000);













