Vue.component('cities', {
    props: ['cities_in'],
    template: `
    <div class="d-flex flex-row flex-wrap justify-content-around bg-secondary" id="newBook">
        <div v-for="city in this.cities_in" class="container">
        </div>
    </div>
    `
})