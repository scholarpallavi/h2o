/** customQuery javascript

Holds functions for passing between query/results page

*/

//submit the query and redirect to the results page
function query_submit(test,machine,question,num_builds,phase) {
  var data = new Array();
  data[0] = test;
  data[1] = machine;
  data[2] = question;
  data[3] = num_builds;
  data[4] = phase;
  document.query.query.value = data;
  document.query.submit();

} 

//redirect back to the query page
function new_query() {
  window.location = 'ui.html'
}

//helper function to get the param payload from the url after redirect
function GetUrlValue(){
    var loc = document.URL;
    var params = loc.split('?')[1];
    return params;
}

//Perform the query by accessing the appropriate php script and then
//processing the data returned with d3
function doQuery(phpQueryPage) {
    d3.json(phpQueryPage+'?'+GetUrlValue(), function(json) {
        makeTable(json, '#results_table')
    });
}

