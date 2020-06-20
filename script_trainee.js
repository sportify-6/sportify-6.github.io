function move(elem){
    if( $(elem).parent().attr("id") == "not_completed" ){
        $(elem).detach().appendTo('#completed');
    }
    // else{
    //     $(elem).detach().appendTo('#nonSelected');
    // }
}