// fetch('/build/data.json')
// .then(response => {
  
// })

const btn = document.querySelector('button');
const box = document.querySelector('.data');
const intro = document.querySelector('#intro');

const data = './build/data.json';
let inc = Math.floor(Math.random() * 299);

btn.addEventListener('click',()=>{
  intro.innerHTML='';
  btn.textContent='Click';
  fetch(data)
 .then(response => response.json())
 .then(data => { 
   box.innerHTML=`<p class="text-emerald-900 text-[24px] font-bold"> [ Schools ] </p>
   <p>Name: ${data[inc].name}</p> <p>Address : ${data[inc].full_address}</p>
   <p>Rating : ${data[inc].rating}</p>
   <p>Phone No. : ${data[inc].phone_number}</p>
   <p>City : ${data[inc].city}`;
 })
 .catch(error => {
   console.error('Error fetching data'); 
})
inc = Math.floor(Math.random() * 299);
});

