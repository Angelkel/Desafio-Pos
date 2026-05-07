import { fazerLogin } from '../src/gestaoLogin.js';
import assert from 'node:assert';

describe('Testes de Login de Usuários', function () {

    it('Validar login realizado com sucesso', function () {

        // Act
        const retornoDaFuncao = fazerLogin(
            'joao@email.com',
            '123456'
        );

        // Assert
        assert.equal(
            retornoDaFuncao,
            'Login realizado com sucesso!'
        );
    });

    it('Validar credencial expirada', function () {

        // Act
        const retornoDaFuncao = fazerLogin(
            'maria@email.com',
            'abc123'
        );

        // Assert
        assert.equal(
            retornoDaFuncao,
            'Renove suas credenciais.'
        );
    });

    it('Validar usuário não encontrado', function () {

        // Act
        const retornoDaFuncao = fazerLogin(
            'naoencontrado@email.com',
            '123456'
        );

        // Assert
        assert.equal(
            retornoDaFuncao,
            'Credenciais incorretas.'
        );
    });

    it('Validar senha incorreta para o usuário encontrado', function () {

        // Act
        const retornoDaFuncao = fazerLogin(
            'carlos@email.com',
            'senhaErrada'
        );

        // Assert
        assert.equal(
            retornoDaFuncao,
            'Credenciais incorretas.'
        );
    });

});