// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coinVal = [50, 25, 10, 5, 1];
    var coinNames = ["H", "Q", "D", "N", "P"];

    if(currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    if(currency <= 0)
        return {};

    var output = {};
    for(var i = 0; i < coinVal.length; i++){
        if(currency % coinVal[i] == currency)
            continue;
        var currentAmmount = parseInt(currency / coinVal[i]);
        if (currentAmmount != 0)
            output[coinNames[i]] = currentAmmount; 
        currency -= coinVal[i] * currentAmmount;
    }

    return output;
    
}
