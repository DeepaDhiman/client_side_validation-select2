// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require select2-full
//= require_tree .


$(document).ready(function () {
   $("select").select2({
    tags: "true",
    allowClear: true,

  });
  var i = 0; 
  $("#user_s").click(function(){
    window.ClientSideValidations.callbacks.element.fail = function(element, message, callback) {
    callback();
    if (element.data('valid') !== false) {
      $('.abc').find('.message').hide();
      }
    }
    $(".abc").each(function(){
    if($("#"+ $(this).attr('id')).parent().find('.field_with_errors').length == 0)
    {
    // alert("hii I am in if");
      if ($("#"+ $("#"+ $(this).attr('id')).children().attr('id')).val() == "")
      {
        $("#error"+ $(this).attr('id')).remove();
        $("#"+ $(this).attr('id')).after("<span id="+'error'+$(this).attr('id')+">can't be blank</span>");
      }
      else
      {
        $("#error"+ $(this).attr('id')).remove();
      }
    }
    else
    {
    // alert("hii I am in else");
      if ($("#"+ $("#"+ $(this).attr('id')).children().children().attr('id')).val() == "")
      {
        $("#error"+ $(this).attr('id')).remove();
        $("#"+ $(this).attr('id')).after("<span id="+'error'+$(this).attr('id')+">can't be blank</span>");
      }
      else
      {
        $("#error"+ $(this).attr('id')).remove();
      }
    }
    });
    i++;
  });
    // $(".abc").change(function(){
    // if ( i == 0 )
    // {
    // // alert("hii I am in if");
    //   if ($("#"+ $("#"+ $(this).attr('id')).children().attr('id')).val() == "")
    //   {
    //     $("#error"+ $(this).attr('id')).remove();
    //     $("#"+ $(this).attr('id')).after("<span id="+'error'+$(this).attr('id')+">can't be blank</span>");
    //   }
    //   else
    //   {
    //     $("#error"+ $(this).attr('id')).remove();
    //   }
    // }
    // else
    // {
    // // alert("hii I am in else");
    //   if ($("#"+ $("#"+ $(this).attr('id')).children().children().attr('id')).val() == "")
    //   {
    //     $("#error"+ $(this).attr('id')).remove();
    //     $("#"+ $(this).attr('id')).after("<span id="+'error'+$(this).attr('id')+">can't be blank</span>");
    //   }
    //   else
    //   {
    //     $("#error"+ $(this).attr('id')).remove();
    //   }
    // }
    // });

   $(".abc").focusout(function(){
    // console.log(i);
    if($("#"+ $(this).attr('id')).parent().find('.field_with_errors').length == 0)
    {
    // console.log("hii I am in if");
      if ($("#"+ $("#"+ $(this).attr('id')).children().attr('id')).val() == "")
      {
        $("#error"+ $(this).attr('id')).remove();
        $("#"+ $(this).attr('id')).after("<span id="+'error'+$(this).attr('id')+">can't be blank</span>");
      }
      else
      {
        $("#error"+ $(this).attr('id')).remove();
      }
    }
    else
    {
    // console.log("hii I am in else");
    // console.log($("#"+ $("#"+ $(this).attr('id')).children().children().attr('id')).val())
      if ($("#"+ $("#"+ $(this).attr('id')).children().children().attr('id')).val() == "")
      {
        $("#error"+ $(this).attr('id')).remove();
        $("#"+ $(this).attr('id')).after("<span id="+'error'+$(this).attr('id')+">can't be blank</span>");
      }
      else
      {
        $("#error"+ $(this).attr('id')).remove();
      } 
    }
    });

});
