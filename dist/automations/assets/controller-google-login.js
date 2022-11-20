var script_load_status = false;
function loadGoogleScript()
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true
    script.onload = function() {
        window["load_google_auth"] = load_google_auth;
        script_load_status = true;
    };

    // Fire the loading
    head.appendChild(script);
}

function load_google_auth(callback, button_id, client_id, obj) {
    if (!script_load_status) {
        setTimeout(() =>{
            load_google_auth(callback, button_id, client_id, obj)
        }, 100);        
    } else {
        
        var currentObj = obj;
        google.accounts.id.initialize({
            client_id: client_id,
            callback: function(resp) {
                console.log(obj);
                callback(resp, currentObj)
            }
        });
    
        google.accounts.id.renderButton(
            document.getElementById(button_id),
            { theme: "outline", size: "large" }  // customization attributes
        );
    }
}


loadGoogleScript();