var worker = new Worker('worker.js');

// rejestracja obsługi zdarzenia 'message' wysłanego przez 'worker'
worker.addEventListener('message', function(e) {
    alert('otrzymano odpowiedź: ' + e.data);
}, false);

// wyslanie wiadomosci start
//worker.postMessage('start');
console.log(worker.postMessage('start'));
// wyslanie wiadomosci stop
worker.postMessage(worker.postMessage('stop'));
