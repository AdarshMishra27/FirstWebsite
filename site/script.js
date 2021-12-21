document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector("button").addEventListener("click",function(){
        ajaxUtils.sendGetRequest("data/names.json",function(res) {
            // var name = request.responseText;

            var msg=res.firstName+" "+res.lastName;
            if(res.likesChineseFood) {
                msg+=" likes Chinese Food";
            }else {
                msg+=" does not like Chinese Food"
            }
            
            msg+=" and uses ";
            msg+=res.numberOfDisplays + 1;
            msg+=" displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + msg + "!</h2>";
        });
    })
});