import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Test da CalculadoraService', ()=>{

    const [calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO] = CalculadoraService();

    it('deve garantir que 1 + 4 = 5', ()=>{
        let soma = calcular(1, 4, SOMA)
        expect(soma).toEqual(5);
    });

    it('deve garantir que 1 - 4 = -3', () =>{
        let sub = calcular(1,4, SUBTRACAO)
        expect(sub).toEqual(-3);
    })

    it('deve garantir que 6 / 2 = 3', () =>{
        let div = calcular(6,2, DIVISAO)
        expect(div).toEqual(3);
    })

    it('deve garantir que 6 * 2 = 12', () =>{
        let mult = calcular(6,2, MULTIPLICACAO)
        expect(mult).toEqual(12);
    })
    it('deve retornar 0 para operação inválida', () =>{
        let operacaoInvalida = calcular(1,4, '%')
        expect(operacaoInvalida).toEqual(0);
    })
})