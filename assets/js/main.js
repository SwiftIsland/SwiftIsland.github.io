/*
 * Change Navbar color while scrolling
 */

$(window).scroll(function () {
  handleTopNavAnimation();
});

$(window).load(function () {
  handleTopNavAnimation();
});

function handleTopNavAnimation() {
  var top = $(window).scrollTop();

  if (top > 10) {
    $("#site-nav").addClass("navbar-solid");
  } else {
    $("#site-nav").removeClass("navbar-solid");
  }
}

/*
 * SmoothScroll
 */

smoothScroll.init();

jQuery(function () {
  var callback;
  $(".register-interest-form").submit(function () {
    name = $("#register-name").val();
    email = $("#register-email").val();

    if ($.trim(name) != "" && $.trim(email) != "") {
      url = "https://checkout.tito.io/swiftisland/2025/interested_users.json"
      $.post(url, {"interested_user":{"email":email,"name":name}}, function (data) {})
      .promise()
        .done(function () {
          $(".register-interest-form").html(
            [
              '<h3 class="section-title">',
              "Thanks ",
              name.split(" ")[0],
              "</h3>",
            ].join("")
          );
        })
        .fail(function (error) {
          if (
            error?.responseJSON?.errors?.email?.[0] ===
            "has already registered interest"
          ) {
            $(".register-interest-form").html(
              [
                "<h3 class='section-title'>",
                "You're already on the list!",
                "</h3>",
              ].join(" ")
            );
            return;
          }
          $(".register-interest-form").html(
            [
              "<h3 class='section-title'>",
              "There was an error adding your email, please contact",
              "info@swiftisland.nl",
              "</h3>",
            ].join(" ")
          );
        });
    }
    return false;
  });
});
