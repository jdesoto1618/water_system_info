// set reservoir objects and their capacities
var res_cap = {
  1264    : 500000,
  13151   : 1710189,
  13154   : 5098599,
  20813   : 1009625,
  20814   : 840000,
  200814  : 1056231,
  200815  : 912510,
  22033   : 1069687,
  24140   : 524500,
  25191   : 125905,
  27916   : 998033,
  28150   : 307523,
  31901   : 77112,
  31902   : 77112,
  32939   : 5028131,
  33710   : 557152,
  33930   : 928917,
  43210   : 547733,
  43610   : 561586,
  43626   : 7000,
  51770   : 250000,
  51771   : 1100000,
  51772   : 1021416,
  52698   : 1018576,
  53116   : 782764,
  62310   : 556293,
  62518   : 272600,
  63210   : 590902,
}

// adds buttons to the dom for each reservoir in the res_cap object
document.addEventListener("DOMContentLoaded", function(event) {
  // save the page title to a var
  var page_title = document.getElementById('res_number');
  // set the default h1
  page_title.innerHTML = 'Reservoir Data';
  // save object's keys in the keys variable
  var keys = Object.keys(res_cap);
  // save the object length to a var
  var length = keys.length;
  var docFrag = document.createDocumentFragment();
  for (var i = 0; i < keys.length; i++) {
    var button = document.createElement('button');
    button.setAttribute('value', keys[i]);
    button.setAttribute('id', keys[i]);
    button.innerHTML = keys[i];
    docFrag.appendChild(button);
  }
  document.getElementById('main').appendChild(docFrag);

  document.getElementById(keys[i]).addEventListener('click', function() {
    var fired_button = this.value;
    alert(fired_button);
});
}); // ends content loaded event listener

// convert capacity to MG and display the result as the page title when an option is clicked
function toMG() {
  var theader = document.getElementById('table_header');
  // set the table header to the clicked reservoir from the options
  // this needs to be able to grab the value of the buttons clicked
  // theader.innerHTML = 'Volume Table - ' + '<br/>' + 1000000).toFixed(2) + ' MG';
} // ends toMG function
toMG();
// function to add all the reservoirs as options to the select on page title
function addOptions(obj) {
  // instantiate new empty array to hold the res capacities
  var caps = [];
  // + '<br/>' + '<select id="reservoirs"></select>';
  // save the select to a var
  // var select = document.getElementById('reservoirs');
  // add to the select all the reservoirs from the object
  // for (var i = 0; i < length; i++){
  //   // add each reservoir to the select as options, using new Option constructor
  //   var opt = new Option(keys[i], keys[i]);
  //   // append each option to the select
  //   select.appendChild(opt);
  // } // ends for loop to add all options to select dropdown
  // set the initial dropdown value to nothing
  // select.value = '';
  // get the clicked option value from the reservoir select dropdown
  // select.onchange = function() {
    // save clicked option to a var
    // var selected_res = parseInt(select.options[select.selectedIndex].value,10);
    // check which reservoir is clicked from the options
  // if(selected_res === 1264) {
    // array to hold all gallon values... magic mumbers :(
    var gallons = [
      13267,
      29387,
      48740,
      71710,
      98678,
      130027,
      166139,
      207396,
      254180,
      306874,
      365860,
      431519,
      504235,
      584389,
      672364,
      759949,
      840821,
      921692,
      1002564,
      1069687
    ];
    var length = gallons.length;
    var i, percents = [];
    // for(i = 0; i < length; i++) {
    //   percents.push(((gallons[i]/1069687)*100).toFixed(2));
    //   document.getElementsByClassName('ft_up')[i].innerHTML = percents[i] + '%';
    // } // ends for loop for 1264 res
  // } else if (selected_res === 13151) {
    // array to hold all gallon values... magic mumbers :(
    var gallons = [
      1049,
      3764,
      19438,
      42725,
      70913,
      103907,
      141911,
      185131,
      233856,
      288395,
      349044,
      416098,
      489854,
      570607,
      658655,
      754292,
      857815,
      969521,
      1089705,
      1218663,
      1356691,
      1504086,
      1661143,
      1710189
    ];
    var length = gallons.length;
    var i, percents = [];
    // for(i = 0; i < length; i++) {
    //   percents.push(((gallons[i]/1710189)*100).toFixed(2));
    //   document.getElementsByClassName('ft_up')[i].innerHTML = percents[i] + '%';
    // } // ends for loop for 13151 res
  // }
} // ends addOptions function

addOptions(res_cap);
