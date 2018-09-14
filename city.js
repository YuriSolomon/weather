Vue.component('city', {
    props: ['city_info'],
    template: `
    <div class="justify-content-center">
        <div class="info">
            {{this.city_info.name}}
            {{this.city_info.main.temp}}
            {{this.city_info.weather[0].description}}
        </div>
    </div>
    `
})