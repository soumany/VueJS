new Vue({
    el:'#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'https://www.google.com/',
        websiteTag: '<a href= "https: //www.google.com"> The google website </a>'
    },
    methods: {
        greet: function(time){
            return 'Good' + time + '' + this.name;
        }
    }
});