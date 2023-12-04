// Função para carregar o conteúdo dinâmico
function changeContent(page) {
    var mainContent = document.getElementById('mainContent');

    // Carrega o conteúdo da página selecionada
    if (page === 'home') {
        // Conteúdo da página Home com duas seções lado a lado
        mainContent.innerHTML = `
            <div class="section-container">
                <div class="section">
                    <h2>Seção 1</h2>
                    <p>Conteúdo da Seção 1.</p>
                </div>
                <div class="section">
                    <h2>Seção 2</h2>
                    <p>Conteúdo da Seção 2.</p>
                </div>
            </div>
        `;
    } else if (page === 'sobre') {
        // Tabela simples na página Sobre
        mainContent.innerHTML = `
            <h2>Nossa História</h2>
            <p>Conheça mais sobre nossa empresa ou projeto.</p>
            <table>
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Evento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2010</td>
                        <td>Fundação da Empresa</td>
                    </tr>
                    <tr>
                        <td>2015</td>
                        <td>Expansão Internacional</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td>Lançamento de Novos Produtos</td>
                    </tr>
                </tbody>
            </table>
        `;
    } else if (page === 'contato') {
        // Formulário simples
        mainContent.innerHTML = `
            <h2>Entre em Contato</h2>
            <p>Use o formulário abaixo para nos contatar:</p>
            <form>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required><br>
                
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="mensagem">Mensagem:</label><br>
                <textarea id="mensagem" name="mensagem" rows="4" required></textarea><br>

                <input type="submit" value="Enviar">
            </form>
        `;
    }
}

// Carrega a página inicial por padrão
changeContent('home');