new Vue({
    el:'#hrx_starter',
    data: {
        username: '',
        greeting: '',
        feelname: '',
        feeling: '',
        gen: 0
    },
    methods: {
        greet: function() {

            this.greeting = "Hi, "
            this.greeting = this.greeting.concat(this.username, "!")
            
        },

        feels: function() {

            this.feeling = "So you are feeling "
            this.feeling = this.feeling.concat(this.feelname, ".")

        },
        
        clear: function() {

            this.username = ''
            this.greeting = ''
            this.feelname = ''
            this.feeling = ''

        },
        
        gender: function(val) {

            this.gen = val
        }
    }
});