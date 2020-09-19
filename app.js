new Vue({
    el:'#hrx_starter',
    data: {
        username: '',
        greeting: '',
        feeling: ''
    },
    methods: {
        greet: function() {

            this.greeting = "Hi, "
            this.greeting = this.greeting.concat(this.username, "!")
            
        }

        feels: function() {

            this.feeling = "So you are feeling "
            this.feeling = this.feeling.concat(this.feeling, ".")

        }
    }
});