// fonts
var link1 = document.createElement('link');
link1.href = "https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700";
link1.rel="stylesheet";

var link2 = document.createElement('link');
link2.href = "https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700";
link2.rel = "stylesheet";

document.getElementsByTagName('head')[0].appendChild(link1);
document.getElementsByTagName('head')[0].appendChild(link2);

// Facebook and Twitter integration
var meta1 = document.createElement('meta');
meta1.property = "og:title";
meta1.content = "";

var meta2 = document.createElement('meta');
meta2.property = "og:url";
meta2.content = "";

var meta3 = document.createElement('meta');
meta3.property = "og:site_name";
meta3.content = "";

var meta4 = document.createElement('meta');
meta4.property = "og:description";
meta4.content = "";

var meta5 = document.createElement('meta');
meta5.name = "twitter:title";
meta5.content = "";

var meta6 = document.createElement('meta');
meta6.name = "twitter:image";
meta6.content = "";

var meta7 = document.createElement('meta');
meta7.name = "twitter:url";
meta7.content = "";

var meta8 = document.createElement('meta');
meta8.name = "twitter:card";
meta8.content = "";

document.getElementsByTagName('head')[0].appendChild(meta1);
document.getElementsByTagName('head')[0].appendChild(meta2);
document.getElementsByTagName('head')[0].appendChild(meta3);
document.getElementsByTagName('head')[0].appendChild(meta4);
document.getElementsByTagName('head')[0].appendChild(meta5);
document.getElementsByTagName('head')[0].appendChild(meta6);
document.getElementsByTagName('head')[0].appendChild(meta7);
document.getElementsByTagName('head')[0].appendChild(meta8);

// favicon.io or apple-touch-icon.png
var link3 = document.createElement('link');
link3.href = "/~theophile/favicon.ico";
link3.rel="shortcut icon";
document.getElementsByTagName('head')[0].appendChild(link3);

// animate.css
var link4 = document.createElement('link');
link4.href = "/~theophile/css/animate.css";
link4.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(link4);

// Icomoon Icon Fonts
var link5 = document.createElement('link');
link5.href = "/~theophile/css/icomoon.css";
link5.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(link5);

// Bootstrap
var link6 = document.createElement('link');
link6.href = "/~theophile/css/bootstrap.css";
link6.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(link6);

// Flexslider
var link7 = document.createElement('link');
link7.href = "/~theophile/css/flexslider.css";
link7.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(link7);

// Flaticons
var link8 = document.createElement('link');
link8.href = "/~theophile/fonts/flaticon/font/flaticon.css";
link8.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(link8);

// Owl Carousel
var link9 = document.createElement('link');
link9.href = "/~theophile/css/owl.carousel.min.css";
link9.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(link9);

// Theme style
var link10 = document.createElement('link');
link10.href = "/~theophile/css/style.css";
link10.rel="stylesheet";
document.getElementsByTagName('head')[0].appendChild(link10);

// Modernizr JS
var script = document.createElement('script');
script.src = "/~theophile/js/modernizr-2.6.2.min.js"
document.getElementsByTagName('head')[0].appendChild(script);


