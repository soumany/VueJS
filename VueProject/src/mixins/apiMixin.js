export const apiMixin = {
    data () {
        return {
            apiData: [],
            loading : true,
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://api.jsonbin.io/v3/b/6551dd2d0574da7622c5f6ff');
                const responsedata = await response.json();
                console.log(responsedata.record.data)
                this.apiData = responsedata.record.data
                this.loading = false;
                
                
            } catch(error) {
                console.error('Error fetching data:', error);
            }
        }
    }
}