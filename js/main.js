$(document).ready(function(){
  $('.gallery-wrapper').Chocolat();
  // search fn this is not a fast fn it is not optimized at all
  $('#search-term').on('keyup', function () {
    let searchTerm = $('#search-term').val().trim().toLowerCase();
    if(searchTerm == ''){
      $('.gallery-wrapper a').each(function () {
        $(this).show();
      });
    }else{
      $('.gallery-wrapper a img').each(function () {
        let alt = $(this).attr('alt').toLowerCase();
        let title = $(this).attr('title').toLowerCase();
        let fullTerm = `${alt} ${title}`;
        if(fullTerm.includes(searchTerm)){
          $(this).parent().show();
        }else{
          $(this).parent().hide();
        }
      });
    }
  });
});