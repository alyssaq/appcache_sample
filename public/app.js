function init() {
  document.getElementById('clock').textContent = new Date();
  setTimeout(init, 100);

  networkStatusHandler();
  window.addEventListener('online', networkStatusHandler, false);
  window.addEventListener('offline', networkStatusHandler, false);
  checkCache();
}

function networkStatusHandler(event) {
  var statusElem  = document.getElementById('networkstatus');
  var status = navigator.onLine ? 'online' : 'offline';
  statusElem.className = statusElem.innerHTML = status;
}

function handler(msg) {
  console.log(msg);
  document.getElementById('status').innerText = msg;
}

function checkCache() {
  var appCache = window.applicationCache;

  appCache.addEventListener('progress', function(event) {
    handler(event.loaded + ' of ' + event.total);
  }, false);

  appCache.addEventListener('checking', function(event) {
    console.log('Checking for updates.');
  }, false);


  appCache.addEventListener('downloading', function(event) {
    handler('Started Download.');
  }, false);


  appCache.addEventListener('progress', function(event) {
    handler(event.loaded + ' of ' + event.total + ' from cache downloaded.');
  }, false);

  appCache.addEventListener('cached', function(event) {
    console.log('Done.');
  }, false);
}