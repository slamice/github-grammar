$(function() {

  var dictionary = new Typo("en_US");
  var lightblue  = '#A9D0F5';
  var lightred   = '#F5A9A9';

  var getUniqueWordListFromSource = function( $target ){
    var tmpArray = [];
    $target.each(function(){
      tmpArray.push( $(this).text() );
    });

    return getUniqueArray( tmpArray );
  };

  var highlightSpellingError = function($target, $color, $ele_id) {
    console.log('element: '+$ele_id);
    console.log('target: '+$target);

    $('#'+$ele_id).textareaHighlighter({
        matches: [
            {
                'matchClass': '{ background-color: #09f; opacity: 0.6; }',
                'match': '{ color: #4c9; }'
            },
        ]
    });
    //$('textarea').highlightTextarea({
    //  words: $target
    //});

//    $('textarea').highlightTextarea({
    //  words: $target
//    });

//    if ( /(\{\/?\d+\})/g.test(html) ) {
      // html = $target.replace($target, '<span style=\"background-color: #' + $color + ';\">$1</span>');
      // $target.html( html );
      // console.log($target.html());
//    }
  };

  var addHiglighting = function($target, $color, $ele_id) {
    if ($target.length !== 0) {
      highlightSpellingError( $target , $color, $ele_id);
    }
  };

  $('textarea').each(function(){

    var word_list = []
    var words = $(this).val().split(' ');
    var ele_id = $(this).attr('id');
    var i = 0, item;
    for ( ; item = words[i++] ; ){

      var is_spelled_correctly = dictionary.check(item);
      if(!is_spelled_correctly && item != ''){
        //console.log('theText');
        word_list.push(item);
      }
    }
    addHiglighting(word_list, '#A9D0F5', ele_id);

  });

});