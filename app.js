new Vue({
    el:'#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        age: 20,
        x: 0,
        y:0,
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
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;

        }
    }
});