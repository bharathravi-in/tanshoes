	/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
		C A L L B A C K
	 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

	$(document).ready(function(){
	
		/* Custom Select Menu */
		$('#m-select-active').css('cursor','pointer');
		$('#m-select-active').click(function() {
			if($('.sf-menu-mobile').css('display') == 'block') {
				$('.sf-menu-mobile').slideUp(); 
			}else {
				$('.sf-menu-mobile').slideDown();
			}
		});
		$('.sf-menu-mobile a').click(function(e) {
			$('#m-select-active').html($(this).html()); 
			$('.sf-menu-mobile').slideUp(); 
		});
		$("ul.sf-menu").superfish(); 
		/*--------------------------------*/
		
		/* TOGGLE BUTTON  */
		$(".top_toggle_button").click(function(){
			$("#top_toggle").slideToggle("slow");
			$(this).toggleClass("active"); return false;
		});
	
		/* TOGGLE Sticky  */
		$("#trigger").toggle(function(){
			$(this).addClass("active");
			}, function () {
			$(this).removeClass("active");
		});
		$("#trigger").click(function(){
			$(this).next("#sticky").slideToggle({ duration: 1000, easing: 'easeOutQuart'});
		});
		
	    $('.lightbox, .gallery a').lightbox();
		
		hoverimage();
		menushoverimage();
		sys_toggle();
		buttondata();
		atp_sociables();
		$("ul.tabs").tabs(".panes > .tab_content", {tabs:'li',effect: 'fade', fadeOutSpeed: -400});
	
		// scroll body to 0px on click
		jQuery('#back_to_top a').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		//Twitter Tweets
		 twitter('envato',3);

	});
	
	
	/*######################################
		S O C I A B L E S
	########################################*/

	function atp_sociables() {
		jQuery(".atpsocials ul li").hover(function(){
			jQuery(this).find("img").animate({top:"-5px"}, "fast")
			},function(){
			jQuery(this).find("img").animate({top:"0"}, "fast")
		});	
	}
		
	/*######################################
		T O G G L E S 
	########################################*/

	function sys_toggle() {
		jQuery(".toggle_content").append("<div class='arrow'></div>").hide();
	
		jQuery("span.toggle").toggle(function(){	
			jQuery(this).addClass("active");	
		}, function () {	
			jQuery(this).removeClass("active");
		});
	
		jQuery("span.toggle").click(function(){
			jQuery(this).next(".toggle_content").slideToggle();
		});	
	}		

	/*#######################################
		M E N U S   H O V E R   I M A G E
	#########################################*/

	function menushoverimage() {
		jQuery("a[class^='lightbox']").each(function() {	
			var $image = jQuery(this).contents("img");
					$hoverclass = 'hover_video';
		
			if(jQuery(this).attr('href').match(/(jpg|gif|jpeg|png|tif)/)) 
			$hoverclass = 'hover_image';
				
			if ($image.length > 0)
			{	
				var $hoverbg = jQuery("<span class='"+$hoverclass+"'></span>").appendTo(jQuery(this));
				
					jQuery(this).bind('mouseenter', function(){
					$height = $image.height();
					$width = $image.width();
					$pos =  $image.position();		
					$hoverbg.css({height:$height, width:$width, top:$pos.top, left:$pos.left});
				});
			}
		
		});	
	
		jQuery("a[class^='lightbox']").contents("img").hover(function() {
				jQuery(this).stop().animate({"opacity": "0.2"}, 200);
				},function() {
				jQuery(this).stop().animate({"opacity": "1"},200);
		});
	}
	
	/*######################################
		IMAGE HOVER
	########################################*/
	function hoverimage() {
		jQuery('.hover_type').animate({opacity: "0"});
		
		jQuery(".carousel_img, .postimg, .port_img, .sort_img").hover(function() {
			jQuery(this).find('.hover_type').css('display','block').animate({opacity: "1"}, "slow");
			jQuery(this).stop().animate({"opacity": "0.9"}, 200);
		},function() {
				jQuery(this).find('.hover_type').animate({opacity: "0"}, "slow");
			jQuery(this).stop().animate({"opacity": "1"}, 200);
		});
	}


	/*#####################################
		BUTTON DATA ATTRIBUTES
	#######################################*/
	function buttondata(){
		jQuery(".button").hover(function(){
			var $hoverBg = jQuery(this).attr('btn-hoverBg');
			var $hoverColor = jQuery(this).attr('btn-hoverColor');
			if($hoverBg!=undefined){
				jQuery(this).css('background-color',$hoverBg);
			}else{
			}
			if($hoverColor!=undefined){
				jQuery('span',this).css('color',$hoverColor);
			}else{}
		},function(){
			var $btnbg = jQuery(this).attr('btn-bg');
			var $btncolor = jQuery(this).attr('btn-color');
			if($btnbg!=undefined){
				jQuery(this).css('background-color',$btnbg);
			}
			if($btncolor!=undefined){
				jQuery('span',this).css('color',$btncolor);
			}
		});
	}
	
	/*#####################################
		TWITTER
	#######################################*/
	function twitter(username,number) {
		if(username != '') {
		var html = '<div>';
		var tweetFeed = 'http://api.twitter.com/1/statuses/user_timeline/' + username + '.json?count=' + number + '&callback=?'
		$.getJSON(tweetFeed, function(d){
			$.each(d, function(i,item){
				html+='<p class="tweet">'+item.text+'</p>';
			})
			html+="</div>";
			$('.tweets').html(html);
		})
		}
	}
	