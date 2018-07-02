jQuery(document).ready(function($) {
  $("#mc-embedded-subscribe-form").submit(function(e) {
    e.preventDefault();
    $.ajax({
      url:
        "https://uncovered.us18.list-manage.com/subscribe/post-json?u=561c240ea467825ab40833703&id=f7e978b1ce&c=?",
      type: "GET",
      data: $("#mc-embedded-subscribe-form").serialize(),
      dataType: "jsonp",
      contentType: "application/json; charset=utf-8",
      success: function(data) {
        if (data["result"] != "success") {
          //ERROR
          console.log(data["msg"]);
          $("#mce-error-response").append(data["msg"]);
          $("#mce-error-response").show();
        } else {
          //SUCCESS - Do what you like here
          window.location.replace = "/thankyou.html";
        }
      }
    });
  });
});

//https://uncovered.us18.list-manage.com/subscribe/post?u=561c240ea467825ab40833703&amp;id=f7e978b1ce
