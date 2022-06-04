$(function () {
  var $TABLE = $('#table');
  var $BTN = $('#save-btn');
  var $SAVE = $('#save');
console.log('load!!');

  $('.table-add').on("click", function () {
    console.log('add');
    var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide');
    console.log($clone);
    $TABLE.find('table').append($clone);
  });

  $('.table-remove').on("click", function () {
    console.log('remove');
    $(this).parents('tr').detach();
  });
});


