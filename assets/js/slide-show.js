var bgImageArray = ["01.jpg", "02.jpg", "03.jpg"],
    base = "assets/images/slides/slide",
    secs = 8;

bgImageArray.forEach(function(img){
    new Image().src = base + img; 
});

function backgroundSequence() {
	window.clearTimeout();
	var a = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){ 
			document.getElementById('slideShow').style.background = "url(" + base + bgImageArray[a] + ") no-repeat center center fixed";
			document.getElementById('slideShow').style.backgroundSize ="cover";
            if ((a + 1) === bgImageArray.length) {
                setTimeout(function() { backgroundSequence()}, (secs * 1000))
            } else { a++; }			
        }, (secs * 1000) * i)	
	}
}

backgroundSequence();