# OneTimePassword
Two-factor authentication app for Firefox OS.


### Contributing
Fork, improve, make a pull request.

You need `npm` installed.

Clone the repository and set up the development environment:
```
npm install
node_modules/bower/bin/bower install
node_modules/grunt-cli/bin/grunt-cli dev
```
You may choose to install bower and grunt-cli globally, so that you can
invoke them as `bower` and `grunt`. In order to do that, execute with superuser
rights:
```
npm install -g bower
npm install -g grunt-cli
```


Open WebIDE and `Project->Open Packaged App...` pointing to the `src/`
directory.
