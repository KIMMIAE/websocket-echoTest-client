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

// TODO: write to message log
function onOpen(event) {
    console.log('connected!')
}

function onClose(event) {
    console.log('disconnected!');
}

function onMessage(event) {
    console.log(event.data);
}

function onError(event) {
    console.error(event.data);
}