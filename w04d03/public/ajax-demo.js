console.log('hello world');

// $.ajax({
//   method: 'GET',
//   url: 'https://www.dnd5eapi.co/api/monsters/adult-black-dragon/',
//   success: (response) => {
//     console.log(response);
//   }
// });

$.ajax({
  method: 'GET',
  url: '/coffees',
}).done((response) => {
  console.log('inside promise', response);
});
