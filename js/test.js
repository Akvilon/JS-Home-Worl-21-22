
var power = {
	
	pow: function(x, n) {
	
		var result = 1;

		for (var i = 1; i <= n; i++) {
		result *= x;
		}

		if (x == ''|| n == '') {
			console.log('Вы ничего не ввели');
		}else if (x !== isNaN || n !== isNaN) {
			console.log('Введите число, пожалуйста');
		}
		
		return result;
	}
};

module.exports = power;


