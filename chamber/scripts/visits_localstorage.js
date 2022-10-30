/* This program record the times that is visited the page and days passed */
const first_visit_id = document.querySelector("#visit_first");
const visit_before_id = document.querySelector("#visit_last");
const days_pass_visit_id = document.querySelector("#visit_record");
const days_pass_first_visit_id = document.querySelector("#visit_record_first_visit");

const date_now = new Date().getTime();



if (!localStorage.getItem("date_visit_first")) {
	record_visit();   
} else {
	show_info_days();
}

function record_visit() {
	localStorage.setItem("date_visit_first", date_now);
    localStorage.setItem("date_visit_last",date_now);
	show_info_days();
}
// verificar las fechas y que la operacion 
//sea correcta puedes imprimir los valores console.log
function show_info_days() {
    let visit_first = localStorage.getItem("date_visit_first");
    let visit_last = localStorage.getItem("date_visit_last");
    let day_between_visits = date_now - parseInt(visit_last,10);
    let day_between_first_visit = date_now - parseInt(visit_first,10);
    console.log(" date "+ date_now + " visit_last" + parseInt(visit_last,10) + " the rest:"+day_between_visits);

	let amount_time_in_days = (day_between_visits/(1000*60*60*24));
    console.log(" amount_time_in_days "+Math.trunc(amount_time_in_days,0));
    const format_visit_first = new Date(parseInt(visit_first,10));   
    const format_visit_last= new Date(parseInt(visit_last,10));
    first_visit_id.textContent = format_visit_first.toLocaleString();
    visit_before_id.textContent = format_visit_last.toLocaleString();

    let amount_time_in_days_first_visit = (day_between_first_visit/(1000*60*60*24));
    console.log(" amount_time_in_days_first_visit "+Math.trunc(amount_time_in_days,0));
    days_pass_visit_id.textContent = Math.round(amount_time_in_days);
    days_pass_first_visit_id.textContent = Math.round(amount_time_in_days_first_visit);

    localStorage.setItem("date_visit_last",date_now);

}


