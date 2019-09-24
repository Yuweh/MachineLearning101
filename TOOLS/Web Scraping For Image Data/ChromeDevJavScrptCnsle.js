//Web scraping from Google Images
// src: https://www.pyimagesearch.com/2017/12/04/how-to-create-a-deep-learning-dataset-using-google-images/
// Google Chrome / View / Developer / Javascript Console / Console / Paste / the boom

// pull down jquery into the JavaScript console

// create new script element on the page
var script = document.createElement('script'); 

// set the source of the script element to jquery
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";

// add to google images document
document.getElementsByTagName('head')[0].appendChild(script);

// grab the URLs
//this will snippet / parses the dom document model
var urls = $('.rg_di .rg_meta').map(function() { return JSON.parse($(this).text()).ou; });

// write the URls to file (one per line) -> grab URLS into the list
var textToSave = urls.toArray().join('\n');

// create a list seperated by new line characters
var hiddenElement = document.createElement('a');

//set to download
hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'urls.txt';
hiddenElement.click();

