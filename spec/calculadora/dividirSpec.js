describe("", function(){

	var Calculadora = require('../../src/js/calculadora.js');

	it("deve retornar 2 quando dividir 6 por 3", function(){
		expect(Calculadora.dividir(6, 3)).toEqual(2);
	});

	it("deve retornar 2 quando dividir 6 por 3 sendo textos", function(){
		expect(Calculadora.dividir('6', '3')).toEqual(2);
		expect(Calculadora.dividir('6', 3)).toEqual(2);
		expect(Calculadora.dividir(6, '3')).toEqual(2);
	});

	it("deve retornar 0 quando dividir valor indefinido por 3", function(){
		expect(Calculadora.dividir(undefined, 3)).toEqual(0);
	});

	it("deve retornar 0 quando dividir 3 por valor indefinido", function(){
		expect(Calculadora.dividir(3, undefined)).toEqual(0);
	});

	it("deve retornar Error quando dividir 3 por 0", function(){
		expect(Calculadora.dividir(3, 0)).toEqual('ERROR');
		expect(Calculadora.dividir('3', 0)).toEqual('ERROR');
	});

	it("deve retornar 2.25 quando dividir 4.5 por 2", function(){
		expect(Calculadora.dividir(4.5, 2)).toEqual(2.25);
	});

	it("deve retornar -2 quando dividir -4 por 2", function(){
		expect(Calculadora.dividir(-4, 2)).toEqual(-2);
	});

	it("deve retornar -2 quando dividir 4 por -2", function(){
		expect(Calculadora.dividir(4, -2)).toEqual(-2);
	});

	it("deve retornar 1 quando dividir 4 por 4", function(){
		expect(Calculadora.dividir(4, 4)).toEqual(1);
	});



});