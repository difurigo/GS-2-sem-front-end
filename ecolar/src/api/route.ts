import axios from 'axios';

const API_URL = 'http://localhost:8080/usuario';

// Função para cadastrar um novo usuário
async function cadastrarUsuario(nome: string, email: string, senha: string) {
  try {
    // Envia uma requisição POST com os dados do usuário
    const resposta = await axios.post(API_URL, {
      nome,
      email,
      senha,
    });
    console.log('Usuário cadastrado com sucesso:', resposta.data);
  } catch (erro) {
    console.error('Erro ao cadastrar usuário:', erro);
  }
}

// Função para consultar os usuários cadastrados
async function consultarUsuarios() {
  try {
    // Envia uma requisição GET para consultar os usuários cadastrados
    const resposta = await axios.get(API_URL);
    console.log('Usuários cadastrados:', resposta.data);
  } catch (erro) {
    console.error('Erro ao consultar usuários:', erro);
  }
}

// Testar a função de cadastrar e consultar
cadastrarUsuario('João Silva', 'joao@email.com', 'senha123')
  .then(() => consultarUsuarios())  // Após cadastrar, consulta os usuários
  .catch((erro) => console.error('Erro no processo de cadastro/consulta:', erro));
