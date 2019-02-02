// get the text of any button clicked
function get_text() {
  // getElementsByTagName returns a collection, just as in getElementsByClassName
  var buttons = document.getElementsByTagName('button');
  // save the number of buttons in the document
  var length = buttons.length, i;
  // save the table header innerHTML to a var
  var theader_txt = document.getElementById('table_header');
  // loop through the collection returned by getElementsByTagName
  for (i = 0; i < length; i++) {
    buttons[i].onclick = function () {
      // check to see which res button is clicked
      if(this.innerText === '1264') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
      } else if(this.innerText === '13151') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 13151 reservoir table
        createRows();
      } else if(this.innerText === '13154') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '20813') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '20814') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '200814') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '200815') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '22033') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 22033 reservoir table
        createRows();
      } else if(this.innerText === '24140') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '25191') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '27916') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '28150') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '31901') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '31902') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '32939') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '33710') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '33930') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '43210') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '43610') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '43626') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '51770') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '51771') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '51772') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '52698') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '53116') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '53310') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '62310') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '62518') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else if(this.innerText === '63210') {
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
      } else {
        console.log('Reservoir not found!');
      } // ends reservoir if statements
    } // ends buttons onclick function
  } // ends for loop through buttons
} // ends get_text function

// add buttons to the dom for each reservoir in the res_cap object
document.addEventListener('DOMContentLoaded', function(event) {
  // save the page title to a var
  var page_title = document.getElementById('res_number');
  // set the default h1
  page_title.innerHTML = 'Reservoir Data';
  // save object's keys in the keys variable
  var reservoirs = Object.keys(res_cap);
  // save the object length to a var
  var length = reservoirs.length, i;
  // create a document fragment. this will be added to the entire document
  var docFrag = document.createDocumentFragment();
  // loop through all object's keys
  for (i = 0; i < length; i++) {
    // create a button object in the markup for each object's key
    var button = document.createElement('button');
    // set the value of each created button
    button.setAttribute('value', reservoirs[i]);
    // set the button text to also be from the object keys
    button.innerText = reservoirs[i];
    // append to the docFrag each newly generated button
    docFrag.appendChild(button);
  } // ends looping through all object keys to create buttons
  // append to the entire document all the buttons contained in the docFrag
  document.getElementById('main').appendChild(docFrag);
  // now that all buttons are on the dom, get their inner text values on click
  get_text();
}); // ends domcontentloaded event listener

// set reservoir numbers and their capacities as an object
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
// save the keys of the res_obj; these are all the reservoirs. note these are saved as strings
var reservoirs = Object.keys(res_cap);
// volume in gallons at 1 foot increments, ascending order, 22033
var gal_22033 =
[
  1069687,
  1002564,
  921692,
  840821,
  759949,
  672364,
  584389,
  504235,
  431519,
  365860,
  306874,
  254180,
  207396,
  166139,
  130027,
  98678,
  71710,
  48740,
  29387,
  13267
];

// volume in gallons at 1 foot increments, descending order for res 13151
var gal_13151 =
[
  1661143,
  1504086,
  1356691,
  1218663,
  1089705,
  969521,
  857815,
  754292,
  658655,
  570607,
  489854,
  416098,
  349044,
  288395,
  233856,
  185131,
  141911,
  103907,
  70913,
  42725,
  19438,
  3764,
  1049
];

// function to create the table rows based on button click at bottom of page
function createRows() {
  // save the table to a var
  var table = document.getElementById('res_table');
  // initialize looping variable and object length
  var i, length = gal_22033.length - 1;
  // save table to a var. select the first occurrence of tbody element with [0]
  var tableRef = table.getElementsByTagName('tbody')[0];
  // loop through gallons array to get depths
  for(i = 0; i <= length; i++) {
    // save new depth row tr to a variable. this generates a tr
    var newRows = tableRef.insertRow(tableRef.rows.length);
    // insert a cell in the depthRow at index 0, the first td for this tr
    var depthTD = newRows.insertCell(0);
    // insert a cell in the galRow at index 1, the second td for this tr
    var galTD = newRows.insertCell(1);
    // insert a cell in the row at index 2, the third td for this tr
    var percTD = newRows.insertCell(2);
    // create a text node for the depthTD to hold the feet down increments
    var depthText = document.createTextNode(i + '\' down');
    // create a text node for the galTD. get this from the gallons_22033 array. needed to use array prototype reverse because the gallons are hardcoded from 1 foot up to full, instead of 1 foot down
    var galText = document.createTextNode(gal_22033[i]);
    // create a text node for the percTD. use the calcPerc function to generate each percent at the feet down increments
    var percText = document.createTextNode(calcPerc(gal_22033)[i],  + '%');
    // add the text to the newly generated depthTD
    depthTD.appendChild(depthText);
    // add the text to the newly generated galTD
    galTD.appendChild(galText);
    // add the text from the calcPerc function to the newly generated percTD
    percTD.appendChild(percText);
  } // ends for loop to loop through gallons for each reservoir
} // ends createRows function

// function to remove rows before generating a new table
function removeRows() {
  // get the old tbody from the dom
  var old_tbody = document.getElementById('table_body');
  // replace the text of all the rows with empty strings
  old_tbody.innerText = '';
}

// function to calculate the percentages of the reservoirs at each feet increment
function calcPerc(gallons) {
  // res_cap[reservoir] = gallon capacity for passed in reservoir
  // store length of gallons array passed into this function
  var length = gallons.length;
  // initialize variables
  var i, percents = [];
  // loop through all gallon values from the array passed in
  for(i = 0; i < length; i++) {
    percents.push(((gallons[i]/1069687)*100).toFixed(2));
  } // ends 22033 percents for loop
  // return the percentages
  return percents;
} // ends calPerc function
