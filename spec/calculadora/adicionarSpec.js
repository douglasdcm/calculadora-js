describe("Suite de teste de adição", function(){
	var Calculadora = require('../../src/js/calculadora.js');

	it("deve retornar 5 para 2 e 3", function(){
		expect(Calculadora.adicionar(2, 3)).toEqual(5);
	});

	it("deve retornar 6 para 9 e -3", function(){
		expect(Calculadora.adicionar('9', '-3')).toEqual(6);
	});

	it("deve retornar 4.5 para 1.5 e 3", function(){
		expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
	});

	it("deve retornar 0 para quando primeiro numero for undefined", function(){
		expect(Calculadora.adicionar(undefined, 3)).toEqual(0);
	});

	it("deve retornar 0 para quando segundo numero for undefined", function(){
		expect(Calculadora.adicionar(3, undefined)).toEqual(0);
	});
});