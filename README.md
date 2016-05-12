
# Simple http-proxy

Simple HTTP proxy.

```bash
# Install
$ pm2 install proxy-only
# Logs
$ pm2 logs proxy-only
# Uninstall
$ pm2 uninstall proxy-only
# Install PM2
$ npm install pm2 -g
```

or without daemonization:

```
$ npm install proxy-only -g
$ proxy-only
```

# Connect

- PhantomJS via Horseman: https://github.com/johntitus/node-horseman#setproxyip-port-type-user-pass

```
.setProxy(ip, 8213,  'http')
```

Should work with Chrome and Firefox.
