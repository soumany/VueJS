const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title : 'Final Empire',
            author : 'Brandon Sanderson',
            age : 45
        }
    },
    methods : {
        changeTitle(title) {
            this.title = title
            //this.title = 'Words of Randiance'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')