function getContacts(onSuccess, count = 10) {
    const url = `http://www.filltext.com/?rows=${count}&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true`
    ajaxGet(url, onSuccess)
}
