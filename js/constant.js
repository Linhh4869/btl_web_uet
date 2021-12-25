const HOST = "https://citizen-api.herokuapp.com";

function getUrl(url)
{
    if (url[0] == '/') return HOST + url;
    else return HOST + "/" + url;
}

function headers(type = 'aplication/json')
{
    return {
        'Content-type': type,
        'Authorization': getCookie('token')
    };
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
