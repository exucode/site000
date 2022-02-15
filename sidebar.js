//0 bluef00t "Templaterr"
var html = '<a href="index.html"><h3>Home</h3></a>';//you can change this text to be an image/site button if you want.


var section1 = ['About','Music','Art']//write one-word link names in this list
html += '<h3>Section 1:</h3>';
for (i = 0; i<section1.length; i++){
	html += '<p> <a href="' + section1[i] + '.html">' + section1[i] + '</a></p>'
}


var section2 = ['link4','link5']//write one-word link names in this list
html += '<h3>Section 2:</h3>';
for (i = 0; i<section2.length; i++){
	html += '<p> <a href="' + section2[i] + '.html">' + section2[i] + '</a></p>'
}
//add more sections if you want by copy-pasting the above and changing every instance of section2 to section3, section4, etc...
//get rid of sections by deleting them. it's not that hard.

document.getElementById("sidebar").innerHTML = html;