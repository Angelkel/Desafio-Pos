// Vetor de usuários
const usuarios = [
    {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: '123456',
        expirado: false
    },
    {
        id: 2,
        nome: 'Maria Souza',
        email: 'maria@email.com',
        senha: 'abc123',
        expirado: true
    },
    {
        id: 3,
        nome: 'Carlos Pereira',
        email: 'carlos@email.com',
        senha: 'senhaSegura',
        expirado: false
    }
];


// Função para realizar login
export function fazerLogin(email, senha) {

    let usuarioEncontrado;

    // FOR para varrer os usuários
    for (let i = 0; i < usuarios.length; i++) {

        // IF para encontrar o usuário pelo email
        if (usuarios[i].email === email) {
            usuarioEncontrado = usuarios[i];
        }
    }

    // IF para usuário não encontrado
    if (usuarioEncontrado === undefined) {
        return 'Credenciais incorretas.';
    }

    // IF para senha incorreta
    if (usuarioEncontrado.senha !== senha) {
        return 'Credenciais incorretas.';
    }

    // IF para credencial expirada
    if (usuarioEncontrado.expirado === true) {
        return 'Renove suas credenciais.';
    }

    // Retorno de sucesso
    return 'Login realizado com sucesso!';
}