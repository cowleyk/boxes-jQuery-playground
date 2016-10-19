//write your code here
$( document ).ready(function() {
    console.log( "ready!" );

//#1
$('#secretBox').css('background-color', 'white');
//change secretBox to white background

//#2
$('.boxType1').css('background-color', 'white');
//change all red boxes to white

//#3
// console.log($('#row1').children('div').length);
$('#row1').children('div').replaceWith('<div class="box boxType3"></div>');
//find all child divs of first row
  //[$('#row1').children('div').]
//console.log # of first row child divs
  //[console.log($('#row1').children('div').length);]
//set child divs to class="boxType3"
  //[.replaceWith('<div class="box boxType3"></div>')]
//check to confirm class was changed
  //[using inspect: class='box boxType3']

//#4
// console.log($('.box').last());
$('.box').last().remove();
//make last box in the last row disappear
//the console.log statement logs the very last .box element (which was removed).  if console.log is run after the .remove, it prints the 3rd box on the last row, b/c the original last box is already removed

//#5
var firstSecondChildren = $('#row2 :nth-child(1), #row2 :nth-child(2)');
firstSecondChildren.css('visibility', 'hidden');
//or could use firstSecondChildren.removeClass();
//store first two divs in the second row as a variable
//remove all styleing from stored divs

//#6



});
