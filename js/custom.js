/*-------------------------------------------------
Project:	i-Fact
Author:     Webstrot
Copyright © 2019-20
----------------------------------------------------*/
/*=================== Custom Functions ====================*/
(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;


    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });


    // scrolling animation js

    var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    var $screensize = function(element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
    $('.animated-row').each(function() {
        var $this = $(this);
        $this.find('.animate').each(function(i) {
            var $item = $(this);
            var animation = $item.data('animate');
            $item.on('inview', function(event, isInView) {
                if (isInView) {
                    setTimeout(function() {
                        $item.addClass('animated ' + animation).removeClass('animate');
                    }, i * 50);
                } else if (!screencheck(767)) {
                    $item.removeClass('animated ' + animation).addClass('animate');
                }
            });
        });
    });


    //---- on ready function ----//
    jQuery(document).ready(function($) {

        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.header').addClass('menu_fixed animated fadeInDown');
            } else {
                $('.header').removeClass('menu_fixed animated fadeInDown');
            }
        });

        //----------------------- agency2 MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.agency2_header').addClass('agency2_menu_fixed animated fadeInDown');
            } else {
                $('.agency2_header').removeClass('agency2_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- beauty MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.beauty_header').addClass('beauty_menu_fixed animated fadeInDown');
            } else {
                $('.beauty_header').removeClass('beauty_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- business MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.bussi_header').addClass('bussi_menu_fixed animated fadeInDown');
            } else {
                $('.bussi_header').removeClass('bussi_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- construction_01 MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.const_header').addClass('const_menu_fixed animated fadeInDown');
            } else {
                $('.const_header').removeClass('const_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- construction_02 MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.const2_header').addClass('const2_menu_fixed animated fadeInDown');
            } else {
                $('.const2_header').removeClass('const2_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- it_company MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.it_comp_header').addClass('it_comp_menu_fixed animated fadeInDown');
            } else {
                $('.it_comp_header').removeClass('it_comp_menu_fixed animated fadeInDown');
            }
        });

		//----------------------- doctor_01 MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.doc_header').addClass('doc_menu_fixed animated fadeInDown');
            } else {
                $('.doc_header').removeClass('doc_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- kidder MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.kid_header').addClass('kid_menu_fixed animated fadeInDown');
            } else {
                $('.kid_header').removeClass('kid_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- lawyer MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.lawyer_header').addClass('lawyer_menu_fixed animated fadeInDown');
            } else {
                $('.lawyer_header').removeClass('lawyer_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- pc_fixer MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.pcfix_header').addClass('pcfix_menu_fixed animated fadeInDown');
            } else {
                $('.pcfix_header').removeClass('pcfix_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- software MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.soft_header').addClass('soft_menu_fixed animated fadeInDown');
            } else {
                $('.soft_header').removeClass('soft_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- startup MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.start_header').addClass('start_menu_fixed animated fadeInDown');
            } else {
                $('.start_header').removeClass('start_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- taxi MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.taxi_header').addClass('taxi_menu_fixed animated fadeInDown');
            } else {
                $('.taxi_header').removeClass('taxi_menu_fixed animated fadeInDown');
            }
        });

        //----------------------- web_hosting MENU FIXED JS -----------------------//
        $(window).on('scroll', function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 50) {
                $('.web_header').addClass('web_menu_fixed animated fadeInDown');
            } else {
                $('.web_header').removeClass('web_menu_fixed animated fadeInDown');
            }
        });

        //-----Single page scroll js for main menu -----//

        $('.menu_scroll ul li a').on('click', function(e) {
            $('.menu_scroll ul li').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[data-scroll=' + $(this).attr('href') + ']');
            e.preventDefault();
            var targetHeight = target.offset().top - parseInt('94');
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).on('scroll', function() {
            var windscroll = $(window).scrollTop();
            var target = $('.menu_scroll ul li');
            if (windscroll >= 0) {
                $('[data-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 94) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            } else {
                target.removeClass('active');
                $('.menu_scroll ul li:first').addClass('active');
            }

        });

        //--- bussiness scroll js ---//

        $('.bussi_home_banner_scroll a').on('click', function(e) {
            $('.bussi_home_banner_scroll').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[data-scroll=' + $(this).attr('href') + ']');
            e.preventDefault();
            var targetHeight = target.offset().top - parseInt('94');
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).on('scroll', function() {
            var windscroll = $(window).scrollTop();
            var target = $('.bussi_home_banner_scroll');
            if (windscroll >= 0) {
                $('[data-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 94) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            } else {
                target.removeClass('active');
                $('.bussi_home_banner_scroll').addClass('active');
            }

        });

        //--- construction_01 scroll js ---//

        $('.const_home_banner_scroll a').on('click', function(e) {
            $('.const_home_banner_scroll').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[data-scroll=' + $(this).attr('href') + ']');
            e.preventDefault();
            var targetHeight = target.offset().top - parseInt('94');
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).on('scroll', function() {
            var windscroll = $(window).scrollTop();
            var target = $('.const_home_banner_scroll');
            if (windscroll >= 0) {
                $('[data-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 94) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            } else {
                target.removeClass('active');
                $('.const_home_banner_scroll').addClass('active');
            }

        });

        /*--- Responsive Menu Start ----*/

        $("#toggle").on("click", function() {
            var w = $('#sidebar').width();
            var pos = $('#sidebar').offset().left;

            if (pos == 0) {
                $("#sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#toggle_close").on("click", function() {
            var w = $('#sidebar').width();
            var pos = $('#sidebar').offset().left;

            if (pos == 0) {
                $("#sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {
                $('#cssmenu li.active').addClass('open').children('ul').show();
                $('#cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- Responsive Menu End ----*/


        /*--- agency2 Responsive Menu Start ----*/

        $("#agency2_toggle").on("click", function() {
            var w = $('#agency2_sidebar').width();
            var pos = $('#agency2_sidebar').offset().left;

            if (pos == 0) {
                $("#agency2_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#agency2_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#agency2_toggle_close").on("click", function() {
            var w = $('#agency2_sidebar').width();
            var pos = $('#agency2_sidebar').offset().left;

            if (pos == 0) {
                $("#agency2_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#agency2_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#agency2_cssmenu li.active').addClass('open').children('ul').show();
                $('#agency2_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- agency2 Responsive Menu End ----*/

        /*--- beauty Responsive Menu Start ----*/

        $("#beauty_toggle").on("click", function() {
            var w = $('#beauty_sidebar').width();
            var pos = $('#beauty_sidebar').offset().left;

            if (pos == 0) {
                $("#beauty_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#beauty_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#beauty_toggle_close").on("click", function() {
            var w = $('#beauty_sidebar').width();
            var pos = $('#beauty_sidebar').offset().left;

            if (pos == 0) {
                $("#beauty_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#beauty_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#beauty_cssmenu li.active').addClass('open').children('ul').show();
                $('#beauty_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- beauty Responsive Menu End ----*/

        /*--- bussiness Responsive Menu Start ----*/

        $("#bussi_toggle").on("click", function() {
            var w = $('#bussi_sidebar').width();
            var pos = $('#bussi_sidebar').offset().left;

            if (pos == 0) {
                $("#bussi_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#bussi_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#bussi_toggle_close").on("click", function() {
            var w = $('#bussi_sidebar').width();
            var pos = $('#bussi_sidebar').offset().left;

            if (pos == 0) {
                $("#bussi_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#bussi_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#bussi_cssmenu li.active').addClass('open').children('ul').show();
                $('#bussi_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*---  bussiness Responsive Menu End ----*/

        /*--- construction_01 Responsive Menu Start ----*/

        $("#const_toggle").on("click", function() {
            var w = $('#const_sidebar').width();
            var pos = $('#const_sidebar').offset().left;

            if (pos == 0) {
                $("#const_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#const_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#const_toggle_close").on("click", function() {
            var w = $('#const_sidebar').width();
            var pos = $('#const_sidebar').offset().left;

            if (pos == 0) {
                $("#const_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#const_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#const_cssmenur li.active').addClass('open').children('ul').show();
                $('#const_cssmenur li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- construction_01 Responsive Menu End ----*/


        /*--- construction_02 Responsive Menu Start ----*/

        $("#const2_toggle").on("click", function() {
            var w = $('#const2_sidebar').width();
            var pos = $('#const2_sidebar').offset().left;

            if (pos == 0) {
                $("#const2_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#const2_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#const2_toggle_close").on("click", function() {
            var w = $('#const2_sidebar').width();
            var pos = $('#const2_sidebar').offset().left;

            if (pos == 0) {
                $("#const2_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#const2_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#const2_cssmenu li.active').addClass('open').children('ul').show();
                $('#const2_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- construction_02 Responsive Menu End ----*/

		/*--- doctor_01 Responsive Menu Start ----*/

        $("#doc_toggle").on("click", function() {
            var w = $('#doc_sidebar').width();
            var pos = $('#doc_sidebar').offset().left;

            if (pos == 0) {
                $("#doc_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#doc_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#doc_toggle_close").on("click", function() {
            var w = $('#doc_sidebar').width();
            var pos = $('#doc_sidebar').offset().left;

            if (pos == 0) {
                $("#doc_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#doc_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            jQuery(window).on('load', function() {

                $('#doc_cssmenu li.active').addClass('open').children('ul').show();
                $('#doc_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- doctor_01 Responsive Menu End ----*/

        /*--- it_company Responsive Menu Start ----*/

        $("#it_comp_toggle").on("click", function() {
            var w = $('#it_comp_sidebar').width();
            var pos = $('#it_comp_sidebar').offset().left;

            if (pos == 0) {
                $("#it_comp_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#it_comp_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#it_comp_toggle_close").on("click", function() {
            var w = $('#it_comp_sidebar').width();
            var pos = $('#it_comp_sidebar').offset().left;

            if (pos == 0) {
                $("#it_comp_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#it_comp_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#it_comp_cssmenu li.active').addClass('open').children('ul').show();
                $('#it_comp_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- it_company Responsive Menu End ----*/

        /*--- kidder Responsive Menu Start ----*/

        $("#kid_toggle").on("click", function() {
            var w = $('#kid_sidebar').width();
            var pos = $('#kid_sidebar').offset().left;

            if (pos == 0) {
                $("#kid_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#kid_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#kid_toggle_close").on("click", function() {
            var w = $('#kid_sidebar').width();
            var pos = $('#kid_sidebar').offset().left;

            if (pos == 0) {
                $("#kid_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#kid_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#kid_cssmenu li.active').addClass('open').children('ul').show();
                $('#kid_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- kidder Responsive Menu End ----*/

        /*--- lawyer Responsive Menu Start ----*/

        $("#lawyer_toggle").on("click", function() {
            var w = $('#lawyer_sidebar').width();
            var pos = $('#lawyer_sidebar').offset().left;

            if (pos == 0) {
                $("#lawyer_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#lawyer_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#lawyer_toggle_close").on("click", function() {
            var w = $('#lawyer_sidebar').width();
            var pos = $('#lawyer_sidebar').offset().left;

            if (pos == 0) {
                $("#lawyer_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#lawyer_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#lawyer_cssmenu li.active').addClass('open').children('ul').show();
                $('#lawyer_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- lawyer Responsive Menu End ----*/

        /*--- pc_fixer Responsive Menu Start ----*/

        $("#pcfix_toggle").on("click", function() {
            var w = $('#pcfix_sidebar').width();
            var pos = $('#pcfix_sidebar').offset().left;

            if (pos == 0) {
                $("#pcfix_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#pcfix_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#pcfix_toggle_close").on("click", function() {
            var w = $('#pcfix_sidebar').width();
            var pos = $('#pcfix_sidebar').offset().left;

            if (pos == 0) {
                $("#pcfix_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#pcfix_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
			$(window).on('load', function() {

                $('#pcfix_cssmenu li.active').addClass('open').children('ul').show();
                $('#pcfix_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- pc_fixer Responsive Menu End ----*/

        /*--- software Responsive Menu Start ----*/

        $("#soft_toggle").on("click", function() {
            var w = $('#soft_sidebar').width();
            var pos = $('#soft_sidebar').offset().left;

            if (pos == 0) {
                $("#soft_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#soft_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#soft_toggle_close").on("click", function() {
            var w = $('#soft_sidebar').width();
            var pos = $('#soft_sidebar').offset().left;

            if (pos == 0) {
                $("#soft_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#soft_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#soft_cssmenu li.active').addClass('open').children('ul').show();
                $('#soft_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- software Responsive Menu End ----*/

        /*--- startup Responsive Menu Start ----*/

        $("#start_toggle").on("click", function() {
            var w = $('#start_sidebar').width();
            var pos = $('#start_sidebar').offset().left;

            if (pos == 0) {
                $("#start_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#start_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#start_toggle_close").on("click", function() {
            var w = $('#start_sidebar').width();
            var pos = $('#start_sidebar').offset().left;

            if (pos == 0) {
                $("#start_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#start_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#start_cssmenu li.active').addClass('open').children('ul').show();
                $('#start_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- startup Responsive Menu End ----*/


        /*--- taxi Responsive Menu Start ----*/

        $("#taxi_toggle").on("click", function() {
            var w = $('#taxi_sidebar').width();
            var pos = $('#taxi_sidebar').offset().left;

            if (pos == 0) {
                $("#taxi_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#taxi_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#taxi_toggle_close").on("click", function() {
            var w = $('#taxi_sidebar').width();
            var pos = $('#taxi_sidebar').offset().left;

            if (pos == 0) {
                $("#taxi_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#taxi_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {
                $('#taxi_cssmenu li.active').addClass('open').children('ul').show();
                $('#taxi_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- taxi Responsive Menu End ----*/


        /*--- web_hosting Responsive Menu Start ----*/

        $("#web_toggle").on("click", function() {
            var w = $('#web_sidebar').width();
            var pos = $('#web_sidebar').offset().left;

            if (pos == 0) {
                $("#web_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#web_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });

        $("#web_toggle_close").on("click", function() {
            var w = $('#web_sidebar').width();
            var pos = $('#web_sidebar').offset().left;

            if (pos == 0) {
                $("#web_sidebar").animate({
                    "left": -500
                }, "slow");
            } else {
                $("#web_sidebar").animate({
                    "left": "0"
                }, "slow");
            }

        });


        (function($) {
            $(window).on('load', function() {

                $('#web_cssmenu li.active').addClass('open').children('ul').show();
                $('#web_cssmenu li.has-sub>a').on('click', function() {
                    $(this).removeAttr('href');
                    var element = $(this).parent('li');
                    if (element.hasClass('open')) {
                        element.removeClass('open');
                        element.find('li').removeClass('open');
                        element.find('ul').slideUp(200);
                    } else {
                        element.addClass('open');
                        element.children('ul').slideDown(200);
                        element.siblings('li').children('ul').slideUp(200);
                        element.siblings('li').removeClass('open');
                        element.siblings('li').find('li').removeClass('open');
                        element.siblings('li').find('ul').slideUp(200);
                    }
                });

            });
        })(jQuery);

        /*--- web_hosting Responsive Menu End ----*/

        //----- Main Slider Animation  -------//

        (function($) {

            //Function to animate slider captions 
            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic'),
                $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");

            //Initialize carousel 
            $myCarousel.carousel();

            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Pause carousel  
            $myCarousel.carousel('pause');


            //Other slides to be animated on carousel slide event 
            $myCarousel.on('click slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });


        })(jQuery);

        //-----------Search box jquery------------//

        $(".searchd").on("click", function() {
            $(".searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".searchbox").removeClass("open", 1000);
        });

        //-----------agency_02 Search box jquery------------//

        $(".agency2_searchd").on("click", function() {
            $(".agency2_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".agency2_searchbox").removeClass("open", 1000);
        });

        //-----------beauty Search box jquery------------//

        $(".beauty_searchd").on("click", function() {
            $(".beauty_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".beauty_searchbox").removeClass("open", 1000);
        });

        //-----------business Search box jquery------------//

        $(".bussi_searchd").on("click", function() {
            $(".bussi_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".bussi_searchbox").removeClass("open", 1000);
        });


        //-----------construction_01 Search box jquery------------//

        $(".const_searchd").on("click", function() {
            $(".const_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".const_searchbox").removeClass("open", 1000);
        });


        //-----------construction_02 Search box jquery------------//

        $(".const2_searchd").on("click", function() {
            $(".const2_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".const2_searchbox").removeClass("open", 1000);
        });

        //-----------it_company Search box jquery------------//

        $(".it_comp_searchd").on("click", function() {
            $(".it_comp_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".it_comp_searchbox").removeClass("open", 1000);
        });

        //-----------kidder Search box jquery------------//

        $(".kid_searchd").on("click", function() {
            $(".kid_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".kid_searchbox").removeClass("open", 1000);
        });

        //-----------lawyer Search box jquery------------//

        $(".lawyer_searchd").on("click", function() {
            $(".lawyer_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".lawyer_searchbox").removeClass("open", 1000);
        });

        //-----------pc_fixer Search box jquery------------//

        $(".pcfix_searchd").on("click", function() {
            $(".pcfix_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".pcfix_searchbox").removeClass("open", 1000);
        });

        //-----------software Search box jquery------------//

        $(".soft_searchd").on("click", function() {
            $(".soft_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".soft_searchbox").removeClass("open", 1000);
        });

        //-----------startup Search box jquery------------//

        $(".start_searchd").on("click", function() {
            $(".start_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".start_searchbox").removeClass("open", 1000);
        });

        //-----------taxi Search box jquery------------//

        $(".taxi_searchd").on("click", function() {
            $(".taxi_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".taxi_searchbox").removeClass("open", 1000);
        });


        //-----------web_hosting Search box jquery------------//

        $(".web_searchd").on("click", function() {
            $(".web_searchbox").addClass("open", 1000);
        });

        $(".close").on("click", function() {
            $(".web_searchbox").removeClass("open", 1000);
        });

        //*-----testimonial_slider_wrapper js ------*//

        $('.testimonial_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 20
                }
            }
        });

            $('.beauty_pn_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
       

        /***----- massage slider js ----*****/
		
            $('.beauty_massage_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                smartSpeed: 1200,
                responsiveClass: true,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrow-pointing-to-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 30
                    }
                }
            })
			
        /*bussi_testimonial_slider_wrapper js */

        $('.bussi_testimonial_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 20
                }
            }
        });

        /*const_testimonial_slider_wrapper js */

        $('.const_testimonial_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: false,
            responsiveClass: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 20
                }
            }
        });

        /*doc_testimonial_slider_wrapper js */

        $('.doc_testimonial_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true,
                    margin: 20
                }
            }
        });


            $('.kid_pn_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })


        //*********** vertical slider ***********//	 	
        $(".kid_album_slider").bxSlider({
            minSlides: 1,
            maxSlides: 10,
            slideWidth: 350,
            ticker: true,
            tickerHover: true,
            speed: 20000,
            useCSS: false,
            pager: false,
            infiniteLoop: false

        });


        //*-----------------------owl caouresel Team---------------------------*//	
            $('.kid_testimonial_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })


            $('.lawyer_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 1,
                        nav: true
                    },
                    700: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })

        //*-------- partner wrapper js --------**/
            $('.lawyer_pn_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })

        //*-------- partner wrapper js --------**/
            $('.pcfix_pn_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })



        /***----- testimonial slider js ----*****/
            $('.start_review_testimonial_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                smartSpeed: 1200,
                responsiveClass: true,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-arrow-pointing-to-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 2,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })

            $('.web_pn_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
  


        //*********** vertical slider ***********//	 	
        $(".web_album_slider").bxSlider({
            minSlides: 1,
            maxSlides: 10,
            slideWidth: 350,
            ticker: true,
            tickerHover: true,
            speed: 20000,
            useCSS: false,
            pager: false,
            infiniteLoop: false

        });


        //*-----------------------owl caouresel Team---------------------------*//	
            $('.web_testimonial_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })


        //-------- counter-section ------------//
        $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).off('inview');
            }
        });

        //-------- agency2_counter_section ------------//
        $('.agency2_counter_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).off('inview');
            }
        });

        //-------------------------------------------------------
        // bussi_counter_section
        //-------------------------------------------------------

        $('.bussi_counter_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.bussi_timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

        //-------------------------------------------------------
        // const_counter_section
        //-------------------------------------------------------

        $('.const_counter_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

        //Video Play
        $('.bussi_play_trigger').magnificPopup({
            type: 'iframe'
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });

        //Video Play
        $('.const_play_trigger').magnificPopup({
            type: 'iframe'
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });

        $('.kid_zoom_popup').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });

        $('.web_zoom_popup').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });

        // ===== Scroll to Top ==== //
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
        $('#return-to-top').on('click', function(e) {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });


    });

})(jQuery);
/*=============== End Custom Functions  ================*/