class Url {
    constructor(url) {
        this.url = url;
    }

    getScheme() {
        const schemeEnd = this.url.indexOf(':');
        if (schemeEnd === -1) {
            return '';
        }
        return this.url.slice(0, schemeEnd);
    }

    getHostName() {
        const schemeEnd = this.url.indexOf(':');
        let hostStart = schemeEnd + 3; // Skip '://'
        let hostEnd = hostStart;
        while (hostEnd < this.url.length && this.url[hostEnd] !== '/' && this.url[hostEnd] !== '?') {
            if (this.url[hostEnd] === ':') {
                break; // Stop when a colon (':') is encountered (port separator)
            }
            hostEnd++;
        }
        return this.url.slice(hostStart, hostEnd);
    }

    getQueryParams() {
        const queryParams = {};
        const queryStart = this.url.indexOf('?');
        if (queryStart === -1) {
            return queryParams;
        }
        const query = this.url.slice(queryStart + 1);
        const pairs = query.split('&');
        for (const pair of pairs) {
            const [key, value] = pair.split('=');
            queryParams[key] = value || null;
        }
        return queryParams;
    }

    getQueryParam(paramName, defaultValue = null) {
        const queryParams = this.getQueryParams();
        return queryParams[paramName] !== undefined ? queryParams[paramName] : defaultValue;
    }

    equals(otherUrl) {
        return this.url === otherUrl.url;
    }
}

export default Url;