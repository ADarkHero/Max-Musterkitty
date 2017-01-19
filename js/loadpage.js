function loadPage(page){
	var path = "html/"+page;
	var text = FileHelper.readStringFromFileAtPath ( path );
	document.getElementById("content").innerHTML = text;
}

function FileHelper(){
	FileHelper.readStringFromFileAtPath = function(path)
    {
        var request = new XMLHttpRequest();
        request.open("GET", path, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
}