/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const carrinho = [];

        function toggleCarrinho() {
            const carrinhoElement = document.getElementById('carrinho');
            carrinhoElement.classList.toggle('hidden');
        }

        function toggleCarrinhoItem(button, produto) {
            const index = carrinho.indexOf(produto);

            if (index > -1) {
                removerDoCarrinho(produto);
                button.textContent = "Adicionar ao Carrinho";
            } else {
                adicionarAoCarrinho(produto);
                button.textContent = "Remover do Carrinho";
            }
        }

        function adicionarAoCarrinho(produto) {
            const carrinhoLista = document.getElementById('carrinho-lista');
            const carrinhoVazio = document.getElementById('carrinho-vazio');
            
            // Verifica se o item já está no carrinho
            if (carrinho.includes(produto)) return;

            // Adiciona o item ao array carrinho
            carrinho.push(produto);

            // Cria um novo item no carrinho com ícone de lixeira
            const item = document.createElement('li');
            item.classList.add('carrinho-item');
            item.textContent = produto;

            // Cria o ícone de lixeira
            const lixeira = document.createElement('span');
            lixeira.classList.add('lixeira');
            lixeira.textContent = "🗑️";
            lixeira.onclick = () => {
                removerDoCarrinho(produto);
                atualizarBotaoProduto(produto, "Adicionar ao Carrinho");
            };

            item.appendChild(lixeira);
            carrinhoLista.appendChild(item);

            // Esconde a mensagem de carrinho vazio
            carrinhoVazio.style.display = 'none';
        }

        function removerDoCarrinho(produto) {
            const index = carrinho.indexOf(produto);
            if (index > -1) {
                carrinho.splice(index, 1);

                // Remove o item do carrinho
                const carrinhoLista = document.getElementById('carrinho-lista');
                const items = carrinhoLista.getElementsByClassName('carrinho-item');
                for (let i = 0; i < items.length; i++) {
                    if (items[i].textContent.includes(produto)) {
                        items[i].remove();
                        break;
                    }
                }

                // Mostra a mensagem de carrinho vazio se não houver itens
                if (carrinho.length === 0) {
                    document.getElementById('carrinho-vazio').style.display = 'block';
                }
            }
        }

        function atualizarBotaoProduto(produto, texto) {
            const produtos = document.querySelectorAll('.product');
            produtos.forEach((p) => {
                if (p.getAttribute('data-nome') === produto) {
                    const button = p.querySelector('button');
                    button.textContent = texto;
                }
            });
        }

