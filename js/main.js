//Assignment variable
var music = document.getElementById("music");
var wolf = document.getElementById("wolf");
var video = document.getElementById("myVideo");
var video2 = document.getElementById("myVideo2");
var video = document.getElementById("myVideo3");
var video = document.getElementById("myVideo4");

//Music_btn Control playback
$("#audio_btn").click(function() { //select element with audio_btn wait user click
	if(music.paused) { // if music is palying
		music.play(); //play background music
		$('#music_btn').removeClass('glyphicon-play');
		$('#music_btn').addClass('glyphicon-pause') //change button icon
	} else { // if music is paused
		music.pause(); //pause background music
		$('#music_btn').removeClass('glyphicon-pause');
		$('#music_btn').addClass('glyphicon-play') //change button icon
	}
});

$("#howled_btn").click(function() { //select element with id howled_btn wait user click
	$('#down').slideToggle("slow"); //slide down the hidden element with down slowly
	if(wolf.paused) {
		wolf.play(); // if audio is palying
		music.pause(); //change playback state
		$('#music_btn').removeClass('glyphicon-pause');
		$('#music_btn').addClass('glyphicon-play');
		$('#music_btn2').removeClass('fa fa-volume-down');
		$('#music_btn2').addClass('fa fa-volume-off') //change button icon
	} else { // if audio is paused
		music.play();
		wolf.pause(); //change playback state
		$('#music_btn').removeClass('glyphicon-play');
		$('#music_btn').addClass('glyphicon-pause');
		$('#music_btn2').removeClass('fa fa-volume-off');
		$('#music_btn2').addClass('fa fa-volume-down') //change button icon
	}
	$('#howled_btn').fadeOut('5000'); //remove the botton with id howled_btn
});

//Change stars botton
$(".stars_btn").click(function() {//select element with class stars_btn wait user click
	$("#down").slideToggle(3000);//slide down the hidden element with down slowly
	$(".stars_btn").css({
		"font-size": "40px"
	});//change botton size
});

//Show the hidden element slowly
$(".slideToggle_btn").click(function() {
	$("#down").slideToggle(3000);
});

$("#fadeIn_btn").click(function() {
	$("#down2").fadeIn(3000);
});
$("#fadeIn_btn2").click(function() {
	$("#down3").fadeIn(3000);
});
$("#show_btn").click(function() {
	$("#down2").show(3000);
});
$("#fadeIn_color").click(function() {
	$("#down2").fadeIn(3000);
	$(".death").css({
		"color": "red"
	});
});

//Play video != Play Music
$("#Video").click(function() {//select element with id Video wait user click
	if(myVideo.paused) {
		myVideo.play();//if video is palying
		music.pause();//change playback state
		$('#music_btn').removeClass('glyphicon-pause');
		$('#music_btn').addClass('glyphicon-play');//change button icon
	} else {//if video is paused
		music.play();
		myVideo.pause();//change playback state
		$('#music_btn').removeClass('glyphicon-play');
		$('#music_btn').addClass('glyphicon-pause');//change button icon
	}
});

$("#Video2").click(function() {
	if(myVideo2.paused) {
		myVideo2.play();
		music.pause();
		$('#music_btn').removeClass('glyphicon-pause');
		$('#music_btn').addClass('glyphicon-play');
	} else {
		myVideo2.pause();
		music.play();
		$('#music_btn').removeClass('glyphicon-play');
		$('#music_btn').addClass('glyphicon-pause');

	}
});

$("#Video3").click(function() {
	if(myVideo3.paused) {
		myVideo3.play();
		music.pause();
		$('#music_btn').removeClass('glyphicon-pause');
		$('#music_btn').addClass('glyphicon-play');
	} else {
		myVideo3.pause();
		music.play();
		$('#music_btn').removeClass('glyphicon-play');
		$('#music_btn').addClass('glyphicon-pause');

	}
});

$("#Video4").click(function() {
	if(myVideo4.paused) {
		myVideo.play();
	} else {
		myVideo4.pause();
	}
});

//Navigation
var menuLeft = document.getElementById('lynx-spmenu-s1'),
	showLeft = document.getElementById('showLeft'),
	body = document.body;

showLeft.onclick = function() {
	classie.toggle(this, 'active');
	classie.toggle(menuLeft, 'lynx-spmenu-open');
	disableOther('showLeft');
};

function disableOther(button) {
	if(button !== 'showLeft') {
		classie.toggle(showLeft, 'disabled');
	}
}
//END: Navigation