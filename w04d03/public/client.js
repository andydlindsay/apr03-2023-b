console.log('hello world');

{/* 
<article class="coffee-element">
  <div class="coffee-header">
    <h2>Name: Cafe Latte</h2>
    <p>ID: jkl</p>
  </div>
  <div class="coffee-footer">
    <h3>Flavour: good</h3>
    <h3>Aroma: strong</h3>
  </div>
</article> 
*/}

// $('h2'); // selector; find dom elements
// $('<h2>'); // please create the element for us <h2></h2>

// const $h2 = $('<h2>'); // <h2></h2>
// $h2.text('welcome'); // <h2>welcome</h2>
// $h2.addClass('heading'); // <h2 class="heading">welcome</h2>

// const $h2 = $('<h2 class="heading">welcome</h2>'); // <h2 class="heading">welcome</h2>

// XSS cross-site scripting attack

$(document).ready(() => {

  // retrieve the coffees section from the DOM
  const $coffeesSection = $('#coffees-container');

  const createCoffeeElement = (coffee) => {
    const $coffeeElement = $(`
      <article class="coffee-element">
        <div class="coffee-header">
          <h2>Name: ${coffee.name}</h2>
          <p>ID: ${coffee.id}</p>
        </div>
        <div class="coffee-footer">
          <h3>Flavour: ${coffee.flavour}</h3>
          <h3>Aroma: ${coffee.aroma}</h3>
        </div>
      </article> 
    `);
    
    return $coffeeElement;
  };

  const renderCoffees = (arrOfCoffees) => {
    $coffeesSection.empty(); // remove any existing child nodes before adding new ones

    for (const coffee of arrOfCoffees) {
      const $coffeeElement = createCoffeeElement(coffee);
      $coffeesSection.prepend($coffeeElement);
    }
  };

  const fetchCoffees = () => {
    $.ajax({
      method: 'GET',
      url: '/coffees'
    }).then((coffees) => {
      renderCoffees(coffees);
    });
  };

  // make a GET request to load the initial coffees
  fetchCoffees();

  // grab the form from the DOM
  const $form = $('#new-coffee-form');

  // add a submit handler to the form
  $form.on('submit', (event) => {
    event.preventDefault();
    console.log('form has submitted');

    const data = $form.serialize();
    console.log(data);

    $.ajax({
      method: 'POST',
      url: '/coffees',
      data: data
    }).then(() => {
      console.log('request has resolved');
      fetchCoffees();
    });
  });

});
