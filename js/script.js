var THEMEMASCOT = {};
(function ($) {

    "use strict";
    THEMEMASCOT.isRTL = {
        check: function () {
            if ($("html").attr("dir") === "rtl") {
                return true;
            } else {
                return false;
            }
        }
    };

    THEMEMASCOT.isLTR = {
        check: function () {
            if ($("html").attr("dir") !== "rtl") {
                return true;
            } else {
                return false;
            }
        }
    };

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- En Demo Switcher  ---------------------- */
    /* ---------------------------------------------------------------------- */

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.header-style-one');
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('.main-header .sticky-header');
            if (windowpos > 100) {
                sticky_header.addClass("fixed-header animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                sticky_header.removeClass("fixed-header animated slideInDown");
                scrollLink.fadeOut(300);
            }
            if (windowpos > 1) {
                siteHeader.addClass("fixed-header");
            } else {
                siteHeader.removeClass("fixed-header");
            }
        }
    }

    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
        //Megamenu Toggle
    }

    //Hidder bar
    if ($('.hidden-bar').length) {
        //Menu Toggle Btn
        $('.toggle-hidden-bar').on('click', function () {
            $('body').addClass('active-hidden-bar');
        });

        //Menu Toggle Btn
        $('.hidden-bar-back-drop, .hidden-bar .close-btn').on('click', function () {
            $('body').removeClass('active-hidden-bar');
        });
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-header .main-menu .navigation').html();

        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });

        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
            $(this).toggleClass('active');
            $(this).prev('.mega-menu').slideToggle(500);
        });

        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });

    }

    //Header Search
    if ($('.search-btn').length) {
        $('.search-btn').on('click', function () {
            $('.main-header').addClass('moblie-search-active');
        });
        $('.close-search, .search-back-drop').on('click', function () {
            $('.main-header').removeClass('moblie-search-active');
        });
    }


    // Start Process area after effect
    $(window).on("load", function () {
        const $timeline = $('#timeline');
        const $steps = $('.step');
        if ($timeline.length === 0 || $steps.length === 0) return;
        let stepPositions = {};

        // Calculate step positions
        function calculatePositions() {
            const timelineTop = $timeline.offset().top;
            $steps.each(function () {
                const key = $(this).data('step');
                const pos = $(this).offset().top - timelineTop;
                stepPositions[key] = pos;
            });
        }

        // Initial calculation
        calculatePositions();
        // Recalculate on resize (allowed)
        $(window).on("resize", function () {
            calculatePositions();
        });
        // Hover equivalent (mouseenter) — using .on()
        $(document).on("mouseenter", ".step", function () {
            const key = $(this).data("step");
            $timeline.css("--indicator-top", stepPositions[key] + "px");
        });
        // Click event — using .on() (ThemeForest allowed)
        $(document).on("click", ".step", function () {
            const key = $(this).data("step");
            $timeline.css("--indicator-top", stepPositions[key] + "px");
        });
        // Reset on mouseleave — using .on()
        $(document).on("mouseleave", "#timeline", function () {
            $timeline.css("--indicator-top", "0px");
        });
    });
    // End Process area after effect


    if ($('.step-block_one').length) {
        $(function () {
            const $stepBlocks = $('.step-block_one');
            let $lastActiveBlock = $stepBlocks.eq(1); // Start with 2nd div active

            // Initialize - set middle block active
            $stepBlocks.removeClass('active');
            $lastActiveBlock.addClass('active');

            // Only enable hover for screens ≥ 768px
            if ($(window).width() >= 768) {
                $stepBlocks.hover(
                    function () { // mouseenter
                        $stepBlocks.removeClass('active');
                        $(this).addClass('active');
                        $lastActiveBlock = $(this);
                    },
                    function () { // mouseleave
                        $stepBlocks.removeClass('active');
                        $lastActiveBlock.addClass('active');
                    }
                );
            }
        });
    }

    if ($('.client-block_one').length) {
        $(function () {
            const $stepBlocks = $('.client-block_one');
            let $lastActiveBlock = $stepBlocks.eq(0); // Start with 2nd div active

            // Initialize - set middle block active
            $stepBlocks.removeClass('active');
            $lastActiveBlock.addClass('active');

            // Hover handling
            $stepBlocks.hover(
                function () { // mouseenter
                    $stepBlocks.removeClass('active');
                    $(this).addClass('active');
                    $lastActiveBlock = $(this);
                },
                function () { // mouseleave
                    $stepBlocks.removeClass('active');
                    $lastActiveBlock.addClass('active');
                }
            );
        });
    }

    // Home Layout 2 Award Block Script
    $(function () {
        const items = $(".award-block_two .award-block_two-inner");

        // Make sure one is always active (first one by default)
        if (!items.hasClass("active")) {
            items.first().addClass("active");
        }

        items.on("mouseenter", function () {
            items.removeClass("active"); // remove active from all
            $(this).addClass("active");  // add active to hovered one
        });
    });


    // Banner Swiper
    if ($('.banner-swiper').length) {
        var swiper = new Swiper(".banner-swiper", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }


    // Banner Swiper Two
    if ($('.banner-swiper-two').length) {
        var swiper = new Swiper(".banner-swiper-two", {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }


    // News Swiper
    if ($('.news-swiper').length) {
        var swiper = new Swiper(".news-swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                970: {
                    slidesPerView: 3,
                },
                650: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }


    // Testi Swiper Two
    if ($('.testi-swiper').length) {
        var swiper = new Swiper(".testi-swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                '1600': {
                    slidesPerView: 3,
                },
                '1200': {
                    slidesPerView: 3,
                },
                '992': {
                    slidesPerView: 2,
                },
                '768': {
                    slidesPerView: 2,
                },
                '576': {
                    slidesPerView: 1,
                },
                '0': {
                    slidesPerView: 1,
                },
            },
        });
    }


    if ($('.project-swiper').length) {
        var swiper = new Swiper(".project-swiper", {
            grabCursor: true,
            loop: true,
            spaceBetween: 10,
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 20,       // Less extreme tilt for cleaner look
                stretch: 0,       // No stretch, consistent size
                depth: 10,       // Good depth for 3D feel
                modifier: 1.5,    // Stronger perspective effect
                slideShadows: true
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                1600: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 2,
                },
                580: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }


    // Project Swiper Two
    if ($('.project-swiper-two').length) {
        var swiper = new Swiper(".project-swiper-two", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                970: {
                    slidesPerView: 3,
                },
                600: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }


    //product bxslider
    if ($('.product-details .bxslider').length) {
        $('.product-details .bxslider').bxSlider({
            nextSelector: '.product-details #slider-next',
            prevSelector: '.product-details #slider-prev',
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            mode: 'fade',
            auto: 'true',
            speed: '700',
            pagerCustom: '.product-details .slider-pager .thumb-box'
        });
    }
    ;

    //MixItup Gallery
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }

    //Jquery Knob animation  // Pie Chart Animation
    if ($('.dial').length) {
        $('.dial').appear(function () {
            var elm = $(this);
            var color = elm.attr('data-fgColor');
            var perc = elm.attr('value');

            elm.knob({
                'value': 0,
                'min': 0,
                'max': 100,
                'skin': 'tron',
                'readOnly': true,
                'thickness': 0.15,
                'dynamicDraw': true,
                'displayInput': false
            });
            $({value: 0}).animate({value: perc}, {
                duration: 2000,
                easing: 'swing',
                progress: function () {
                    elm.val(Math.ceil(this.value)).trigger('change');
                }
            });
            //circular progress bar color
            $(this).append(function () {
                // elm.parent().parent().find('.circular-bar-content').css('color',color);
                //elm.parent().parent().find('.circular-bar-content .txt').text(perc);
            });

        }, {accY: 20});
    }


    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active ');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }

    //Accordion Box
    if ($('.accordion-box_two').length) {
        $(".accordion-box_two").on('click', '.acc-btn', function () {
            var outerBox = $(this).parents('.accordion-box_two');
            var target = $(this).parents('.accordion');
            var content = $(this).next('.acc-content');

            // If this accordion is already active
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                target.removeClass('active-block');
                content.slideUp(300);
                return false;
            }

            // Close all other accordions
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
            $(outerBox).find('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);

            // Open this one
            $(this).addClass('active');
            target.addClass('active-block');
            content.slideDown(300);
        });
    }

    $(function () {
        // Initialize first accordion as active
        $('.accordion-dstudio').first().addClass('active');

        // Accordion toggle functionality
        $('.ac-header').on('click', function () {
            const $accordion = $(this).closest('.accordion-dstudio');
            const $toggle = $(this).find('.toggle-btn');
            const $plusIcon = $toggle.find('.plus-icon');
            const $minusIcon = $toggle.find('.minus-icon');

            // Close all other accordions
            $('.accordion-dstudio').not($accordion).removeClass('active');
            $('.accordion-dstudio').not($accordion).find('.plus-icon').show();
            $('.accordion-dstudio').not($accordion).find('.minus-icon').hide();

            // Toggle current accordion
            $accordion.toggleClass('active');

            if ($accordion.hasClass('active')) {
                $plusIcon.hide();
                $minusIcon.show();
            } else {
                $plusIcon.show();
                $minusIcon.hide();
            }
        });
    });

    if ($('.accordion-box_three').length) {
        $(".accordion-box_three").on('click', '.acc-btn', function () {
            var outerBox = $(this).parents('.accordion-box_three');
            var target = $(this).parents('.accordion');
            var isActive = $(this).hasClass('active');
            var index = target.index();

            if (isActive) {
                // Collapse if active
                $(this).removeClass('active');
                target.removeClass('active-block');
                target.children('.acc-content, .accordion-content').slideUp(300);
            } else {
                // Close others
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content, .accordion-content').slideUp(300);

                // Open current
                $(this).addClass('active');
                target.addClass('active-block');
                target.children('.acc-content, .accordion-content').slideDown(300);
            }

            // Show corresponding image
            var $imageWrapper = $('.images-outer .image');
            $imageWrapper.hide().eq(index).show();
        });
    }

    if ($('.accordion-box_four').length) {
        // Initialize - show first accordion and first image by default
        $('.accordion-box_four .accordion').first().addClass('active-block');
        $('.accordion-box_four .accordion .acc-btn').first().addClass('active');
        $('.accordion-box_four .accordion .acc-content').first().slideDown(300);
        $('.images-outer .image').hide().first().show();

        $(".accordion-box_four").on('click', '.acc-btn', function () {
            var outerBox = $(this).parents('.accordion-box_four');
            var target = $(this).parents('.accordion');
            var isActive = $(this).hasClass('active');
            var index = target.index();

            if (isActive) {
                // Collapse if active
                $(this).removeClass('active');
                target.removeClass('active-block');
                target.children('.acc-content, .accordion-content').slideUp(300);
            } else {
                // Close others
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content, .accordion-content').slideUp(300);

                // Open current
                $(this).addClass('active');
                target.addClass('active-block');
                target.children('.acc-content, .accordion-content').slideDown(300);
            }

            // Show corresponding image
            var $imageWrapper = $('.images-outer .image');
            $imageWrapper.hide().eq(index).show();
        });
    }

    // Accordion Box Five
    if ($('.accordion-box_five').length) {
        $(".accordion-box_five").on('click', '.acc-btn', function () {
            var outerBox = $(this).parents('.accordion-box_five');
            var target = $(this).parents('.accordion');
            var isActive = $(this).hasClass('active');
            if (isActive) {
                // If clicked accordion is already active, collapse it
                $(this).removeClass('active');
                target.removeClass('active-block');
                target.children('.acc-content, .accordion-content').slideUp(300);
            } else {
                // Otherwise, open it and close others
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content, .accordion-content').slideUp(300);

                $(this).addClass('active');
                target.addClass('active-block');
                target.children('.acc-content, .accordion-content').slideDown(300);
            }
        });
    }


    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function () {
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }
        }, {accY: 0});
    }

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                $(target).fadeIn(300);
                $(target).addClass('active-tab animated fadeIn');
            }
        });
    }

    //product bxslider
    if ($('.product-details .bxslider').length) {
        $('.product-details .bxslider').bxSlider({
            nextSelector: '.product-details #slider-next',
            prevSelector: '.product-details #slider-prev',
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            mode: 'fade',
            auto: 'true',
            speed: '700',
            pagerCustom: '.product-details .slider-pager .thumb-box'
        });
    }
    ;

    //Quantity box
    $(".quantity-box .add").on("click", function () {
        if ($(this).prev().val() < 999) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);
        }
    });
    $(".quantity-box .sub").on("click", function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1)
                $(this)
                    .next()
                    .val(+$(this).next().val() - 1);
        }
    });

    //Price Range Slider
    if ($('.price-range-slider').length) {
        $(".price-range-slider").slider({
            range: true,
            min: 10,
            max: 99,
            values: [10, 60],
            slide: function (event, ui) {
                $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider").slider("values", 1));
    }

    // count Bar
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            }, {
                accY: -50
            }
        );
    }

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                $(target).fadeIn(300);
                $(target).addClass('active-tab animated fadeIn');
            }
        });
    }


    //Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {accY: 0});
    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 0);

        });
    }

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: false,       // trigger animations on mobile devices (default is true)
                live: true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }


    //Image Reveal Animation
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {autoAlpha: 1});
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });
    }


    // Text Invert
    // function initTextReveal() {
    // 	const tagetedElementContainer =
    // 		document.querySelectorAll(".text-reveal-anim");
    // 	if (tagetedElementContainer?.length) {
    // 		tagetedElementContainer.forEach(e => {
    // 			var t = new SplitType(e, {
    // 				types: "chars",
    // 			});
    // 			gsap.from(t.chars, {
    // 				scrollTrigger: {
    // 					trigger: e,
    // 					start: "top 75%",
    // 					end: "top 25%",
    // 					scrub: !0,
    // 					duration: 0.5
    // 				},
    // 				opacity: 0.1,
    // 				stagger: 5,
    // 				ease: "back.out",
    // 			});
    // 		});
    // 	}
    // }
    // initTextReveal();


    $(function () {
        const st = $(".tx-split-text");
        if (!st.length) return;

        gsap.registerPlugin(SplitText);

        st.each(function () {
            const el = this;
            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            gsap.set(el, {perspective: 400});

            // Define animation presets
            const animations = {
                "split-in-fade": {opacity: 0, ease: "back.out"},
                "split-in-right": {opacity: 0, x: 50, ease: "back.out"},
                "split-in-left": {opacity: 0, x: -50, ease: "circ.out"},
                "split-in-up": {opacity: 0, y: 80, ease: "circ.out"},
                "split-in-down": {opacity: 0, y: -80, ease: "circ.out"},
                "split-in-rotate": {opacity: 0, rotateX: 50, ease: "circ.out"},
                "split-in-scale": {opacity: 0, scale: 0.5, ease: "circ.out"},
            };

            // Apply initial state based on class
            for (const [cls, props] of Object.entries(animations)) {
                if ($(el).hasClass(cls)) {
                    gsap.set(el.split.chars, props);
                }
            }

            // Animate when in view
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                },
                x: 0,
                y: 0,
                rotateX: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.02,
            });
        });
    });


    /* ---------------------------------------------------------------------- */
    /* ----------- Activate Menu Item on Reaching Different Sections ---------- */
    /* ---------------------------------------------------------------------- */
    var $onepage_nav = $('.onepage-nav');
    var $sections = $('section');
    var $window = $(window);

    function TM_activateMenuItemOnReach() {
        if ($onepage_nav.length > 0) {
            var cur_pos = $window.scrollTop() + 2;
            var nav_height = $onepage_nav.outerHeight();
            $sections.each(function () {
                var top = $(this).offset().top - nav_height - 80,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
                    $sections.removeClass('current').removeClass('active');
                    $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
                }

                if (cur_pos <= nav_height && cur_pos >= 0) {
                    $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
                    $onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');
                }
            });
        }
    }

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
        TM_activateMenuItemOnReach();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();
    });

})(window.jQuery);


