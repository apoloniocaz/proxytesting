function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*example.com*")) {
        return "PROXY 127.0.0.1:8888"; // Use a proxy for example.com
    }
    return "DIRECT"; // Direct connection for all other URLs
}