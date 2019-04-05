var Calculadora = {
	adicionar: function(num1, num2){
		if(isNaN(num1) || isNaN(num2)){
			return 0;
		}
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		return num1 + num2;
	},

	subtrair: function(num1, num2){
		if(isNaN(num1) || isNaN(num2)){
			return 0;
		}
		return num1 - num2;
	},

	dividir: function(num1, num2){
		if(isNaN(num1) || isNaN(num2)){
			return 0;
		};

		if(num2 == 0){
			return 'ERROR';
		};

		return num1 / num2;
	},

	multiplicar: function(num1, num2){
		if(isNaN(num1) || isNaN(num2)){
			return 0;
		}
		return (num1 * num2);
	}
};

//usado na funcao 'require' do NodeJS
if(typeof module !== 'undefined' && typeof module.exports !== 'undefinde'){
	module.exports = Calculadora;
}