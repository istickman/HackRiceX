new Vue({
    el:'#hrx_starter',
    data: {
        genderv: 0,
        racev: 0,
        agev: 0,
        nativev: 0,
        regionv: 0,
        residencev: 0
    },
    methods: {
        gender: function(val) {
            this.genderv = val
        },

        race: function(val) {
            this.racev = val
        },
        
        age: function(val) {
            this.agev = val
        },
        
        nativity: function(val) {
            this.nativev = val
        },
        
        region: function(val) {
            this.regionv = val
        },

        residence: function(val) {
            this.residencev = val
        }
    }
});