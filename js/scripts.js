$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var universe = $("#universe").val();
    var mask = $("#mask").val();
    var power = $("#power").val();

    $(".spiderman").hide();
    $(".ironman").hide();
    $(".captain").hide();
    $(".hulk").hide();
    $(".x").hide();
    $(".wolverine").hide();
    $(".wonder").hide();
    $(".aquaman").hide();
    $(".hex").hide();
    $(".superman").hide();
    $(".batman").hide();
    $(".lantern").hide();

    if (universe === "DC") {
      if(mask === "Mask") {
        if (power === "strength") {
          $(".superman").show();
        } else if (power === "weapon") {
          $(".lantern").show();
        } else {
          $(".batman").show();
        }
      } else if (mask === "Unmasked") {
        if (power === "strength") {
          $(".wonder").show();
        } else if (power === "weapon") {
          $(".aquaman").show();
        } else {
          $(".hex").show();
        }
      }
    } else if (universe === "Marvel") {
      if(mask === "Mask") {
        if (power === "strength") {
          $(".captain").show();
        } else if (power === "weapon") {
          $(".spiderman").show();
        } else {
          $(".ironman").show();
        }
      } else if (mask === "Unmasked") {
        if (power === "strength") {
          $(".hulk").show();
        } else if (power === "weapon") {
          $(".wolverine").show();
        } else {
          $(".x").show();
        }
      }
    }
  })
})
