const aside_one = document.querySelector("#aside_one");
const aside_two = document.querySelector("#aside_two");
const aside_three = document.querySelector("#aside_three");

/* to populate the sección with the data about commerce */
const requestURL = 'https://fredyspeed.github.io/wdd230/chamber/data/data.json';
//const article_tag = document.querySelector('article');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
     const commerces = jsonObject['commerces'];
     const commerces_silver_gold = selectCommerces(commerces);
     
     //commerces.forEach(selectCommerces);
    });
/*

<img src="https://assets.ldscdn.org/c8/b5/c8b5e860a7edbbef90734c83be366e8d359d2c0b/payson_utah_temple.jpg" alt="Payson Utah Temple" />
                <h3>Payson Utah</h3>
                <p>2015</p>
                <a href="https://www.churchofjesuschrist.org/temples/details/payson-utah-temple?lang=eng" target="_blank">Details</a>
            
*/
  function selectCommerces(commerces){

  let silver_and_gold = []

function isSilverGold(commerce) {
    if(commerce.membership_level == 3 || commerce.membership_level == 4){
      silver_and_gold.push(commerce);
    }
}

commerces.forEach(isSilverGold);

console.log(silver_and_gold);
displayCommercesSpotlight(silver_and_gold);
  }
function displayCommercesSpotlight(silver_and_gold) {
    let i=0;
    let num=0;
    let one = -1;
    let two = -1;
    let three = -1;
    console.log("array size " +silver_and_gold.length)
    while(i<3){
        num = Math.floor((Math.random() * silver_and_gold.length));
        if ((num != one) && (num != two) && (num!= three)) {
            if (i == 0) {
                one = num;
            } else if (i == 1) {
                two = num;
            } else {
                three = num;
            }
            i++;
        }
      }

      displayCommerce(aside_one,silver_and_gold[one]);
      displayCommerce(aside_two,silver_and_gold[two]);
      displayCommerce(aside_three,silver_and_gold[three]);
  }


	function displayCommerce(aside_element , commerce) {
		// Create elements to add to the document
		console.log(commerce);
		let section = document.createElement('section');
		let img = document.createElement('img');
		let h4_name =document.createElement('h4');
		let p_address = document.createElement('p');
		let p_numbers_thelefone = document.createElement('p');
		let a_link = document.createElement('a');
		let p_open = document.createElement('p');
		let p_close = document.createElement('p');
		
		// Change the textContent property of the h2 element to contain the prophet's full name
		
		h4_name.innerHTML = `${commerce.name} `;
		let commerce_address = `${commerce.address}`;
	    p_address.textContent = `address: ${commerce_address.substring(0,8)}...`;
		let list_telephones = ""; 
		if (commerce.phone_numbers.length > 1){
			commerce.phone_numbers.forEach(phone => list_telephones += phone + "  ");
			p_numbers_thelefone.textContent = `${commerce.phone_numbers[0]}...`;
		}
		else{
			p_numbers_thelefone.textContent = `${commerce.phone_numbers[0]}`;
		}

		   
		//p_numbers_thelefone.textContent = `${list_telephones}`;
		a_link.textContent = "url direction";
		p_open.textContent = `open: ${commerce.open}`; 
        p_close.textContent = `close: ${commerce.close}`;
		// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
		img.setAttribute('src', commerce.imageurl);
		img.setAttribute('alt', commerce.image );
    img.setAttribute('width', "115px");
		img.setAttribute('height', "25px" );
		a_link.setAttribute('href', commerce.website_url);
		p_address.setAttribute('title', commerce_address);
		p_numbers_thelefone.setAttribute('title', list_telephones);
	  
		// Add/append the section(card) with the h2 element
		section.appendChild(img);
		section.appendChild(h4_name);
		section.appendChild(p_address);
		section.appendChild(p_numbers_thelefone);
		section.appendChild(a_link);
		section.appendChild(p_open);
		section.appendChild(p_close);
		
		// Add/append the existing HTML div with the cards class with the section(card)
		aside_element.appendChild(section);
    
	  }
/*
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
*/