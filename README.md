
# Simple http-proxy

```
$ pm2 install proxy-only
```

or

```
$ npm install proxy-only -g
$ proxy-only
```

# Connect

- PhantomJS via Horseman: https://github.com/johntitus/node-horseman#setproxyip-port-type-user-pass

```
.setProxy(ip, 8213,  'http')
```

Should be the same with Chrome and Firefox.
