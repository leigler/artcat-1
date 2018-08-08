var Site = {}

Site.mobileMenu = function(){	
	$(".mobile-icon").on('click', function(){
		$("nav").toggleClass("open")
	})
}

$(document).ready(function(){
	console.log("artcat")

	Site.mobileMenu()

})