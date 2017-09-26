$(document).ready(function(){
    $("img").each(function(index){
        $(this).data("pos", index);
        $(this).data("isninja", true);
        $(this).attr("src", "Assets/ninja" + index + ".png");
    });
    $("img").click(function(){
        if($(this).data("isNinja"))
        {
            $(this).data("isNinja", false);
            $(this).attr("src", "Assets/cat" + $(this).data("pos") + ".png");
        }
        else
        {
            $(this).data("isNinja", true);
            $(this).attr("src", "Assets/ninja" + $(this).data("pos") + ".png");
        }
     });
});