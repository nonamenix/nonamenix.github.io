var jQuery = require("jquery");
var bootstrap = require("bootstrap");

require("../../styles/style.scss");

$(function ($) {
    var margin = '0 -19px';
    $(".content p:has(>img)")
        .css('margin', margin);

    $(".content div:has(>div>img)")
        .css('margin', margin)
        .find('div')
        .css('padding', 0);

    //$.ajax({
    //    dataType: "json",
    //    url: '/posts.json',
    //    success: function (data) {
    //        $.each(data, function (key, val) {
    //            console.log(val);
    //        })
    //
    //    },
    //    error: function () {
    //        console.log('something wrong')
    //    }
    //});
});
