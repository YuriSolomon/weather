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
                    console.log(this.weather);
                })
        }
    })
}
