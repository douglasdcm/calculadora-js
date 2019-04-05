describe("Suite de testes de subtração", function(){
	var Calculadora = require('../../src/js/calculadora.js');

	it("deve retornar 3 de 4 menos 1", function(){
		expect(Calculadora.subtrair(4, 1)).toEqual(3);
	});

	it("deve retornar 3 de 4 menos 1 quando primeiro valor é texto", function(){
		expect(Calculadora.subtrair('4', 1)).toEqual(3);
	});

	it("deve retornar 3 de 4 menos 1 quando segundo valor é texto", function(){
		expect(Calculadora.subtrair(4, '1')).toEqual(3);
	});

	it("deve retornar 0 de quando primero valor undefined", function(){
		expect(Calculadora.subtrair(undefined, 1)).toEqual(0);
	});

	it("deve retornar 0 de quando segundo valor undefined", function(){
		expect(Calculadora.subtrair(3, undefined)).toEqual(0);
	});

	it("deve retornar -2 quando subtrair -4 e 2 ", function(){
		expect(Calculadora.subtrair(-4, 2)).toEqual(-6);
	});

	it("deve retornar 2.5 quando subtrair 4.5 e 2 ", function(){
		expect(Calculadora.subtrair(4.5, 2)).toEqual(2.5);
	});

	it("deve retornar -2.5 quando subtrair 2.5 e 4 ", function(){
		expect(Calculadora.subtrair(2.5, 4)).toEqual(-1.5);
	});

	it("deve retornar 0 quando subtrair 3 e 3 ", function(){
		expect(Calculadora.subtrair(3, 3)).toEqual(0);
	});

});