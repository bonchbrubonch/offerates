$(function () {
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
  
    // placeholder: "Select a state",
  });

		$('.offers__bottom-like').on('click', function () {
			$(this).toggleClass('active');
		});

});