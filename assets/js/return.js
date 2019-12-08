$('#journey').change(function(){
    if($('#journey option:selected').text() == "Return"){
       $('.return1').show();
    }
    else{
       $('.return1').hide();
    }
});