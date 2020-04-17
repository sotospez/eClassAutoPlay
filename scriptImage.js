/**
 * Auto-play Script for slides viewer on elearningclass.eu class
 * On slides view page run this script on developer console command and slides run automatic
 *
 *  Run this on image - audio slides
 *
 */

var  checkEl = function() {
    console.log("LOAD");
    try{
        // load the element for check

        // time element

    var textData0 =  document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName('progress-bar-fill')[0].getAttribute("aria-valuenow");
    var textData1 =  document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName('progress-bar-fill')[0].getAttribute("aria-valuemax");

    console.log( "time :",textData0.trim(), textData1.trim());

        // check the time
        if (textData0.trim() === textData1.trim()) {
            console.log("DONE");
            document.getElementById("ContentFrame").contentWindow.document.getElementById("next").click();
            console.log("CLICK");
        } else {
            console.log("WAIT");
        }
        setTimeout(function () {
            //repeat check
            checkEl();
        }, 4000);

    }catch (e) {

        console.log("error",e);
    }

};
checkEl();

