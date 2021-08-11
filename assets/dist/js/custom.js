// functions
function tabs(currentElement) {
  currentElID = currentElement.attr('id');
  console.log(currentElID);

  jQuery('#tabs').find('li').removeClass('active');
  currentElement.addClass('active');

  jQuery('.tab-contents').find('.tab-data').removeClass('show');
  jQuery('#' + currentElID + '-data').addClass('show');
}

// ready function
jQuery( document ).ready(function() {
  jQuery('#tabs').find('li').on('click', function() {
    tabs(jQuery(this));
  });
});