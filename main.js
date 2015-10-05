
$(document).ready(function() {
    // put your jQuery code here.
    
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 320) {
            //if the window is greater than 440px wide then turn on jScrollPane..
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});