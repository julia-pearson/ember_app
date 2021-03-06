import Ember from 'ember';
var $ = Ember.$;
var hamsters = [
  {
    name: 'Reginald',
    color: 'Orange',
    size: 'Average',
    fluff: 4
  },
  {
    name: 'Jodie',
    color: 'White',
    size: 'Petite',
    fluff: 7
  },
  {
    name: 'Benni-furrrrrr',
    color: 'Black',
    size: 'Chubby',
    fluff: 10
  }
];
var returnOfTheHamsters = [];
returnOfTheHamsters = hamsters;
console.log('1');


$( document ).ready(function() {

  var $button = $('button');

  $button.on('click',function(){
    event.preventDefault();
    var name = $('input').eq(0).val();
    var color = $('input').eq(1).val();
    var size = $('select').val();
    var fluffNum = $('input').eq(2).val();
    console.log('click');
    if (!!name.length && !!color.length && !!fluffNum.length){
      var newHamster = [name,color,size,fluffNum];
      hamsters.push(newHamster);
      console.log(hamsters);
      var $div = $('<div>').attr('class','ember-view')
      var $row = $('<tr>')
      newHamster.forEach(function(property){
        var $entry = $('<td>').attr('class','column').text(property)
        $row.append($entry)
      })
      $div.append($row)
      $('tbody').append($div)
    }
  });



  var $name = $('#name');
  var $color = $('#color');
  var $size = $('#size');
  var $fluff = $('#fluff');

  $name.on('click', function(){
    console.log('got to name sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  });
  $color.on('click',function(){
    console.log('got to color sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.color.localeCompare(b.color);
    });
  });
  $size.on('click',function(){
    console.log('got to size sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.size.localeCompare(b.size);
    });
  });
  $fluff.on('click',function(){
    console.log('got to fluff sorting');
    returnOfTheHamsters.sort(function(a, b) {
      return a.fluff.localeCompare(b.fluff);
    });
  });
  console.log('2');

});


export default Ember.Route.extend({
  model() {
    console.log('3');
    return returnOfTheHamsters;
  },
});