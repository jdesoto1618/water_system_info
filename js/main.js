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
        // create the 1264 reservoir table
        createRows(gal_1264, res_cap[this.innerText]);
        alert('No information available for this reservoir');
      } else if(this.innerText === '13151') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 13151 reservoir table
        createRows(gal_13151, res_cap[this.innerText]);
      } else if(this.innerText === '13154') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 13154 reservoir table
        createRows(gal_13154, res_cap[this.innerText]);
      } else if(this.innerText === '20813') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 20813 reservoir table
        createRows(gal_20813, res_cap[this.innerText]);
      } else if(this.innerText === '20814') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 20814 reservoir table
        createRows(gal_20814, res_cap[this.innerText]);
        alert('No information available for this reservoir');
      } else if(this.innerText === '200814') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 200814 reservoir table
        createRows(gal_200814, res_cap[this.innerText]);
      } else if(this.innerText === '200815') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 200815 reservoir table
        createRows(gal_200815, res_cap[this.innerText]);
      } else if(this.innerText === '22033') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 22033 reservoir table, send the gal_22033 array to this function
        createRows(gal_22033, res_cap[this.innerText]);
      } else if(this.innerText === '24140') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 24140 reservoir table, send the gal_24140 array to this function
        createRows(gal_24140, res_cap[this.innerText]);
      } else if(this.innerText === '25191') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 25191 reservoir table, send the gal_25191 array to this function
        createRows(gal_25191, res_cap[this.innerText]);
      } else if(this.innerText === '27916') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 27916 reservoir table, send the gal_27916 array to this function
        createRows(gal_27916, res_cap[this.innerText]);
      } else if(this.innerText === '28150') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 28150 reservoir table, send the gal_28150 array to this function
        createRows(gal_28150, res_cap[this.innerText]);
      } else if(this.innerText === '31901') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 31901 reservoir table, send the gal_31901 array to this function
        createRows(gal_31901, res_cap[this.innerText]);
        alert('No information available for this reservoir');
      } else if(this.innerText === '31902') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 31902 reservoir table, send the gal_31902 array to this function
        createRows(gal_31902, res_cap[this.innerText]);
      } else if(this.innerText === '32939') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 32939 reservoir table, send the gal_32939 array to this function
        createRows(gal_32939, res_cap[this.innerText]);
      } else if(this.innerText === '33710') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 33710 reservoir table, send the gal_33710 array to this function
        createRows(gal_33710, res_cap[this.innerText]);
      } else if(this.innerText === '33930') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 33930 reservoir table, send the gal_33930 array to this function
        createRows(gal_33930, res_cap[this.innerText]);
      } else if(this.innerText === '43210') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 43210 reservoir table, send the gal_43210 array to this function
        createRows(gal_43210, res_cap[this.innerText]);
      } else if(this.innerText === '43610') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 43610 reservoir table, send the gal_43610 array to this function
        createRows(gal_43610, res_cap[this.innerText]);
      } else if(this.innerText === '43626') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 43626 reservoir table, send the gal_43626 array to this function
        createRows(gal_43626, res_cap[this.innerText]);
        alert('No information available for this reservoir');
      } else if(this.innerText === '51770') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 51770 reservoir table, send the gal_51770 array to this function
        createRows(gal_51770, res_cap[this.innerText]);
        alert('No information available for this reservoir');
      } else if(this.innerText === '51771') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 51771 reservoir table, send the gal_51771 array to this function
        createRows(gal_51771, res_cap[this.innerText]);
        alert('No information available for this reservoir');
      } else if(this.innerText === '51772') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 51772 reservoir table, send the gal_51772 array to this function
        createRows(gal_51772, res_cap[this.innerText]);
      } else if(this.innerText === '52698') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 52698 reservoir table, send the gal_52698 array to this function
        createRows(gal_52698, res_cap[this.innerText]);
      } else if(this.innerText === '53116') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 53116 reservoir table, send the gal_53116 array to this function
        createRows(gal_53116, res_cap[this.innerText]);
      } else if(this.innerText === '62310') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 62310 reservoir table, send the gal_62310 array to this function
        createRows(gal_62310, res_cap[this.innerText]);
      } else if(this.innerText === '62518') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 62518 reservoir table, send the gal_62518 array to this function
        createRows(gal_62518, res_cap[this.innerText]);
        alert('No information available for this reservoir');
      } else if(this.innerText === '63210') {
        // update table header to include clicked reservoir number
        theader_txt.innerHTML = this.innerText + ' Volume Table';
        // remove any table rows already present
        removeRows();
        // create the 63210 reservoir table, send the gal_63210 array to this function
        createRows(gal_63210, res_cap[this.innerText]);
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
// volume in gallons at 1 foot decrements, descending order for res 1264
var gal_1264 =
[

];
// volume in gallons at 1 foot decrements, descending order for res 13151
var gal_13151 =
[
  1710189, // 0 feet down
  1661143, // 0.3 feet down
  1504086, // 1.3 feet down
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
// volume in gallons at 1 foot decrements, descending order for res 13154
var gal_13154 =
[
  5098599, // 0 feet down
  4894124, // 0.6 feet down
  4556792, // 1.6 feet down
  4229589,
  3912363,
  3604962,
  3307232,
  3019023,
  2740181,
  2470553,
  2209989,
  1958334,
  1715437,
  1481146,
  1255307,
  1037769,
  828379,
  626985,
  433434,
  247574,
  73380
];
// volume in gallons at 1 foot decrements, descending order for res 20813. no special entry needed for 100% full
var gal_20813 =
[
  1009625,
  912480,
  820582,
  733780,
  651921,
  574854,
  502427,
  434489,
  370887,
  311471,
  256088,
  204587,
  156817,
  112624,
  71858,
  34367
];
// volume in gallons at 1 foot decrements, ascending order for res 20814
var gal_20814 =
[

];
// volume in gallons at 1 foot increments, ascending order, 200814
var gal_200814 =
[
  1056231, // 0 feet down
  1040306, // 0.2 feet down
  948664, // 1.2 feet down
  861757,
  779472,
  701699,
  628324,
  559237,
  494327,
  433480,
  376586,
  323534,
  274210,
  228505,
  186305,
  147500,
  111977,
  79626,
  50334,
  23990
];
// volume in gallons at 1 foot increments, ascending order, 200815. no special entry needed for 100% full
var gal_200815 =
[
  912510,
  869058,
  825605,
  782152,
  738699,
  695246,
  651793,
  608340,
  564887,
  521435,
  477982,
  434529,
  391076,
  347623,
  304170,
  260717,
  217264,
  173812,
  130359,
  86906,
  43453
];
// volume in gallons at 1 foot increments, ascending order, 22033
var gal_22033 =
[
  1069687, // 0 feet down
  1002564, // 0.8 feet down
  921692, // 1.8 feet down
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
// volume in gallons at 1 foot increments, ascending order, 24140
var gal_24140 =
[
  524500, // 0 feet down
  510543, // 0.6 feet down
  486478, // 1.6 feet down
  462413,
  438348,
  414284,
  390219,
  366154,
  342090,
  318025,
  293960,
  269895,
  245831,
  221766,
  197701,
  173636,
  149571,
  125507,
  101442,
  77377,
  53312,
  32033,
  17321,
  7868,
  2360
];
// volume in gallons at 1 foot increments, ascending order, 25191
var gal_25191 =
[
  125905, // 0 feet down
  122977, // 0.33 feet down
  114193, // 1.33 feet down
  105409,
  96625,
  87841,
  79057,
  70272,
  61488,
  52704,
  43920,
  35136,
  26352,
  17568,
  8784
];
// volume in gallons at 1 foot increments, ascending order, 27916. no special entry needed for 100% full
var gal_27916 =
[
  998033,
  900676,
  808673,
  721863,
  640087,
  563186,
  491001,
  423373,
  360142,
  301150,
  246237,
  195245,
  148013,
  104383,
  64195,
  27291
];
// volume in gallons at 1 foot increments, ascending order, 28150
var gal_28150 =
[
  307523, // 0 feet down
  303391, // 0.1 feet down
  263384, // 1.1 feet down
  225036,
  188333,
  153228,
  119673,
  87620,
  57022,
  27831
];
// volume in gallons at 1 foot increments, ascending order, 31901
var gal_31901 =
[

];
// volume in gallons at 1 foot increments, ascending order, 31902. no special entry needed for 100% full
var gal_31902 =
[
  77112,
  73440,
  69768,
  66096,
  62424,
  58752,
  55080,
  51508,
  47736,
  44064,
  40392,
  36720,
  33048,
  29376,
  25704,
  22032,
  18360,
  14688,
  11016,
  7344,
  3672
];
// volume in gallons at 1 foot increments, ascending order, 32939. no special entry needed for 100% full
var gal_32939 =
[
  5028131,
  4860330,
  4692529,
  4524728,
  4356927,
  4189125,
  4021324,
  3853523,
  3685722,
  3517921,
  3350119,
  3182318,
  3014517,
  2846716,
  2678915,
  2511113,
  2343312,
  2175511,
  2007710,
  1839909,
  1672107,
  1504306,
  1336505,
  1168704,
  1000903,
  833101,
  665300,
  497499,
  329698,
  161897
];
// volume in gallons at 1 foot increments, ascending order, 33710
var gal_33710 =
[
  557152, // 0 feet down
  519397, // 0.5 feet down
  448615, // 1.5 feet down
  383801,
  324679,
  270977,
  222419,
  178732,
  139641,
  104872,
  74151,
  47203,
  23756
];
// volume in gallons at 1 foot increments, ascending order, 33930
var gal_33930 =
[
  928917, // 0 feet down
  881744, // 0.5 feet down
  791637, // 1.5 feet down
  706662,
  626660,
  551473,
  480944,
  414912,
  353220,
  295710,
  242222,
  192599,
  146682,
  104312,
  65332,
  31201,
  7870
];
// volume in gallons at 1 foot increments, ascending order, 43210. no special entry needed for 100% full
var gal_43210 =
[
  547733,
  483150,
  423024,
  367431,
  316182,
  269086,
  225954,
  186597,
  150825,
  118448,
  89278,
  63123,
  39795,
  19105
];
// volume in gallons at 1 foot increments, ascending order, 43610
var gal_43610 =
[
  561586, // 0 feet down
  523999, // 0.5 feet down
  452310,
  386705,
  326902,
  272620,
  223578,
  179493,
  140085,
  105073,
  74176,
  47111,
  23598
];
// volume in gallons at 1 foot increments, ascending order, 43626
var gal_43626 =
[

];
// volume in gallons at 1 foot increments, ascending order, 51770
var gal_51770 =
[

];
// volume in gallons at 1 foot increments, ascending order, 51771
var gal_51771 =
[

];
// volume in gallons at 1 foot increments, ascending order, 51772. no special entry needed for 100% full
var gal_51772 =
[
  1021416,
  940403,
  859390,
  778377,
  697364,
  605279,
  521482,
  445562,
  377112,
  315720,
  260978,
  212477,
  169807,
  132559,
  100323,
  72690,
  49251,
  29596,
  13315
];
// volume in gallons at 1 foot increments, ascending order, 52698
var gal_52698 =
[
  1018576, // 0 feet down
  1002405, // 0.2 feet down
  921547, // 1.2 feet down
  840690,
  759832,
  672364,
  584389,
  504235,
  431519,
  365860,
  306874,
  254180,
  166139,
  130027,
  98678,
  71710,
  48740,
  29387,
  13267
];
// volume in gallons at 1 foot increments, ascending order, 53116. no special entry needed for 100% full
var gal_53116 =
[
  782764,
  695766,
  614270,
  538093,
  467051,
  400962,
  338641,
  282907,
  230575,
  182463,
  138387,
  98164,
  61610,
  28543
];
// volume in gallons at 1 foot increments, ascending order, 62310
var gal_62310 =
[
  556293, // 0 feet down
  522231, // 0.45 feet down
  451146, // 1.45 feet down
  386067,
  326718,
  272821,
  224101,
  180281,
  141084,
  106263,
  75453,
  48466,
  24996
];
// volume in gallons at 1 foot increments, ascending order, 62518
var gal_62518 =
[

];
// volume in gallons at 1 foot increments, ascending order, 63210
var gal_63210 =
[
  590902, // 0 feet down
  558390, // 0.5 feet down
  495483, // 1.5 feet down
  436764,
  382074,
  331257,
  284158,
  240619,
  200483,
  163595,
  129797,
  98933,
  70847,
  45382,
  22381
];

// function to create the table rows based on button click at bottom of page
function createRows(reservoir_gallons, reservoir_capacity) {
  // save the function call to calculate the percents to a var. this allowed me to loop through the resulting array of percents in the for loop where new rows are created, and then addeach percent to a row
  var res_percents = calcPerc(reservoir_gallons, reservoir_capacity);
  // save the table to a var
  var table = document.getElementById('res_table');
  // initialize looping variable and object length
  var i, length = reservoir_gallons.length - 1;
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
    var galText = document.createTextNode(reservoir_gallons[i]);
    // create a text node for the percTD. use the calcPerc function to generate each percent at the feet down increments. takes 2 parameters, the reservoir gallons at each foot down, and the reservoir capacity
    var percText = document.createTextNode(res_percents[i]);
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
function calcPerc(reservoir_gallons, reservoir_capacity) {
  // store length of gallons array passed into this function
  var length = reservoir_gallons.length;
  // initialize variables
  var i, percents = [];
  // loop through all gallon values from the array passed in
  for(i = 0; i < length; i++) {
    percents.push(((reservoir_gallons[i]/reservoir_capacity)*100).toFixed(2));
  } // ends loop through each gallon increments
  // return the percentages
  return percents;
} // ends calPerc function
