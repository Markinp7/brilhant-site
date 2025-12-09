let services = [];
let total = 0;

function addService(name, price) {
    services.push({ name, price });
    total += price;
    updateList();
}

function updateList() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    services.forEach(s => {
        let li = document.createElement("li");
        li.textContent = ${s.name} - R$ ${s.price};
        lista.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

function sendWhats() {
    const number = "5514998293256";
    let msg = "Olá! Gostaria de solicitar um orçamento:%0A%0A";

    services.forEach(s => {
        msg += • ${s.name} - R$ ${s.price}%0A;
    });

    msg += %0ATotal: R$ ${total},00;

    window.open(https://wa.me/${number}?text=${msg}, "_blank");
}

function sendWhatsAgendamento() {
    const nome = document.getElementById("nome").value;
    const carro = document.getElementById("carro").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    const number = "5514998293256";

    let msg =
        Olá! Quero agendar um horário:%0A%0A +
        • Nome: ${nome}%0A +
        • Carro: ${carro}%0A +
        • Data: ${data}%0A +
        • Hora: ${hora}%0A;

    window.open(https://wa.me/${number}?text=${msg}, "_blank");
}
