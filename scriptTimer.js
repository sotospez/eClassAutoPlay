/**
 * Auto-play Script for slides viewer on elearningclass.eu class
 * On slides view page run this script on developer console command and slides run automatic
 *
 * Run this on non video - audio slides
 */
var timer = Math.floor(Math.random() * (25000 - 15000 + 1) + 15000);
var  checkEl = function() {
    console.log("LOAD");
    try{
        // load the element for check
        // slides element
    var slidesData =  document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName("slides")[0].innerText.split("/");

    console.log( "slides :",slidesData[0].trim(), slidesData[1].trim());
    // check the slide
    if(slidesData[0].trim() !== slidesData[1].trim()) {
            console.log("DONE");
            document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName("component_base next")[0].click();
            console.log("CLICK");
        setTimeout(function () {
            //repeat check
            checkEl();
        }, timer);
    }else{
        console.log("slides DONE ");
        console.log("END");
    }
    }catch (e) {

        console.log("error",e);
    }

};
checkEl();

