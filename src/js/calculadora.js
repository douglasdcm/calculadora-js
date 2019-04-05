var Calculadora = {
	adicionar: function(num1, num2){
		return calcular(num1, num2, 'ADICAO');
	},

	subtrair: function(num1, num2){ 
		return calcular(num1, num2, 'SUBTRACAO');
	},

	dividir: function(num1, num2){		

		if(num2 == 0){
			return 'ERROR';
		};

		return calcular(num1, num2, 'divisao');
	},

	multiplicar: function(num1, num2){

		return calcular(num1, num2, 'multiplicacao');
	}
};

//usado na funcao 'require' do NodeJS
if(typeof module !== 'undefined' && typeof module.exports !== 'undefinde'){
	module.exports = Calculadora;
}

function calcular (num1, num2, operacao){
	if(isNaN(num1) || isNaN(num2)){
		return 0;
	};
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	switch(operacao.toUpperCase()){
		case 'ADICAO':
			valor = num1 + num2;
			break;
		case 'SUBTRACAO':
			valor = num1 - num2;
			break;
		case 'MULTIPLICACAO':
			valor = num1 * num2;
			break;
		case 'DIVISAO':
			valor = num1 / num2;
			break;
	}
	return valor;
}