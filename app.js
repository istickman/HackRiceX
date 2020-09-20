new Vue({
    el:'#hrx_starter',
    data: {
        genderv: 0,
        racev: 0,
        agev: 0,
        nativityv: 0,
        regionv: 0,
        residencev: 0,
        valv: [0, 0]

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
            this.nativityv = val
        },
        
        region: function(val) {
            this.regionv = val
        },
        
        residence: function(val) {
            this.residencev = val
        },

        poverty: function(val) {
            var povertyv = {
                "Female":['34,612',11.5],
                "Male":['48,496',9.4],
                "White":['72,204',9.1],
                // "White, not Hispanic":[76.057,7.3],
                "Black":['45,438',18.8],
                "Asian":['98,174',7.3],
                "Hispanic":['56,113',15.7],
                // "Under 65 years":[77.873,9.4],
                "15 to 24":['47,934',14.4],
                "25 to 34":['70,283',9.4],
                "35 to 44":['88,858',9.4],
                "45 to 54":['92,221',9.4],
                "55 to 64":['75,686',9.4],
                "65+":['47,357',8.9],
                "Native-born":['69,474',10.1],
                "Foreign-born":['64,900',12.6],
                "Naturalized citizen":['71,538',9],
                "Not a citizen":['57,668',16.3],
                "Northeast":['76,221',9.4],
                "Midwest":['68,354',9.7],
                "South":['61,884',12],
                "West":['75,769',9.5],
                "Inside metropolitan statistical areas":['71,961',10],
                "Inside principal cities":['63,745',13.1],
                "Outside principal cities":['77,170',8.2],
                "Outside metropolitan statistical areas":['52,100',13.3]}
        this.valv = povertyv[val]
        }
    }
    
});

function money(spending, quintile){
    var expenditures = {
        "Income_after_taxes":["$71,487","$12,236","$32,945","$53,123","$83,864","$174,777"],
        "Total_Spending":["$8,333,301","$28,672","$40,330","$53,248","$70,892","$121,935"],
        "Food":["$1,078,750","$4,405","$5,833","$7,505","$9,055","$13,990"],
        "Alcohol":["$76,493","$208","$330","$440","$657","$1,255"],
        "Housing":["$2,734,285","$11,475","$14,784","$18,195","$22,537","$36,390"],
        "Clothing":["$248,692","$818","$1,241","$1,533","$2,238","$3,573"],
        "Transportation":["$1,420,566","$4,565","$7,144","$9,883","$1,289","$19,228"],
        "Healthcare":["$686,691","$286","$3,946","$4,725","$6,024","$8,438"],
        "Entertainment":["$408,392","$1,112","$1,837","$2,270","$3,382","$6,840"],
        "Other":["","$5,803","$5,215","$8,698","$25,712","$32,219"]};
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
    valv[1] = poverty.type[1];
    valv[2] = poverty.type[2];
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;

var slider5 = document.getElementById("myRange5");
var output5 = document.getElementById("demo5");
output5.innerHTML = slider5.value;

var slider6 = document.getElementById("myRange6");
var output6 = document.getElementById("demo6");
output6.innerHTML = slider6.value;
// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = this.value;
} 
slider3.oninput = function() {
    output3.innerHTML = this.value;
} 
slider4.oninput = function() {
    output4.innerHTML = this.value;
} 
slider5.oninput = function() {
    output5.innerHTML = this.value;
} 
slider6.oninput = function() {
    output6.innerHTML = this.value;
} 

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect); 