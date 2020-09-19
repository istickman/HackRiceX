new Vue({
    el:'#hrx_starter',
    data: {
        username: '',
        greeting: '',
        feelname: '',
        feeling: '',
        household: 0,
        race: 0,
        age: 0,
        native: 0,
        region: 0,
        residence: 0
    },
    methods: {
        house: function(val) {
            this.household = val
        },

        race: function(val) {
            this.race = val
        },
        
        age: function(val) {
            this.age = val
        },
        
        nativity: function(val) {
            this.native = val
        },
        
        region: function(val) {
            this.region = val
        },

        residence: function(val) {
            this.residence = val
        }
    }
});