(function (global) {
    var ajaxUtils = {};

    function getHTTPrequest() {
        if(global.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }else {
            global.alert("Ajax is not supported!");
            return null;
        }
    }

    ajaxUtils.sendGetRequest = function (requestURL, responseHandler, isJsonResponse) {
        var request = getHTTPrequest();
        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", requestURL, true);
        request.send(null);
    };

    function handleResponse(request, responseHandler, isJsonResponse) {
        // console.log("jsonresponse="+isJsonResponse);
        if ((request.readyState == 4) &&
        (request.status == 200)) {
            if(isJsonResponse == undefined) {
                isJsonResponse=true;
            }

            if(isJsonResponse) {
                console.log(request.responseText);
                responseHandler(JSON.parse(request.responseText));
            }
            else responseHandler(request.responseText);
        }
    }

    global.ajaxUtils = ajaxUtils;
})(window);