$(function() {
var $TABLE = $('#table');
var $BTN = $('#save-btn');
var $SAVE= $('#save');


$('.table-add').on("click", function () {
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
  $TABLE.find('table').append($clone);
});

$('.table-remove').on("click",function () {
  $(this).parents('tr').detach();
});


//jQuery helpers for exporting
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.on("click", function () {
  var $rows = $TABLE.find('tr:not(:hidden)');
  var grades = [$rows.find('td:not(:hidden)')];
  var students = [$rows.find('th.student-name:not(:hidden)')];

  
  // Get the subjects
  $($rows.shift()).find('th:not(:empty)').each(function () {
    grades.push($(this).text().toLowerCase());
  });
  
  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');
    var h = {};
    
    grades.forEach(function (grades, i) {
    h[grades] = $td.eq(i).text();   
    });
    
    students.push(h);
  });
  
  // Output the result to page for now, need to update to output to update db
  $SAVE.text(JSON.stringify(students));
});
});

