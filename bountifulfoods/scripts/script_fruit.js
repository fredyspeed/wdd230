const fruit_one_select = document.querySelector("#select_fruit_one");
const fruit_two_select = document.querySelector("#select_fruit_two");
const fruit_three_select = document.querySelector("#select_fruit_three");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.


/* to populate the sección with the data about commerce */
const requestURL = 'https://fredyspeed.github.io/wdd230/bountifulfoods/data/fruit.json';
let fruit_list_search = [];
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
     const fruit_list = jsonObject;
     fruit_list_search = fruit_list;
     fruit_list.forEach(display_fruit);
    });

/*

<img src="https://assets.ldscdn.org/c8/b5/c8b5e860a7edbbef90734c83be366e8d359d2c0b/payson_utah_temple.jpg" alt="Payson Utah Temple" />
                <h3>Payson Utah</h3>
                <p>2015</p>
                <a href="https://www.churchofjesuschrist.org/temples/details/payson-utah-temple?lang=eng" target="_blank">Details</a>
            
*/


	function display_fruit(fruit) {
		// Create elements to add to the document
    //<option value="np_membership">NP Membership </option>
		
		let option_tag = document.createElement('option');
    //console.log(fruit.name);
    option_tag.setAttribute('value', fruit.name);
		option_tag.innerHTML= fruit.name;
    let option_tag_two = document.createElement('option');
    //console.log(fruit.name);
    option_tag_two.setAttribute('value', fruit.name);
		option_tag_two.innerHTML= fruit.name;
    let option_tag_three = document.createElement('option');
    //console.log(fruit.name);
    option_tag_three.setAttribute('value', fruit.name);
		option_tag_three.innerHTML= fruit.name;

    fruit_one_select.appendChild(option_tag);
		fruit_two_select.appendChild(option_tag_two);
    fruit_three_select.appendChild(option_tag_three);
	  
  }
  function showMessage(){
    /* the input values of the order 
    (7 inputs = first name, email, phone, 
    three selected fruits, and special instructions),
    the order date, and the total amount of carbohydrates,
    protein, fat, sugar, and calories*/
    //console.log("a[" + index + "] = " + element);
    let message = document.getElementById("message").value;
    let first_name_recipe = document.getElementById("first_name").value;
    let email_recipe = document.getElementById("email").value;
    let cell_phone_recipe = document.getElementById("cell_phone").value;
    let fruite_one = document.getElementById("select_fruit_one").value;
    let fruite_two = document.getElementById("select_fruit_two").value;
    let fruite_three = document.getElementById("select_fruit_three").value;
    let date_recipe = document.getElementById("date").value;
    let total_carbohydrates = 0;
    let total_protein = 0;
    let total_fat = 0;
    let total_sugar = 0;
    let total_calories = 0;
    for (i = 0; i < fruit_list_search.length; i++) {
      element = fruit_list_search[i];
      //console.log(`${element.name} == ${fruite_one}`);
    if(element.name == fruite_one){
      console.log(`second ${parseFloat(element.nutritions.carbohydrates)}`);
      total_carbohydrates += parseFloat(element.nutritions.carbohydrates);
      total_protein += parseFloat(element.nutritions.protein);
      total_fat += parseFloat(element.nutritions.fat);
      total_sugar += parseFloat(element.nutritions.sugar);
      total_calories += element.nutritions.calories;
    }
    if(element.name == fruite_two){
      console.log(`second ${parseFloat(element.nutritions.carbohydrates)}`);
      total_carbohydrates += parseFloat(element.nutritions.carbohydrates);
      total_protein += parseFloat(element.nutritions.protein);
      total_fat += parseFloat(element.nutritions.fat);
      total_sugar += parseFloat(element.nutritions.sugar);
      total_calories += element.nutritions.calories;
    }
    if(element.name == fruite_three){
      console.log(`second ${parseFloat(element.nutritions.carbohydrates)}`);
      //console.log(`carbohidrates ${carbohydrates}`);
      total_carbohydrates += parseFloat(element.nutritions.carbohydrates);
      total_protein += parseFloat(element.nutritions.protein);
      total_fat += parseFloat(element.nutritions.fat);
      total_sugar += parseFloat(element.nutritions.sugar);
      total_calories += element.nutritions.calories;
    }
  }
    let text_formated = "";
    text_formated =` first name: ${first_name_recipe} \n`;
    text_formated +=  `email: ${email_recipe} \n`; 
    text_formated +=  `phone: ${cell_phone_recipe} \n`;    
    text_formated +=  `first fruit: ${fruite_one} \n`; 
    text_formated +=  `second fruit: ${fruite_two} \n`; 
    text_formated +=  `third fruit: ${fruite_three} \n`; 
    text_formated +=  `special instructions: ${message} \n`;
    text_formated +=  `date: ${date_recipe} \n`;
    text_formated +=  `total carbohydrates: ${total_carbohydrates.toFixed(2)} \n`; 
    text_formated +=  `total protein: ${total_protein.toFixed(2)} \n`; 
    text_formated +=  `total fat: ${total_fat.toFixed(2)} \n`; 
    text_formated +=  `total sugar: ${total_sugar.toFixed(2)} \n`; 
    text_formated +=  `total calories: ${total_calories} \n`;

    console.log(text_formated);
    let display_message = document.getElementById("message");
    display_message.value = text_formated;
    record_drink_send(first_name_recipe,date_recipe);
}


function record_drink_send(first_name_record,date_record) {
  if (!localStorage.getItem("number_drink_send")) {
    record_send(first_name_record,date_record);   
  } else {
    increase_send(first_name_record,date_record);
  }
	
}
  
function record_send(first_name_record,date_record){
  localStorage.setItem("number_drink_send", 1);
  let name_sends = "name"+1;
  localStorage.setItem(`${name_send}`,first_name_record);
  let date_sends = "date"+1;
  localStorege.setItem(`${date_sends}`,date_record);
}

function increase_send(first_name_record,date_record){
  let number = localStorage.getItem("number_drink_send");
  number_inc = parseInt(number)+1;
  localStorage.setItem("number_drink_send", number_inc);
  let name_sends = "name"+number_inc;
  localStorage.setItem(`${name_send}`,first_name_record);
  let date_sends = "date"+number_inc;
  localStorege.setItem(`${date_sends}`,date_record);
}
