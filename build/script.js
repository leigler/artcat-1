var Site = {}

Site.mobileMenu = function(){	
	$(".mobile-icon").on('click', function(){
		$("nav").toggleClass("open")
	})
}

Site.lightbox = function(){
	if($(".lightbox").length > 0){
		var imageArray = [],
				updateDirections = function(index){
					//console.log(index, imageArray.length)
					//next button
					if(index + 1 < imageArray.length){
						$(".next").attr("data-target", imageArray[(index + 1)])
					}else{
						$(".next").attr("data-target", imageArray[0])
					}
					//prev button
					if(index - 1 >= 0){
						$(".prev").attr("data-target", imageArray[(index - 1)])
					}else{
						$(".prev").attr("data-target", imageArray[(imageArray.length - 1)])
					}

					// counter fill
					$(".counter").html((index + 1) + " / " + imageArray.length )

				}

		$(".image-set").on('click', function(){
			//add all image sources to imageArray
			$(".image-set").each(function(){
				imageArray.push($(this).attr("src"))
			})

			// get current image and populate lightbox
			var thisSource = $(this).attr("src"),
					index = $.inArray(thisSource, imageArray)
			$(".current-image").attr("src", thisSource)

			// populate next and prev buttons
			updateDirections(index)
			
			// animate lightbox in
			$(".lightbox").addClass("open")

		})

		$(".direction").on('click', function(){
			var target = $(this).attr("data-target"),
					index = $.inArray(target, imageArray)
			// update image
			$(".current-image").attr("src", target)
			// update direction controls
			updateDirections(index)
		})
		
		var exit = function(){
			$(".lightbox").removeClass("open")
		}
		$(".exit").on('click', exit)

	}else{
		return
	}
}

$(document).ready(function(){
	console.log("artcat")

	Site.mobileMenu()
	Site.lightbox()

})