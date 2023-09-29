const { describe, expect, it } = require('@jest/globals');
const ServiceExercicios = require('../src/services/exercicios.js')

describe('Testes dos Exercicios', () => {
    const service = new ServiceExercicios()

    beforeAll(async () => {
        console.info('Iniciando TDD com Jest!');
    });

    afterAll(() => {
        console.info('Testes Encerrados!');
    });

    // ============================= NOMES ============================= //
    it('Should add a name', () => {
        const valueBefore = service.GetNomes().length
        service.Add("João")
        const valueAfter = service.GetNomes().length

        expect(valueAfter).toBe(valueBefore+1)
    })

    it('Shoul sum twtw', async () => {
        const result = await service.GetNome(1)

        expect(result.nome).toBe('João da Silva')
    })
})