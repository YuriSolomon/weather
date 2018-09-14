getWeather();

function getWeather() {
    var app = new Vue({
        el: '#app',
        data: {
            weather: []
        },
        beforeCreate() {
            fetch("https://api.myjson.com/bins/i8run", {})
                .then(response => response.json())
                .then(realData => {

                    var data = realData;
                    this.weather = data.list;
                })
        }
    })
}

function search() {

    let searchValue = document.getElementById("myInput");
    let allBooks = Array.from(document.getElementsByClassName("square"));

    allBooks.forEach(item => {
        var match = item.innerHTML.toUpperCase().includes(searchValue.value.toUpperCase());

        if (match) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}