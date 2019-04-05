describe("Suite de teste para multiplicação", function(){
	
	var Calculadora = require('../../src/js/calculadora.js');

	it("deve retornar 6 para 2 e 3", function(){
		expect(Calculadora.multiplicar(2, 3)).toEqual(6);
	});


	it("deve retornar 5 para 2.5 e 2", function(){
		expect(Calculadora.multiplicar(2.5, 2)).toEqual(5);
	});
	
	it("deve retornar 6.25 para 2.5 e 2.5", function(){
		expect(Calculadora.multiplicar(2.5, 2.5)).toEqual(6.25);
	});

	it("deve retornar 6 para 2 e 3 quando são texto", function(){
		expect(Calculadora.multiplicar('2', '3')).toEqual(6);
		expect(Calculadora.multiplicar('2', 3)).toEqual(6);
		expect(Calculadora.multiplicar(2, '3')).toEqual(6);
	});


	it("deve retornar 0 para 3 e 0", function(){
		expect(Calculadora.multiplicar(3, 0)).toEqual(0);
	});


	it("deve retornar 0 para 0 e 2.5", function(){
		expect(Calculadora.multiplicar(0, 2.5)).toEqual(0);
	});


	it("deve retornar 0 para primeiro valor undefined e 2", function(){
		expect(Calculadora.multiplicar(undefined, 2)).toEqual(0);
	});	

	it("deve retornar 0 para segundo valor undefined e 2", function(){
		expect(Calculadora.multiplicar(2, undefined)).toEqual(0);
	});

	it("deve retornar -4 para -2 e 2", function(){
		expect(Calculadora.multiplicar(-2, 2)).toEqual(-4);
	});

	it("deve retornar -4 para 2 e -2", function(){
		expect(Calculadora.multiplicar(2, -2)).toEqual(-4);
	});

	it("deve retornar 4 para -2 e -2", function(){
		expect(Calculadora.multiplicar(-2, -2)).toEqual(4);
	});

	it("deve retornar 4 para 1 e 4", function(){
		expect(Calculadora.multiplicar(1, 4)).toEqual(4);
	});
	
});