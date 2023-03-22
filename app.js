const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector('.theme-toggler');


// const Orders =[
//     {
//       productName: 'Foldable Mini Drone',
//       productNumber: '85631',
//       paymentStatus: 'Done',
//       shipping: 'Pending'
//     },
  
//     {
//       productName: 'LAVANDER KF102 Drone',
//       productNumber: '36378',
//       paymentStatus: 'Refunded',
//       shipping: 'Declined'
//     },
  
//     {
//       productName: 'Ruko F11 Pro Drone',
//       productNumber: '49347',
//       paymentStatus: 'Due',
//       shipping: 'Pending'
//     },
  
//     {
//       productName: 'Drone With Camera Deone',
//       productNumber: '96996',
//       paymentStatus: 'Paid',
//       shipping: 'Delivered'
//     },
  
//     {
//       productName: 'GPS 4K Drone',
//       productNumber: '22821',
//       paymentStatus: 'Paid',
//       shipping: 'Delivered'
//     }
//   ]

// Show sidebar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

//Close sidebar
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})

//Change theme
themeToggler.addEventListener('click', () => {
  //let element = document.body
  document.body.classList.toggle("dark-theme-variables")
  //element.classlist.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').ClassList.toggle('active');
 })

 //fill orders in table

//   Orders.forEach(order =>  {
//   const tr = document.createElement('tr');
//   const trContent = `
//                   <td>${order.productName}</td>
//                   <td>${order.productNumber}</td>
//                   <td>${order.paymentStatus}</td>,
//                   <td class="${order,shipping === 'Declined' ? 'danger' : order.
//                   shipping === 'prending' ? 'warning' : 'primary'}">${order.shipping}</td> 
//                   <td class="primary">Details</td>`; 


//     tr.innerHTML = trContent
//     document.querySelector('table tbody').appendChild(tr);
// })




