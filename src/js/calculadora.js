var Calculadora = {
	adicionar: function(num1, nun2){
		if(isNaN(num1) || isNaN(nun2)){
			return 0;
		}
		num1 = parseFloat(num1);
		nun2 = parseFloat(nun2);
		return num1 + nun2;
	},
	subtrair: function(num1, nun2){
		return 0;
	},
	dividir: function(num1, nun2){
		return 0;
	},
	multiplicar: function(num1, nun2){
		return 0;
	}
};

//usado na funcao 'require' do NodeJS
if(typeof module !== 'undefined' && typeof module.exports !== 'undefinde'){
	module.exports = Calculadora;
}