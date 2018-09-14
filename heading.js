Vue.component('heading', {
    template: `
    <div class="header d-flex flex-wrap justify-content-center justify-content-md-around">
        <div class="headline">
            <h1>Weather in City</h1>
        </div>
        <div class="searchBar">
            <form class="form-inline">
                <input onkeyup="search()" class="form-control my-5 my-sm-5 float-right" type="search" id="myInput"
                    placeholder="Search for cities..">
            </form>
        </div>
    </div>
    `
})