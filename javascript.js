let produto = ['Camisa Azul', 'Camisa Preta', 'Camisa Branca', 'Camisa Amarela', 'Moletom Azul', 'Moletom Preto','Moletom Branco','Moletom Amarelo','Camisa Verde','Camisa Vermelha','Camisa Rosa','Camisa Violeta',
    'Moletom Verde','Moletom Vermelho','Moletom Rosa','Moletom Violeta'
];
let cod = ['Camisa Azul', 'Camisa Preta', 'Camisa Branca',
     'Camisa Amarela', 'Moletom Azul', 'Moletom Preto','Moletom Branco','Moletom Amarelo','Camisa Verde','Camisa Vermelha','Camisa Rosa','Camisa Violeta','Moletom Verde','Moletom Vermelho','Moletom Rosa','Moletom Violeta'];
let qtd = [0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0];
let totalCompra = [0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0];
let preco = [50.00, 50.00, 50.00, 50.00, 99.99, 99.99,99.99,99.99,45.00,45.00,45.00,45.00,120.00,20.00,120.00,120.00];
let link = [];

document.addEventListener("DOMContentLoaded", function() {
    let main = document.querySelector('.container');

    let section = document.createElement('section');
    section.setAttribute('class', 'products-container');
    main.append(section);

    for (let i in produto) {
        let article = document.createElement('article');
        article.setAttribute('class', 'card');
        section.append(article);

        let div = document.createElement('div');
        div.setAttribute('class', 'product-image');
        div.setAttribute('id', 'img-' + i);
        div.style.backgroundImage = `url('img${i}.jpg')`;
        article.append(div);

        let h3 = document.createElement('h3');
        h3.setAttribute('id', 'nome' + i);
        h3.innerHTML = produto[i];
        article.append(h3);

        let p1 = document.createElement('p');
        p1.innerHTML = 'Qtd: ';
        article.append(p1);

        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('value', '1');
        input.setAttribute('min', '1');
        input.setAttribute('max', '10');
        input.setAttribute('id', 'qtd-' + i);
        p1.append(input);

        let p2 = document.createElement('p');
        p2.innerHTML = 'Tamanho: ';
        article.append(p2);

        let select = document.createElement('select');
        select.setAttribute('id', 'size-' + i);
        let sizes = ['P', 'M', 'G', 'GG'];
        for (let size of sizes) {
            let option = document.createElement('option');
            option.value = size;
            option.text = size;
            select.append(option);
        }
        p2.append(select);

        let p3 = document.createElement('p');
        p3.innerHTML = 'R$ ';
        let span = document.createElement('span');
        span.setAttribute('id', cod[i]);
        span.setAttribute('class', 'bold');
        span.innerHTML = preco[i].toFixed(2).replace('.', ',');
        p3.append(span);
        article.append(p3);

        let aLink = document.createElement('a');
        aLink.setAttribute('onclick', `compra('qtd-${i}', '${cod[i]}', ${i})`);
        aLink.setAttribute('class', 'btn');
        
        aLink.innerHTML = 'Comprar';
        article.append(aLink);
    }

    let summarySection = document.createElement('section');
    summarySection.setAttribute('class', 'summary-container');
    main.append(summarySection);

    let subtotal = document.createElement('p');
    subtotal.setAttribute('id', 'subtotal');
    subtotal.innerHTML = 'Subtotal: R$ 0,00';
    summarySection.append(subtotal);

    let finalizarCompraBtn = document.createElement('button');
    finalizarCompraBtn.setAttribute('class', 'btn');
    finalizarCompraBtn.innerHTML = 'Finalizar Compra';
    summarySection.append(finalizarCompraBtn);
    finalizarCompraBtn.addEventListener('click', finalizarCompra);
});

function finalizarCompra() {
    let carrinho = '';
    let totalItens = 0;
    for (let i in produto) {
        if (qtd[i] > 0) {
            let size = document.getElementById('size-' + i).value;
            carrinho += `${qtd[i]} x ${produto[i]} (Tamanho: ${size}) - R$ ${totalCompra[i].toFixed(2).replace('.', ',')}\n`;
            totalItens += qtd[i];
        }
    }
    if (carrinho === '') {
        alert('Seu carrinho está vazio.');
        return;
    }
    let subtotal = totalCompra.reduce((acc, curr) => acc + curr, 0);
    let confirmacao = confirm(`Você está comprando:\n${carrinho}\nSubtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\nDeseja finalizar a compra?`);
    if (confirmacao) {
        alert('Compra finalizada com sucesso!');
    }
}

function compra(qtdId, produto, posArr) {
    qtd[posArr] = parseInt(document.getElementById(qtdId).value);
    totalCompra[posArr] = qtd[posArr] * parseFloat(document.getElementById(produto).innerText.replace(',', '.'));
    let size = document.getElementById('size-' + posArr).value;
    alert(`Você adicionou ${qtd[posArr]} x ${produto} tamanho ${size} ao carrinho. Total: R$ ${totalCompra[posArr].toFixed(2).replace('.', ',')}`);
    atualizaSubtotal();
}

function atualizaSubtotal() {
    let subtotal = totalCompra.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('subtotal').innerText = `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}
function sair(){
    window.location.reload('file:///C:/Users/ismael_rostirola/Desktop/nova%20loja/index.html')
}