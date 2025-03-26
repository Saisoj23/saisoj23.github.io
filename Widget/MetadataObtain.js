document.addEventListener("DOMContentLoaded", function(event) {
    var port = document.getElementById("sonic_js").getAttribute("data-port");
    if (port == null) { return false; }
    var getserver = "https://sp.unoredcdn.net/cp/widgets.js?r=622"
    const getHostname = (url) => {return new URL(url).hostname;}
    var server = (getHostname(getserver));
    var spserver = 'https://'+server+'/cp/get_info.php?p='+port;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var returned_obj = JSON.parse(this.responseText);
    
        if(returned_obj.history != null){ var history = returned_obj.history.join(' '); };
    
        document.getElementsByClassName("sonic_title")[0].innerHTML = returned_obj.title;
        document.getElementsByClassName("sonic_title")[1].innerHTML = returned_obj.title;
    
        if (document.getElementById("sonic_art")){
        var ts = new Date().getTime();
        document.getElementById('sonic_art').innerHTML = '<img width="100" height="100" src="' + returned_obj.art + '?r='+ts+ '">';
        }
    
        if (document.getElementById("sonic_art_full")){
        var ts = new Date().getTime();
        document.getElementById('sonic_art_full').src = returned_obj.art + '?r='+ts;
        }
    
        if (document.getElementById("dj_profile")){
        var ts = new Date().getTime();
        document.getElementById('dj_profile').innerHTML = '<img width="150" height="150" src="' + returned_obj.djprofile + '?r='+ts+ '">';
        }
    
        if (document.getElementById("sonic_listeners")){
        document.getElementById("sonic_listeners").innerHTML = returned_obj.listeners;
        }
    
        if (document.getElementById("sonic_uniq")){
        ddocument.getElementById("sonic_uniq").innerHTML = returned_obj.ulistener;
        }
    
        if (document.getElementById("sonic_bitrate")){
        document.getElementById("sonic_bitrate").innerHTML = returned_obj.bitrate;
        }
    
        if (document.getElementById("sonic_dj")){
        document.getElementById("sonic_dj").innerHTML = returned_obj.djusername;
        }
    
        if (document.getElementById("sonic_history")){
        document.getElementById("sonic_history").innerHTML = history;
        }
    
    }
    };
    xmlhttp.open("GET", spserver, true); xmlhttp.send();
    setInterval(function(){ xmlhttp.open("GET", spserver, true); xmlhttp.send();  }, 10000);
    });