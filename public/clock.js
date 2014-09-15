function init() {
  document.getElementById('clock').textContent = new Date();
  setTimeout(init, 100);

  checkCache();
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