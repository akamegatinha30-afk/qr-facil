let qrCode;

function gerarQRCode() {

    const texto = document.getElementById("texto").value.trim();

    const areaQRCode = document.getElementById("qrcode");

    const botaoBaixar = document.getElementById("baixar");

    if (texto === "") {
        alert("Digite algum texto ou link.");
        return;
    }

    areaQRCode.innerHTML = "";

    qrCode = new QRCode(areaQRCode, {
        text: texto,
        width: 200,
        height: 200
    });

    botaoBaixar.style.display = "block";
}

function baixarQRCode() {

    const imagem = document.querySelector("#qrcode img");

    if (!imagem) {
        alert("Gere um QR Code primeiro.");
        return;
    }

    const link = document.createElement("a");

    link.href = imagem.src;

    link.download = "qr-code.png";

    link.click();
}