const socket = new WebSocket('wss://www.el-evan.com/web_dev_chat_server');

document.querySelector('#Submit Message').addEventListener('click', () => {
    socket.send(JSON.stringify({Name : document.querySelector('#name').value, Message : document.querySelector('#message').value}))
});

socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    document.querySelector('.chat-stream').innerText += message.Name + '::' + message.Message + '\n';