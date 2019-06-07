const button = document.querySelector('#butt')
const API_KEY = '32d342e3d7043f6d8f20c78a3291560f';


button.addEventListener('click', async () => {
    const response = await axios.get(`https://api.nomics.com/v1/markets?key=${API_KEY}`);
    console.log(response)
   
})

fetch(`https://api.nomics.com/v1/dashboard?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))




