var democrat = [{
    name: 'Vice President Joe Biden',
    state: 'Delaware',
    govSite: 'http://www.whitehouse.gov/administration/vice-president-biden/',
    facebook: 'http://www.whitehouse.gov/administration/vice-president-biden/',
    twitter: 'http://www.whitehouse.gov/administration/vice-president-biden/',
    pic: 'pictures/joeBiden.jpg'
},];

$(document).ready(function(){
    $("#joeBidenPic").attr("src", democrat[0].pic).css({"height": "270px", "width": "100%"});
    $("#joeBiden").text(democrat[0].name + "<small>" + democrat[0].state + "</small>");
//    $("#state").text(democrat[0].state);
});