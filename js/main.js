var dictionary = new Typo("en_US");

var theText = '';

$('#new_comment_field').each(function(){
  var words = $(this).val().split(' ');
  
  var i = 0, item;
  for ( ; item = words[i++] ; ){ 

    var is_spelled_correctly = dictionary.check(item);
    if(!is_spelled_correctly){
      theText += item;
    }

  }


});

console.log(theText);