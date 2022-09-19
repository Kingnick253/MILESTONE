const party = require("party-js");
//to create the confetti effect once the user clicks complete
document.querySelector("#partyBtn").addEventListener("click", function (e) {
    party.confetti(this, {
        count: party.variation.range(20, 40),
        
    });
});