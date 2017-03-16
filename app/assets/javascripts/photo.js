import $ from "jQuery";

$("#addNewChoice").onClick = () => {
  $("#photo-upload").append($("#new_photo_form").html());
};

$('[data-form-prepend]').click(function(e) {
  let obj = $($(this).attr('data-form-prepend'));
  obj.find('input, select, textarea').each(function() {
    $(this).attr('name', function() {
      return $(this).attr('name').replace('new_record', (new Date()).getTime());
    });
  });
  obj.insertBefore(this);
  return false;
});
