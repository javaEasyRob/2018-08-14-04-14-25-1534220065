module.exports = function main(num) {
    var str = "" + num;
    //output map
    var out1 = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."];
    var out2 = ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"];
    var out3 = ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"];
    var out = [out1, out2, out3];
    var line1 = [], line2 = [], line3 = [];
    var line = [line1, line2, line3];
    //match input
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < out.length; j++) {
            line[j][i] = out[j][str.charAt(i)-'0'];
        }
    }
    //output
    for (var k = 0; k < out.length; k++) {
        console.log(line[k].join(" "));
        if(k != 2){
            console.log("\n");
        }
    }
};