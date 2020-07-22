$(document).ready(()=> {

  $('#menu-bar').on('click', ()=> {
    if ($('.nb').is(":hidden")) {
      $('.nb').css('display', 'block');
    } else {
      $('.nb').css('display', 'none');
    }


  })
})