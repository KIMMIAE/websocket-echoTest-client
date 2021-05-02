function connect() {
    const uri = document.getElementById('uri').value;
    if(!uri) {
        return;
    }
    const websocket = new WebSocket(uri);
    websocket.onopen = (evt) => { onOpen(evt) };
    websocket.onclose = (evt) => { onClose(evt) };
    websocket.onmessage = (evt) => { onMessage(evt) };
    websocket.onerror = (evt) => { onError(evt) };
}

function onOpen(event) {
    
}

function onClose(event) {

}

function onMessage(event) {

}

function onError(event) {

}