var fontS = 18;
function toggleMenu() {
    document.getElementById("disability-side-menu").classList.toggle("show");
}
$(".greyScale").click(function(){
	if($(".greyScale").hasClass('active')){
		$(".greyScale").removeClass('active');
		$("html").css("-moz-filter","");
		$("html").css("-webkit-filter","");
		$("html").css("filter","");
		$("html").css("filter","");
		setCookie("greyScale","no",1);
	}
	else{
		$(".greyScale").addClass('active');
		$("html").css("-moz-filter","grayscale(100%)");
		$("html").css("-webkit-filter","grayscale(100%)");
		$("html").css("filter","gray");
		$("html").css("filter","grayscale(100%)");
		setCookie("greyScale","yes",1);
	}

});
$(".highContrast").click(function(){
	if($(".highContrast").hasClass('active')){
		$(".highContrast").removeClass('active');
		$("body").removeClass('high-contrast');
		setCookie("highContrast","no",1);
	}
	else{
		$(".highContrast").addClass('active');
		$("body").addClass('high-contrast');
		setCookie("highContrast","yes",1);
	}

});
$(".blackYellow").click(function(){
	if($(".blackYellow").hasClass('active')){
		$(".blackYellow").removeClass('active');
		$("body").removeClass('black-yellow');
		setCookie("blackYellow","no",1);
	}
	else{
		$(".blackYellow").addClass('active');
		$("body").addClass('black-yellow');
		setCookie("blackYellow","yes",1);
	}

});
$(".highlightLink").click(function(){
	if($(".highlightLink").hasClass('active')){
		$(".highlightLink").removeClass('active');
		$("body").removeClass('highlight-link');
		setCookie("highlightLink","no",1);
	}
	else{
		$(".highlightLink").addClass('active');
		$("body").addClass('highlight-link');
		setCookie("highlightLink","yes",1);
	}

});
$(".keyboardNavigation").click(function(){
	if($(".keyboardNavigation").hasClass('active')){
		$(".keyboardNavigation").removeClass('active');
		$("body").removeClass('keyboard-navigation');
		setCookie("keyboardNavigation","no",1);
	}
	else{
		$(".keyboardNavigation").addClass('active');
		$("body").addClass('keyboard-navigation');
		setCookie("keyboardNavigation","yes",1);
	}
});

$(".readableFont").click(function(){
	if($(".readableFont").hasClass('active')){
		$(".readableFont").removeClass('active');
		$("body").removeClass('readable-font');
		setCookie("readableFont","no",1);
	}
	else{
		$(".readableFont").addClass('active');
		$("body").addClass('readable-font');
		setCookie("readableFont","yes",1);
	}
});
$(".increaseFont").click(function(){
	$(".increaseFont").addClass('active');
	$("body").removeClass('font-'+fontS);
	if(fontS<24){
		fontS +=2;
	}
	$("body").addClass('font-'+fontS);
	setCookie("increaseFont","yes",1);
	setCookie("fontSize",fontS,1);
});
$(".decreaseFont").click(function(){
	if(fontS>18){
		$("body").removeClass('font-'+fontS);
		fontS -=2;
		if(fontS==18){
			setCookie("increaseFont","no",1);
			$(".increaseFont").removeClass('active');
		}else{
			$("body").addClass('font-'+fontS);
			setCookie("fontSize",fontS,1);
		}
	}else{
		$(".increaseFont").removeClass('active');
		setCookie("increaseFont","no",1);
		$("body").removeClass('font-'+fontS);
	}
	
});

var inFont = getCookie("increaseFont");
if(inFont=="yes"){
	var inFo = getCookie("fontSize");
	fontS  = parseInt(inFo);
	$("body").addClass('font-'+fontS);
	$(".increaseFont").addClass('active');
}
var grey = getCookie("greyScale");
if(grey=="yes"){
	$(".greyScale").addClass('active');
		$("html").css("-moz-filter","grayscale(100%)");
		$("html").css("-webkit-filter","grayscale(100%)");
		$("html").css("filter","gray");
		$("html").css("filter","grayscale(100%)");
}
var contrast = getCookie("highContrast");
if(contrast=="yes"){
	$(".highContrast").addClass('active');
	$("body").addClass('high-contrast');
}
var blackYel = getCookie("blackYellow");
if(blackYel=="yes"){
	$(".blackYellow").addClass('active');
	$("body").addClass('black-yellow');
}
var highlightLi = getCookie("highlightLink");
if(highlightLi=="yes"){
	$(".highlightLink").addClass('active');
	$("body").addClass('highlight-link');
}
var keyboardNavigat = getCookie("keyboardNavigation");
if(keyboardNavigat=="yes"){
	$(".keyboardNavigation").addClass('active');
	$("body").addClass('keyboard-navigation');
}
var readableFo = getCookie("readableFont");
if(readableFo=="yes"){
	$(".readableFont").addClass('active');
	$("body").addClass('readable-font');
}
$(".reset").click(function(){
	setCookie("blackYellow","no",1);
	setCookie("greyScale","no",1);
	setCookie("highContrast","no",1);
	setCookie("highlightLink","no",1);
	setCookie("keyboardNavigation","no",1);
	setCookie("readableFont","no",1);
	setCookie("increaseFont","no",1);
	location.reload();
});
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  } 
  
  $(".lang-c").click(function(){
	 var langPair = $(this).data("id"); 
	 var title = $(this).data("title"); 
	  if (langPair === '') return;
	 $(".sel-lang").html(title);
		//var lang = langPair.split('|')[1];
		var select = document.querySelector('.goog-te-combo');
		
		if (select) {
		  select.value = langPair;
		  select.dispatchEvent(new Event('change'));
		} else {
		  alert("Translate dropdown not ready yet. Please refresh or wait a few seconds.");
		}
  });
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}