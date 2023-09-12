$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__box").addClass("open");
    $("body").addClass("lock");
  });

  $(".header__box-close").on("click", function () {
    $(".header__box").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".modal__button-add").on("click", function () {
    $(".add-info").addClass("open");
  });

  $(".currency").select2({
    minimumResultsForSearch: -1
  });
  $(".language").select2({
    minimumResultsForSearch: -1
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img src="' + $(state.element).attr('data-src') + '" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
  };
  
  $(".country").select2({
    // minimumResultsForSearch: Infinity,
    templateResult: formatState,
    templateSelection: formatState
  });

  $(".form-select").select2({
    placeholder: "Выберите из списка ниже",
    minimumResultsForSearch: -1
  });

  $(".type").select2({
    placeholder: "Категория оффера",
  });

  $(".search").select2({
    placeholder: "Поиск по офферу",
  });

  $(".reviews-filter").select2({
    minimumResultsForSearch: -1
  });

  $(".conection-offers").select2({
    minimumResultsForSearch: -1
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

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    arrows: false,
    dots: true,
  });


});