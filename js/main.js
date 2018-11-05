jQuery(document).ready(function($) {
	$( window ).load(function() {
    
        // init Isotope
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
        })

        // filter items on button click
        $('.portfolio-filter').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

        //for menu active class
        $('.portfolio-filter button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });
});