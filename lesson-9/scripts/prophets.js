const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
     // temporary checking for valid response and data parsing
     const prophets = jsonObject['prophets'];
     prophets.forEach(displayProphets);
    });

  function prophets_number_ends(n){
    if (n == 1){
        return "st";
    }
    if (n == 2){
        return "nd";
    }
    if (n== 3){
        return "rd";
    }
    if (n > 3){
        return "th";
    } 
  }

  function displayProphets(prophet) {
    // Create elements to add to the document
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3_birth =document.createElement('h3');
    let h3_birth_place = document.createElement('h3');
    let portrait = document.createElement('img');
    // for place the number of precidenci
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${prophets_number_ends(prophet.order)} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // This is a part the activity ask add
    //Add two other components for the birth date and birth place
    h3_birth.textContent = `Date of Birth: ${prophet.birthdate}`;
    h3_birth_place.textContent = `Place of Birth: ${prophet.birthplace}`;
    card.appendChild(h3_birth);
    card.appendChild(h3_birth_place);
    card.appendChild(portrait);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
