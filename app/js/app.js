$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__box").addClass("open");
    $("body").addClass("lock");
  });

  $(".header__box-close").on("click", function () {
    $(".header__box").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".currency").select2({
    minimumResultsForSearch: -1
  });
  $(".language").select2({
    minimumResultsForSearch: -1
  });

  $(".country").select2({

  });

  $(".type").select2({

    placeholder: "Категория оффера",
  });

  $(".search").select2({
    placeholder: "Поиск по офферу",
  });
  


  $('.offers__bottom-like').on('click', function () {
    $(this).toggleClass('active');
  });


  $(function () {
 
    $(".rateYo").rateYo({
      starWidth: "20px",
      ratedFill: "#F0B020",
      spacing: "2px",
      rating: 5,
      readOnly: true,
      onChange: function (rating, rateYoInstance) {
   
        $(this).next().text(rating);
      }

      
    });
  });

    $("#rateYo-2").rateYo({
      starWidth: "20px",
      ratedFill: "#F0B020",
      spacing: "2px",
      rating: 5,
   
    });
  

});