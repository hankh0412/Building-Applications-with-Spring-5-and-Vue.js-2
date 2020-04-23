let urgentTasks = ['Buy three tickets'];
let normalTasks = ['Book a hotel', 'Rent a car'];
let allTasks = [...urgentTasks, ...normalTasks];

// Spread tasks to a list of parameters
((first, second, third, fourth) => {
  console.log('Working on ' + first + ' and ' + second + ' and ' + third + ' and ' + fourth)
})(...allTasks);


let hotel = {name: 'Hotel A', city: {name: 'Sanya'}};
let price = {price: 100};
// Merge objects only with shallow clone
let booking = {...hotel, ...price};
console.log(booking); // {name: "Hotel A", price: 100, city : {name: 'Sanya'}}
hotel.city.name = 'Xiamen';
console.log(booking.city.name); // Xiamen