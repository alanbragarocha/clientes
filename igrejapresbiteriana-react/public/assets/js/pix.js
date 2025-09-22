document.addEventListener('DOMContentLoaded', function() {
    // Data for bank and PIX details
    const bancoDados = {
        nome: "Cora",
        agencia: "1234",
        conta: "37880206",
        titular: "Igreja Presbiteriana de Macaé",
        cnpj: "16.701.498/0001-50"
    };

    const pixDados = {
        chave: "4igrejapresbiterianademacae@gmail.com",
        tipo: "E-mail",
        qrCodePath: "./assets/imagens/qr-code-pix.svg"
    };

    // Updating bank details in the HTML
    document.getElementById('banco-nome').textContent = bancoDados.nome;
    document.getElementById('banco-conta').textContent = bancoDados.conta;
    document.getElementById('banco-titular').textContent = bancoDados.titular;
    document.getElementById('banco-cnpj').textContent = bancoDados.cnpj;

    // Updating PIX details in the HTML
    document.getElementById('pix-key').textContent = pixDados.chave;
    document.getElementById('pix-tipo').textContent = pixDados.tipo;
    document.getElementById('pix-qrcode').src = pixDados.qrCodePath;

    // Copy PIX key functionality
    const copyButton = document.querySelector('.copy-button');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(pixDados.chave)
                .then(() => {
                    this.textContent = "✓ Copiado!";
                    setTimeout(() => {
                        this.textContent = "Copiar Chave PIX";
                    }, 2000);
                })
                .catch(err => {
                    console.error("Erro ao copiar:", err);
                    this.textContent = "✗ Erro";
                    setTimeout(() => {
                        this.textContent = "Copiar Chave PIX";
                    }, 2000);
                });
        });
    }
});