var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(xhttp.responseText));
    }
}
xhttp.open("GET", "http://api-test.new-labs.co:8080/demo/post/category/food", true);
xhttp.send();