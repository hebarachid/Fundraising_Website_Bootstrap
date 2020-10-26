$(document).ready(function() {
    $('.nav-button').click(function() {
      $('.nav-button').toggleClass('change');
    });
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
      } else {
        $('.nav-menu').removeClass('custom-navbar');
      }
    });
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 650) {
        $('.camera-img').addClass('fromLeft');
        $('.mission-text').addClass('fromRight');
      } else {
        $('.camera-img').removeClass('fromLeft');
        $('.mission-text').removeClass('fromRight');
      }
    });
    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if(value === 'all') {
          $('.filter').show(300);
        } else {
          $('.filter').not('.' + value).hide(300);
          $('.filter').filter('.' + value).show(300);
        }
      });
    
      $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');
      });
      $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 4300) {
          $('.card-1').addClass('moveFromLeft');
          $('.card-2').addClass('moveFromBottom');
          $('.card-3').addClass('moveFromRight');
        } else {
          $('.card-1').removeClass('moveFromLeft');
          $('.card-2').removeClass('moveFromBottom');
          $('.card-3').removeClass('moveFromRight');
        }
      });


});
(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();
