$(function() {

  var dictionary = new Typo("en_US");
  var lightblue  = '#A9D0F5';
  var lightred   = '#F5A9A9';

  var highlightSpellingError = function($target, $color) {
    console.log($target);

//    if ( /(\{\/?\d+\})/g.test(html) ) {
      html = $target.replace($target, '<span style=\"background-color: #' + $color + ';\">$1</span>');
      $target.html( html );
      console.log($target.html());
//    }
  };

  var addHiglighting = function($target, $color) {
    if ($target.length !== 0) {
      highlightSpellingError( $target , $color);
    }
  };

  $('#new_comment_field').each(function(){
    var words = $(this).val().split(' ');
    
    var i = 0, item;
    for ( ; item = words[i++] ; ){

      var is_spelled_correctly = dictionary.check(item);
      if(!is_spelled_correctly){
        //console.log('theText');
        addHiglighting(item, '#A9D0F5');
      }

    }

  });

});