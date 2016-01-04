
$(document).ready(function() {
    // put your jQuery code here.
    
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        var profilePic = $("#profilePic");
        var sidebar = $("#sidebar");
        var contactInfo = $("#ContactInfo");
        var mainContent = $("#mainContent");
        var contactMe = $("#contactMe");
        var menu = $("#menu");

        if (windowsize < 800) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            contactInfo.hide();
            contactMe.hide();
            menu.css({margin: "20px"});

            sidebar.css({ width: "100%" , position: "absolute"});
            mainContent.css({"margin-left": "0px", "margin-top": "75px"});
            profilePic.css({top: "-15px", left: "10px", position: 'absolute', width: "60px", height: "60px"});

            profilePic.click(function(){
                if (mainContent.css("margin-top") == "75px") {
                    mainContent.css({"margin-top": "275px"});
                }
                else {
                    mainContent.css({"margin-top": "75px"})
                }
            })
        }

        if (windowsize > 800) {
            contactInfo.show();
            contactMe.show();
            menu.css({margin: "0px"});
            profilePic.css({top: "0px", left: "0px", position: 'static'});
            sidebar.css({left: 0, position: "fixed", width: "250px"});
            mainContent.css({"margin-left": "250px", "margin-top": "0px"});
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);



    $(function(){ 
        $("#timeline").timeline({
            data: [{date: new Date(2015,08,01),  
                    title: "Software Designer", 
                    location: "Nokia (formerly Alcatel-Lucent), Ottawa, ON",
                    description: "Designed, built, tested, and deployed two new network element for Nokia's Network Services Platform, a network service provisioning product, "+
                    "to meet client objectives.\n"+
                    "The two features developed provide users with options to set secondary ip addresses and static routes corresponding to their primary ip address "+
                    "and allows user to select and set their ingress and egress limit",
                    image: "nokia" },

                    {date: new Date(2014,12,01), 
                    title: "Interactive Developer",
                    location: "Ministry of Government and Consumer Services, Queens Park, Toronto, ON", 
                    description: "Re-architected, documented and maintained code content in PHP on WordPress using Wordpress built-in methods to improve modularity and readability",
                    image: "ministry" },
                ]
                });
    });

    $.widget('pi.timeline', {
        _create: function(){
            this._refresh();
        },
        _refresh: function(){

            //Draw TimeLine
            var dataLength = this.options.data.length;
            var majorCount = dataLength;
            var segSpace = Math.floor($(".tlLine").height()/(dataLength-1));

            //Draw Major Markers
            for ( i=0; i < majorCount; i++ ) {
                offsetTopEach = segSpace * i;
                offsetTopExpand = segSpace * i;
                this.element.append("<div class='tlDateLabel'> " + $.datepicker.formatDate( "d M y", this.options.data[i].date) + " </div> ");
                this.element.append("<img class='tlEventIcon' src='Image/" + this.options.data[i].image + ".jpg'>");
                // this.element.append("<span class='tlDateLabel' style='top: " + offsetTopEach "px; left: " + offsetLeft + "px;'>" + $.datepicker.formatDate( "d M y", this.options.data[i].date) + "</span>");
                this.element.append("<div class='tlEventFlag'>" + this.options.data[i].title + "</div>");
                this.element.append("<div class='tlEventExpand'><p><b>" 
                    + this.options.data[i].location + "</b></p><p>" 
                    + this.options.data[i].description +  "<p></div>");
                this.element.append("<br><br>");
            }

            $(".tlEventExpand").hide();

            $(".tlEventFlag, .tlEventIcon").click(function(){
            var tempThis = $(this);
            $(".tlEventExpand").hide();
            $(".tlEventFlag").animate({height:'22px'}, 200);
            if (tempThis.hasClass('active')) {
                tempThis.removeClass('active');
            } else {
                $(".tlEventFlag").removeClass('active');
                tempThis.addClass('active');
                tempThis.animate({height:'60px'}, 200, function(){
                tempThis.next('div').show();
                });
            }
            });
        },
        _destroy: function() {},
        _setOptions: function() {}
    });


});