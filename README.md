# Sample offline app with appcache manifest

### Run
```
$ npm install
$ node server.js
```

### Deploy to heroku
```
$ git clone https://github.com/alyssaq/appcache_sample.git
$ heroku login
$ heroku create
$ git push heroku master
$ heroku open
```
### Gotchas
Files get reloaded from cache. To force the browser to load from network, edit the manifest file.

### References
<https://html.spec.whatwg.org/multipage/browsers.html#offline>
<http://diveintohtml5.info/offline.html>
<http://www.sitepoint.com/creating-offline-html5-apps-with-appcache/>