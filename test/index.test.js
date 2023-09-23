const { describe, expect, it } = require('@jest/globals');
const ServiceAvaliacao = require('../src/services/avaliacao.js')

describe('Testes da avaliacao', () => {
    const service = new ServiceAvaliacao()

    beforeAll(async () => {
        console.info('Iniciando TDD com Jest!');
    });

    afterAll(() => {
        console.info('Testes Encerrados!');
    });

    // ============================= SOMAR ============================= //
    it('Should sum [numA] with [numB] and show the [result]', () => {
        const result = service.Somar(2,3)

        expect(result).toBe(5)
    })

    // ERROR
    it('Should ERROR', () => {
        const result = () => service.Somar(2,"batata")
        
        expect(result).toThrowError("Parâmetros inválidos")
    })

    it('Should ERROR', () => {
        const result = () => service.Somar("batata",2)
        
        expect(result).toThrowError("Parâmetros inválidos")
    })
})