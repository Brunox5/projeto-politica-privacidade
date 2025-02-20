# Projeto de Login com Autenticação com LocalStorage

## Visão Geral
Este projeto implementa uma funcionalidade de login simples com validação de aceitação de política de privacidade. O objetivo é garantir que os usuários leiam e aceitem os termos antes de acessar o sistema, 
que utiliza o localStorage para armazenar o nome do usuário e verificar se ele aceitou os termos da política de privacidade antes de acessar o dashboard.

## Funcionalidades:

• Login baseado no nome do usuário.

• Exibição de modal para aceitação de termos.

• Redirecionamento automático baseado na autenticação.

• Logout com remoção do nome do usuário do localStorage.

## Preview do projeto!
![p1](https://github.com/user-attachments/assets/4aed564a-a252-4f91-b32a-48c403b4ae12) 
![p2](https://github.com/user-attachments/assets/8f0bf0d2-ca50-44c1-af9b-e1f9eee64a69)
![p3](https://github.com/user-attachments/assets/f990e0a6-0026-494b-9fc1-28194692cc19)

## Instalação e Configuração

### Baixe o Projeto 

• Em sua máquina local baixe os arquivos diretamente.

### Estrutura de Arquivos
/projeto-politica-privacidade
  |-- index.html
  |-- dashboard.html
  |-- script.js
  |-- style.css

### Como Rodar o Projeto

• utilize um servidor local como o VSCode Live Server.

• Insira um nome de usuário no campo de login.

• Caso esse usuário não estiver aceito os termos, um modal será exibido para aceitação dos termos.

• Após aceitar os termos, o usuário será redirecionado para o dashboard.html.

• Para sair da conta, clique no botão Sair, que ira redirecionar de volta para a tela de login.

Obs: caso o usuário já estiver aceito os termos, ele já ira para a tela de dashboard.html, informando que já esta logado e já aceitou os termos da política de privacidade

## Testes e Validação
Para validar o correto funcionamento do sistema, siga os passos abaixo:

### Teste 1: Login e Redirecionamento

• Insira um nome de usuário e clique no botão de login.

• Se os termos não foram aceitos, o modal deve ser exibido.

• Caso os termos já tenham sido aceitos, o redirecionamento deve ocorrer diretamente.

### Teste 2: Aceitação dos Termos

• O botão de aceitação dos termos só deve estar habilitado quando a checkbox estiver marcada.

• Clicar em "Aceitar" deve salvar a aceitação e redirecionar para o dashboard.

### Teste 3: Logout

• No dashboard.html, clique no botão Sair.

• O localStorage deve ser limpo e o usuário deve ser redirecionado para index.html.

## Estrutura e Arquitetura do Código

### HTML

• index.html: Página inicial contendo o formulário de login.

• dashboard.html: Página do dashboard acessível após login bem-sucedido.

### CSS

• O style.css define o layout responsivo e estiliza os botões e contêineres.

• Utiliza classes do Bootstrap para garantir responsividade e consistência.

### JavaScript

• O login e o armazenamento do nome do usuário no localStorage.

• A exibição do modal para aceitação dos termos.

• O redirecionamento seguro entre as páginas.

• A funcionalidade de logout.

### Arquitetura Adotada

• Aquitetura baseada no padrão MVC (Model-View-Controller) de forma simplificada, com uma estrutura client-side utilizando HTML, CSS e JavaScript puro, sem back-end.

### Observações
• O projeto é responsivo e funciona em diferentes tamanhos de tela.

• Pode ser facilmente expandido para incluir autenticação real com backend.

• Usa localStorage apenas para fins de demonstração (não seguro para dados sensíveis).

### Melhorias Futuras

• Implementar autenticação real com backend (ex: Firebase, Node.js ou PHP).

• Criar um sistema de sessão para expirar o login após um tempo.

• Melhorar a segurança do armazenamento de credenciais.



 



