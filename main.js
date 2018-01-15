
$(document).ready(function() {
  $("#profilePic").mouseover(function (e) {
      $(this).attr("src", $(this).attr("src").replace("ProfilePicV2.png", "me_irl.jpg"));
  }).mouseout(function (e) {
      $(this).attr("src", $(this).attr("src").replace("me_irl.jpg", "ProfilePicV2.png"));
  });
});
