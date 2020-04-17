/**
 * Auto-play Script for slides viewer on elearningclass.eu class
 * On slides view page run this script on developer console command and slides run automatic
 *
 *  Run this on image - audio slides
 *  https://www.elearningclass.eu/Education/ViewAsset2.aspx?lang=el-GR&assetID=79230
 *
 */

var  checkEl = function() {
    console.log("LOAD");
    try{
        // load the element for check

        // time element

    var textData0 =  document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName('progress-bar-fill')[0].style.width;
    var textData1 =  "100%"

    console.log( "time :",textData0.trim(), textData1.trim());

        // check the time
        if (textData0.trim() === textData1.trim()) {
            console.log("DONE");
            document.getElementById("ContentFrame").contentWindow.document.getElementsByClassName("slide-control-button-next")[0].click();
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

