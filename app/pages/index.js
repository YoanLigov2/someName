const socket = new WebSocket('ws://your-socket-server-url');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened');
});

socket.addEventListener('message', (event) => {
  const message = event.data;
  // Handle incoming messages from the server
});

socket.addEventListener('close', (event) => {
  if (event.wasClean) {
    console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
  } else {
    console.error('WebSocket connection abruptly closed');
  }
});

socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});
