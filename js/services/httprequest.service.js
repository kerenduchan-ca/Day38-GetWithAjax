function get(url, onSuccess) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var responseData = JSON.parse(xhr.responseText)
            onSuccess(responseData)
        } else {
            console.error('Request failed with status:', xhr.status)
            onError && onError(xhr.status)
        }
    }

    xhr.send()
}
