//Quick solution to https://www.reddit.com/r/dailyprogrammer/comments/5aemnn/20161031_challenge_290_easy_kaprekar_numbers/
//Answers are incorrect on that page(4950 is a Krepkar, but not listed as of writing), using https://en.wikipedia.org/wiki/Kaprekar_number

$(function() {
	var kaprekarNumbers = new kaprekarNumbersClass();
	kaprekarNumbers.init(101,9000);
	alert(kaprekarNumbers.kaprekarNumberResults.toString());
});

var kaprekarNumbersClass = function(){};

kaprekarNumbersClass.prototype = {
	kaprekarNumberResults: new Array(),
	init: function(start, end) {
		for (var i = start; i <= end; i++) {
			var squared = Math.pow(i,2);
			var squaredString = squared.toString();
			for (var endString = 1; endString < squaredString.length; endString++) {
				var total = 0;
				var isKaprekarNumber = false;
				var base = squaredString.substr(0,endString);
				var addor = squaredString.substr(endString, squared.length);
				var total = parseInt(base) + parseInt(addor);
				if (total == i && isKaprekarNumber != true && addor > 0) {
					isKaprekarNumber = true;
					this.kaprekarNumberResults.push(i);
				}
			}
		}
	},
};

