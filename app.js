new Vue({
    el:'#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        age: 20,
        website: 'https://www.google.com/',
        websiteTag: '<a href= "https: //www.google.com"> The google website </a>'
    },
    methods: {
        greet: function(time){
            return 'Good' + time + '' + this.name;
        },
        add: function(inc){
            this.age+=inc;
        },
        subtract: function(dec){
            this.age-=dec;
        }
    }
});