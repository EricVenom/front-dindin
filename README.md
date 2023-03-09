![](https://i.imgur.com/xG74tOh.png)

O sistema trata-se de uma aplicação para controle de finanças pessoais. As funcionalidades são:

- Cadastro do usuário
- Login de usuário
- Cadastro de uma nova transação
- Edição de uma transação
- Exclusão de uma transação
- Listagem de transações
- Na parte de resumo, o valor de entradas, saídas e saldo é obtido por meio do endpoint de extrato da **API**
- Editar perfil de usuário
- Deslogar usuário

### Cadastro de um novo usuário:

![](https://i.imgur.com/BZNNvti.png)

\*É importante garantir que todos os campos estão preenchidos, além de que as senha e confirmação de senha são iguais.

---

### Login de usuário:

![](https://i.imgur.com/vvnluj6.png)

---

### Página principal (main):

![](https://i.imgur.com/SYm8uuY.png)

---

### Cadastro de uma nova transação:

Para cadastrar uma nova transação o usuário deverá clicar no botão `Adicionar Registro`, que ficará logo abaixo da área de `resumo`.

![](https://i.imgur.com/10q85lh.png)

Ao clicar no referido botão, um modal com a opção de adicionar informações de uma transação deve ser exibido:

![](https://i.imgur.com/qMegn2n.png)

\*Todos os campos são obrigatórios!

Após o usuário clicar no botão **confirmar**, uma nova transação deve ser inserida e a tabela de listagem deve ser atualizada.

---

### Editar uma transação:

Para editar uma transação o usuário deverá clicar no ícone do lápis, que se encontrará na tabela de listagem de transações:

![](https://i.imgur.com/crhos7x.png)

Esse ícone => ![](https://i.imgur.com/iFD6G3k.png)

Ao clicar no ícone de editar uma transação, o modal (que foi utilizado para adicionar uma nova transação) deverá ser aberto e as informações da transação "clicada", deverão ser preenchidas automaticamente, assim como a imagem abaixo:

![](https://i.imgur.com/UGQ9uda.png)

\*Novamente, todos os campos são obrigatórios!

Após validar os campos e o usuário clicar em confirmar, a transação deverá ser atualizada na `API`.

---

### Excluir uma transação:

Para excluir uma transação o usuário deverá clicar no ícone da lixeira, que se encontrará na tabela de listagem de transações:

![](https://i.imgur.com/crhos7x.png)

Esse ícone => ![](https://i.imgur.com/X6GB3kh.png)

Ao clicar nesse ícone, um "popup" irá aparecer para que o usuário confirme ou não a exclusão, fazendo com que não hajam exclusões por engano, veja abaixo como aparece o "popup":

![](https://i.imgur.com/Ohhk1lhm.png)

---

### Listagem de transações:

As transações registradas por meio dos endpoints da `api`, deverão ser listadas numa tabela que ficará ao centro da página, nessa tabela teremos 6 colunas, sendo:

1. **Data** da transação no formato `dd/mm/yyyy`
2. **Dia da semana**, nessa coluna deveremos utilizar apenas os primeiros nomes dos dias da semana, ao invéz de Segunda-Feira, deveremos utilizar o formato `Segunda`.
3. **Descrição**, nessa coluna listaremos as descrições informadas no cadastro de transação.
4. **Categoria**, aqui vamos mostrar as categorias inseridas em cada uma das transações cadastradas.
5. **Valor**, nessa coluna exibiremos os valores de cada uma das transações. Existe uma regra importante nas cores e nos sinais, para valores de **entrada de dinheiro (credit)** exibimos o número positivo e na cor <span style="color:#7B61FF"><b>roxa</b></span>, já para **Saídas de dinheiro (debit)** exibimos o número na cor <span style="color:#FA8C10"><b>laranja</b></span>.
6. Na última coluna nós não teremos um cabeçalho, nessa coluna ficarão os botões de editar e excluir.

![](https://i.imgur.com/jie9f1T.png)

Cada linha da tabela representa uma transação. Portanto cada botão representa a ação para um registro.

---

### Resumo das transações:

O resumo das transações devem ser exibidos numa "box", onde teremos apenas 3 informações:

- Entradas
- Saídas
- Saldo

É importante ressaltar que os valores de entrada, saída e saldos são calculados com base em um endpoint da **API** que traz o extrato das transações.

Veja na imagem abaixo, como deve ser o resumo;
![](https://i.imgur.com/6Rlu6a7.png)

---

### Editar perfil de usuário:

No header da aplicação existe um ícone:

![](https://i.imgur.com/q6MS5wi.png)

Ao clicar nesse ícone, deverá ser exibido um modal para edição do usuário logado.

Veja na imagem o modal já preenchido:

![](https://i.imgur.com/aWx7T9C.png)

---

### Logout e nome de usuário

No header da página principal **(main)** você deverá:

1. Preencher com o nome do usuário logado no momento.
2. Além de adicionar uma função para deslogar o usuário ao clicar no botão que tem uma imagem que sugere ao usuário que ele vai deslogar da aplicação.

Veja na imagem abaixo os ícones:
![](https://i.imgur.com/Njzp33e.png)

---


###### tags: `front-end` `React` `CSS`
