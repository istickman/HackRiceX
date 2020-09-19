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

function money(spending, quintile){
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
        return expenditures.spending[quintile];
}

function poverty(type){
    var poverty = {
            "Female":[34.612,11.5],
            "Male":[48.496,9.4],
            "White":[72.204,9.1],
            "White, not Hispanic":[76.057,7.3],
            "Black":[45.438,18.8],
            "Asian":[98.174,7.3],
            "Hispanic (any race)":[56.113,15.7],
            "Under 65 years":[77.873,9.4],
            "15 to 24 years":[47.934,14.4],
            "25 to 34 years":[70.283,9.4],
            "35 to 44 years":[88.858,9.4],
            "45 to 54 years":[92.221,9.4],
            "55 to 64 years":[75.686,9.4],
            "65 years and older":[47.357,8.9],
            "Native-born":[69.474,10.1],
            "Foreign-born":[64.900,12.6],
            "Naturalized citizen":[71.538,9],
            "Not a citizen":[57.668,16.3],
            "Northeast":[76.221,9.4],
            "Midwest":[68.354,9.7],
            "South":[61.884,12],
            "West":[75.769,9.5],
            "Inside metropolitan statistical areas":[71.961,10],
            "Inside principal cities":[63.745,13.1],
            "Outside principal cities":[77.170,8.2],
            "Outside metropolitan statistical areas":[52.100,13.3]};
    return [poverty.type[1], poverty.type[2]];
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 