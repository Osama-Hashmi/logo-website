$(document).ready(function () {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $(".menu .menu-item-has-children").addClass("dropdown-nav ");
    $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");
    $('[href="#"],[href=""]').attr("href", "javascript:;");

    var tablen = $('.row.has_shining.portfolio_list .col-6');
    for (var cmb = 0; cmb < tablen.length; cmb++) {        
        var oeder = Math.floor(Math.random(1000) * -2000);
        tablen.eq(cmb).css("order", oeder);
    }

    let indicator = $('.movable-indicator');
    $('.menu>li').each(
        function () {
            $(this).on('click mouseover', function () {
                let left_distance = $(this).position().left;
                let element_width = $(this).outerWidth();
                indicator.css('width', element_width);
                indicator.css('left', left_distance);
            })
        }
    );
    $('.menu>li.active').click();

    $('.menu').mouseleave(function () {
        let left_distance = $('.menu li.active').position().left;
        let element_width = $('.menu li.active').outerWidth();
        indicator.css('width', element_width);
        indicator.css('left', left_distance);
    });

    $(document).ready(function(){
        

        $(".reviews_row").each(function() {
            var tablen = $(this).find('.review_card'), tebstr;

            var firstName, lastName = null;

            for (var i = 0; i < tablen.length; i++) {
                firstName = tablen.eq(i).find('.rev_head div .rev_author p').text();
                lastName = tablen.eq(i).find('.rev_head div .rev_author p em').text();
                var intials = firstName.charAt(0) + lastName.charAt(0);
                var profileImage = tablen.eq(i).find('.rev_head div .rev_avatar #profileImage').text(intials);
                var hue = 'rgb(' + (Math.floor((256 - 70) * Math.random()) + 10) + ',' + (Math.floor((256 - 70) * Math.random()) + 40) + ',' + (Math.floor((256 - 70) * Math.random()) + 80) + ')';
                tablen.eq(i).find('.rev_head div .rev_avatar #profileImage').css("background-color", hue);
            }

            
        });
    });

    $('.pkg_btn a').each(function(){

        var target = $(this).data("addon");
        var pack_name = $(this).parent().parent().find(".pkg_text").find(".pkg_head").find("h3").text();
        var pack_price = $(this).parent().parent().find(".pkg_text").find(".pkg_pricing").find("p").find("strong").text();
        

        if(target === 1){
            $(this).attr("data-src", "#getStartedForm");
        } else{
            $(this).attr("data-src", "#leadForm");
        }
        
        $(this).addClass("pkg-btn");
        $(this).attr("pkg-name", pack_name);
        $(this).attr("pkg-price", pack_price);
        $(this).attr("data-fancybox", "");
    });


    // Mobile Menu
    var len = $('.menu > li'), str;
    $(".menu-Bar").click(function () {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
        for (var i = 1; i < len.length; i++) {
            str = (300 + 100 * (i - 1)) + "ms";
            len.eq(i).css('animation-delay', str)
        }
    });
    $('.dropdown-nav').prepend('<span class="toggle_submenu"><i class="fal fa-plus"></i></span>')
    $('.toggle_submenu').click(function () {
        $('ul.dropdown').slideUp();
        $('.toggle_submenu').removeClass('active')
        if ($(this).parent().find('ul.dropdown').is(':visible')) {
            $(this).removeClass('active')
            $(this).parent().find('ul.dropdown').slideUp();
        } else {
            $(this).addClass('active')
            $(this).parent().find('ul.dropdown').slideDown()
        }
    })

    // SearchBar
    $('.search_btn').click(function () {
        $('.backdrop').fadeIn()
        $('.search_bar').addClass('active')
    })
    $('.hideSerch,.backdrop').click(function () {
        $('.search_bar').removeClass('active')
        $('.backdrop').fadeOut()
    })

    // Tabbing Function
    $("[data-targetit]").on("click", function (e) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var target = $(this).data("targetit");
        var tablen = $("." + target).find('.tab-content .row > div'), tebstr;
        $("." + target).siblings('[class^="box-"]').hide();
        $('.tab-content .row > div').addClass('animate__zoomIn');
        $("." + target).show().find('.tab-content .row > div').addClass('animate__zoomIn');
        for (var i = 1; i < tablen.length; i++) {
            tebstr = (100 + 100 * (i - 1)) + "ms";
            tablen.eq(i).css('animation-delay', tebstr)
        }
    });

    $(document).ready(function(){
        var param = getUrlParameter('show');
        
        if (param == "website") {
            $(".box-" + param).siblings('[class^="box-"]').hide();
            $(".box-" + param).show().find('.tab-content .row > div').addClass('animate__zoomIn');
            // var datavalue = $('.myPackageDataList li').data("targetit");
            $(".myPackageDataList li.last").addClass("active");
            $(".myPackageDataList li.last").siblings().removeClass("active");
        }
    });
      
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
      
        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
      
          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
        }
    };

    

    $("[data-servicedetail]").on("click", function (e) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var target = $(this).data("servicedetail");
        $('.' + target).siblings('[class^="box-"]').hide();
        $('.' + target).fadeIn();
        $("." + target).find('.tab-content .row > div').removeClass('animate__zoomIn');
    });

    $(".packSelect select").on("click", function (e) {
        var target = $(this).find("option:selected").data("bannerfilter");
        $('.' + target).siblings('[class^="box-"]').hide();
        $('.' + target).fadeIn();
    });

    // Accordion
    $('.acc_title').on('click', function () {
        $(this).parent().parent().find('li').removeClass('active')
        $(this).parent().parent().find('.acc_desc').slideUp();
        $(this).parent('li').addClass('active')
        if (!$(this).next('.acc_desc').is(':visible')) {
            $(this).next('.acc_desc').slideDown();
        } else {
            $(this).parent().parent().find('li').removeClass('active')
        }
    });

    // Slick Slider

    

    $(".logo_slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $(".pack_slider").slick({
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 5000,
        slidesToShow: 3,
        draggable:false,
        swipeToSlide: false,
        pauseOnHover: true,
        pauseOnFocus: true,
    });

    //     Slider For
    $('.s2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.s2_slider_nav',
        prevArrow: $('.s2 .arr_l'),
        nextArrow: $('.s2 .arr_r')
    });
    $('.s2_slider_nav').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.s2_slider',
        dots: false,
        focusOnSelect: true
    });
    // Increament Qty
    $('.has_qty').each(function () {
        let qty = 1;
        $(this).find('.qty_count').on('change', function () {
            qty = $(this).val();
        })
        $(this).find('.num_dec').on('click', function () {
            qty > 1 && qty--;
            $(this).parent().find('.qty_count').val(qty);
        })
        $(this).find('.num_inc').on('click', function () {
            qty >= 1 && qty++;
            $(this).parent().find(".qty_count").val(qty);
        })
    })


    // Hide header on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.sticky_header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;

    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If scrolled down and past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.sticky_header').removeClass('nav-down').addClass('nav-up');
            $('.header_top').slideUp('fast')
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.sticky_header').removeClass('nav-up').addClass('nav-down');
            }
        }
        if (st < navbarHeight) {
            $('.sticky_header').removeClass('nav-down');
            $('.header_top').slideDown('fast')
        }

        lastScrollTop = st;
    }

    // Input label
    $('.input_group input,.input_group textarea').blur(function () {
        $(this).val() !== '' ? $(this).next('label').addClass('has_value') : $(this).next('label').removeClass('has_value')
    })

    // Porgressbar animie
    if ($('.has_jquery_animation').length) {
        $(window).scroll(progressAnimate);
        var viewedP = false;

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function progressAnimate() {
            if (isScrolledIntoView($(".animate_progress")) && !viewedP) {
                viewedP = true;
                $('.animate_progress .animie_value').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1500,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                $('.animate_progress .progress_num').each(function () {
                    $(this).css({ 'left': '0', 'opacity': 0 });
                    var progressCount = $(this).attr('data-progress')
                    $(this).animate({
                        left: progressCount + '%',
                        opacity: 100 + '%'
                    }, 1500)
                });
                $('.animate_progress .progress-bar').each(function () {
                    $(this).css({ 'width': '0' });
                    var progressWidth = $(this).attr('data-progress')
                    $(this).animate({
                        width: progressWidth + '%'
                    }, 1500)
                });
            }
        }
    }

});
// Active Menu Class
$(window).on("load", function () {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
    );
    $("ul.menu li a").each(function () {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $('ul.menu li').removeClass("active");
            $(this).removeClass("active");
            $(this)
                .closest("li")
                .addClass("active");
        }
    });
    $('.menu>li.active').click();

    $('.dropdown-nav li').each(function () {
        if ($(this).hasClass('active')) {
            $(this).parent().parent().addClass('active')
        }
    })
});

// Show More Checkboxes   
function chkbxMoreBtn() {
    if ($(".chkbx_show li:hidden").length == 0 || $(".chkbx_show li").length < 6) {
        $(".chkbx_more").fadeOut();
    }
}
$(".chkbx_show li").hide();
$(".chkbx_show li").slice(0, 6).show();
chkbxMoreBtn()
$(".chkbx_more").on('click', function (e) {
    e.preventDefault();
    $(".chkbx_show li:hidden").slice(0, 6).slideDown();
    chkbxMoreBtn()
});

/* Portfolio filter*/
const pSearchInput = $('.portfolioSearch');
const psside = $('.ps_side_res');
const listItem = $('.portfolio_list > div');
const listItem1 = $('.portfolio_list > div');
const noItems = '<div class="nothing_text mt-4">Sorry! Nothing found.</div>';
const viewMoreBtn = $(".portfolio_more");
const checkviewMoreBtn = $(".checkportfolio_more");

function updateDatafancybox() {
    return $('.portfolio_list > div:visible').find('a').attr('data-fancybox', 'filtered-items')
}
function revertDatafancybox() {
    return listItem.find('a').attr('data-fancybox', 'portflio')
}
function noItemsMsd() {
    if (!$('.nothing_text').length && !$('.portfolio_list > div:visible').length === 0) $(noItems).insertAfter(".portfolio_list");
    else $('.nothing_text').remove();
}

function orderItemsNoReset(){
    var orderItemsNosReset = $('.row.portfolio_list .col-6');
    for (var cmb = 0; cmb < orderItemsNosReset.length; cmb++) {        
        var oeder = Math.floor(Math.random(1000) * -2000);
        orderItemsNosReset.eq(cmb).css("order", oeder);
    }
}


function orderItemsNo() {
    var orderItemsNos = $('.row.portfolio_list .col-6.filteredCheckData');
    for (var cmb = 0; cmb < orderItemsNos.length; cmb++) {        
        // var oeder = Math.floor(Math.random(1000) * -2000);
        orderItemsNos.eq(cmb).css("order", cmb);
    }
}
    

/* Portfolio filter Mob Button  */
$('.porflio_filter').click(function () {
    $('body').addClass('ovr-hiddn')
    psside.slideDown('fast');
})
$('.ps_side_res_close').click(function () {
    $('body').removeClass('ovr-hiddn')
    psside.slideUp('fast');
})

// Show 12 items first
listItem.hide();
listItem.slice(0, 9).show();
viewMoreBtn.on('click', function (e) {
    e.preventDefault();
    $(".portfolio_list > div:hidden").slice(0, 6).slideDown();
    if ($(".portfolio_list > div:hidden").length == 0) {
        viewMoreBtn.fadeOut('fast');
    }
});

checkviewMoreBtn.on('click', function (e) {
    e.preventDefault();
    $(".portfolio_list > div.filteredCheckData:hidden").slice(0, 6).slideDown();
    if ($(".portfolio_list > div.filteredCheckData:hidden").length == 0) {
        checkviewMoreBtn.fadeOut('fast');
    }
});

psside.find("input").on('change', function () {
    listItem.hide();
});

// Portfolio Checkboxes
psside.find("input").on('change', function () {
    viewMoreBtn.hide();
    checkviewMoreBtn.hide();
    $(".loader").show();
    setTimeout(function() {
        let selected = [];
        $(".portfolio_list > div.filteredCheckData").removeClass("filteredCheckData");
        pSearchInput.val('');
        viewMoreBtn.hide();
        revertDatafancybox();

        $('.ps_side_res ').find("input").each(function () {
            if ($(this).is(":checked")) selected.push($(this).next('label').text());
        });

        listItem.hide();
        $(".portfolio_list > div a").each(function () {     
            const category = $(this).attr('data-category');
            const categorySplitted = category.split(', ');
            categorySplitted.forEach((cat) => {
                if (selected.indexOf(cat) !== -1) {
                    $(this).attr('data-filtered', $(this).attr('data-keywords'));
                    $(this).parent().addClass('filteredCheckData');
                    $(this).parent("div").parent(".portfolio_list").find(".filteredCheckData").slice(0, 9).show();
                }
                updateDatafancybox();
                orderItemsNo()

            });
        });

        if ($('.portfolio_list > div:visible').length < 9) {
            checkviewMoreBtn.hide()
        }else{
            checkviewMoreBtn.show()
        };


        if (psside.find("input:checked").length) {
            $('.portfolio_list').addClass('filtered_list');
        } else {
            checkviewMoreBtn.hide();
            listItem.hide().slice(0, 9).show();
            viewMoreBtn.show();
            pSearchInput.val('');
            $('.portfolio_list').removeClass('filtered_list');
            listItem.find('a').removeAttr('data-filtered');
            listItem.removeClass("filteredCheckData");
            revertDatafancybox();
            orderItemsNoReset()
        }
        $(".loader").hide();
    }, 100);
});


// Portfolio Search
pSearchInput.on('keyup', function () {
    viewMoreBtn.hide();
    checkviewMoreBtn.hide();
    revertDatafancybox()
    var searchVal = $(this).val();
    const filterItems = listItem;

    if (!psside.find("input:checked").length) {
        noItemsMsd();
        if (searchVal !== '') {
            filterItems.hide();
            $('[data-keywords*="' + searchVal.toLowerCase() + '"]').parent().show();
            updateDatafancybox()
        } else {
            filterItems.hide().slice(0, 9).show();
            viewMoreBtn.show();
            revertDatafancybox()
        }
    } else {
        noItemsMsd();
        if (searchVal !== '') {
            filterItems.hide();
            $('[data-filtered*="' + searchVal.toLowerCase() + '"]').parent().show();
            updateDatafancybox()
        } else {
            $('[data-filtered').parent().show();
            updateDatafancybox()
        }
    }

    if ($('.portfolio_list > div:visible').length === 0 && !$('.nothing_text').length) $(noItems).insertAfter('.portfolio_list');
});




$(document).ready(function ($) {
  //Items
  var $card = $(".mYimg_wrap");
  var $container = $(".mover.s7");
  var $bike = $(".bike picture");

  //Moving Animation Event
  $container.on("mousemove", function (e) {
    let xAxis = (window.innerWidth / 2 - e.clientX) / 50;
    let yAxis = (window.innerHeight / 2 - e.clientY) / 50;
    $card.css("transform", `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
  });

  //Animate on Hover
  $container.hover(function () {
    $card.toggleClass("has-transform");
    $bike.toggleClass("has-transform");
  });

  //Pop Back on mouseleave
  $container.on("mouseleave", function () {
    $card.css("transform", `rotateY(0deg) rotateX(0deg)`);
  });
});

$(document).ready(function() {
    if (window.location.hash) {
        var hash = window.location.hash;
        var param = hash.slice(1);


        // For WEBSITE PAGE
        $(".box-" + param).siblings('[class^="box-"]').hide();
        $(".box-" + param).show().find('.tab-content .row > div').addClass('animate__zoomIn');
        $("[data-targetit^=box-"+param+"]").addClass("active");
        $("[data-targetit^=box-"+param+"]").siblings().removeClass("active");

        $('a[href="#'+param+'"]').parent().addClass("myHASHcLass");
        $('a[href="#'+param+'"]').parent().siblings().removeClass("myHASHcLass");

        // FOR PACKAGE PAGE
        // console.log(pageName);
        $("."+param).addClass("active");
        $("."+param+"").siblings().removeClass("active");

        var target1 = $("."+param).data("targetit");

        
        var tablen = $("." + target1).find('.tab-content .row > div'), tebstr;
        $("." + target1).siblings('[class^="box-"]').hide();
        $('.tab-content .row > div').addClass('animate__zoomIn');
        $("." + target1).show().find('.tab-content .row > div').addClass('animate__zoomIn');
        for (var i = 1; i < tablen.length; i++) {
            tebstr = (100 + 100 * (i - 1)) + "ms";
            tablen.eq(i).css('animation-delay', tebstr)
        }

        $('html, body').animate({
            scrollTop :  $(hash).offset().top  + -180
        }, 500);

    };
});

// Section Target
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if(this.hash == "#tophere"){
        event.preventDefault();
    }
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        // event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + -120
        }, 100, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});

/* RESPONSIVE JS */
if ($(window).width() < 768) {
    $(".packages_slider").removeClass("gy-5");
    $(".packages_slider").removeClass("row");
    $(".packages_slider").slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 1200,
        slidesToShow: 1,
    });
}