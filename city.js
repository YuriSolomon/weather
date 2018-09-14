Vue.component('city', {
    props: ['city_info'],
    data: function () {
        return {
            isSun: this.city_info.weather[0].description.includes('sun'),
            isRain: this.city_info.weather[0].description.includes('rain'),
            isCloud: this.city_info.weather[0].description.includes('cloud')
        }
    },
    template: `
    <div class="city">
        <div v-if="isSun === true">
            <div class="info container square sun">
                <h3>{{this.city_info.name}}</h3>
                <h5>{{this.city_info.weather[0].description}}</h5>
                <h3>{{this.city_info.main.temp}}ºC</h3>
            </div>
        </div>
        <div v-else-if="isRain === true">
            <div class="info container square rain">
                <h3>{{this.city_info.name}}</h3>
                <h5>{{this.city_info.weather[0].description}}</h5>
                <h3>{{this.city_info.main.temp}}ºC</h3>
            </div>
        </div>
        <div v-else-if="isCloud === true">
            <div class="info container square cloud">
                <h3>{{this.city_info.name}}</h3>
                <h5>{{this.city_info.weather[0].description}}</h5>
                <h3>{{this.city_info.main.temp}}ºC</h3>
            </div>
        </div>
    </div>
    `
})


// "{{this.city_info.weather[0].main}}.includes('Sun')"