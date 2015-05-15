function makeShort() 
{
   var longUrl= "//" + document.getElementById("longurl").value;
    var request = gapi.client.urlshortener.url.insert({
    'resource': {
      'longUrl': longUrl
	}
    });
    request.execute(function(response) 
	{
		
		if(response.id != null)
		{
			str ="<li class='list-group-item'><span class="badge'>response.id</span>longUrl</li>";
			document.getElementById("output").innerHTML += str;
		}
		else
		{
			alert("error: creating short url");
		}
	
    });
 }

function load()
{
	gapi.client.setApiKey('AIzaSyDtFnUk9Edkeyjuw1c5NjW2Nnmwb-qkN_o'); 
	gapi.client.load('urlshortener', 'v1',function(){});
 
}
window.onload = load;
