new Vue({
    el:'#hrx_starter',
    data: {
        username: '',
        greeting: '',
        feelname: '',
        feeling: '',
        money: 0,
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

function money(spent, quintile){
    var expenditures = {
        "Income after taxes":["$71,487","$12,236","$32,945","$53,123","$83,864","$174,777"],
        "Total Spending":["$8,333,301","$28,672","$40,330","$53,248","$70,892","$121,935"],
        "Food":["$1,078,750","$4,405","$5,833","$7,505","$9,055","$13,990"],
        "Alcohol":["$76,493","$208","$330","$440","$657","$1,255"],
        "Housing":["$2,734,285","$11,475","$14,784","$18,195","$22,537","$36,390"],
        "Clothing":["$248,692","$818","$1,241","$1,533","$2,238","$3,573"],
        "Transportation":["$1,420,566","$4,565","$7,144","$9,883","$1,289","$19,228"],
        "Healthcare":["$686,691","$286","$3,946","$4,725","$6,024","$8,438"],
        "Entertainment":["$408,392","$1,112","$1,837","$2,270","$3,382","$6,840"],
        "Everything Else":["","$5,803","$5,215","$8,698","$25,712","$32,219"]};
        return expenditures.spent[quintile]
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 