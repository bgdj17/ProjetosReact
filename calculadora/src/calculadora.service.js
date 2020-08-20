function CalculadoraService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICACAO = '*'

    function calcular(num1, num2, operacao) {
        let resultado;

        switch (operacao) {
            case SOMA:
                resultado = num1 + num2;
                break;

            case SUBTRACAO:
                resultado = num1 - num2;
                break;

            case DIVISAO:
                resultado = num1 / num2;
                break;

            case MULTIPLICACAO:
                resultado = num1 * num2;
                break;

            default:
                resultado = 0;

        }

        return resultado;

    }

    function concatenarNumero(numAtual, numConcat) {
        if (numAtual === '0' && numAtual === null) {
            numAtual = '';
        }
        if(numConcat=='.' && numAtual===''){
            return '0.';
        }
        if (numConcat==='.' && numAtual.indexOf('.')>-1) {
            return numAtual;
            
        }
        return numAtual + numConcat;
    }

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        DIVISAO,
        MULTIPLICACAO
    ]
}

export default CalculadoraService;