/**
 * Auto-play Script for slides viewer on elearningclass.eu class
 * On slides view page run this script on developer console command and slides run automatic
 *
 */

var  checkEl = function() {
    console.log("LOAD");
    try{
        // load the element for check
        // slider element
    var textData =  document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName("time")[0].innerText.split("/");
        // lime element
    var slidesData =  document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName("slides")[0].innerText.split("/");

    console.log( "slides :",slidesData[0].trim(), slidesData[1].trim());
    console.log( "time :",textData[0].trim(), textData[1].trim());
    // check the slide
    if(slidesData[0].trim() !== slidesData[1].trim()) {
        // check the time
        if (textData[0].trim() === textData[1].trim()) {
            console.log("DONE");
            document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName("component_base next")[0].click();
            console.log("CLICK");
        } else {
            console.log("WAIT");
        }
        setTimeout(function () {
            //repeat check
            checkEl();
        }, 4000);
    }else{
        console.log("slides DONE ");
        console.log("END");
    }
    }catch (e) {

        console.log("error",e);
    }

};
checkEl();

