// Lista de carros disponíveis
const carrosDisponiveis = [
    { modelo: 'Carro Turbo 2020', preco: 100000 },
    { modelo: 'Carro Turbo 2021', preco: 120000 },
    { modelo: 'Carro Turbo 2022', preco: 150000 },
    { modelo: 'Carro Turbo 2023', preco: 200000 },
    { modelo: 'Carro Turbo 2024', preco: 250000 },
];

// Função para exibir os carros na seção de carros disponíveis
function listarCarros() {
    const listaCarros = document.getElementById('listaCarros');
    listaCarros.innerHTML = ''; // Limpa a lista

    carrosDisponiveis.forEach(car => {
        const carroDiv = document.createElement('div');
        carroDiv.classList.add('carro');
        carroDiv.innerHTML = `
            <h3>${car.modelo}</h3>
            <p>Preço: R$ ${car.preco.toLocaleString()}</p>
            <button onclick="comprarCarro('${car.modelo}')">Comprar</button>
        `;
        listaCarros.appendChild(carroDiv);
    });
}

// Função para simular a compra de um carro
function comprarCarro(modelo) {
    const carro = carrosDisponiveis.find(car => car.modelo === modelo);
    if (carro) {
        alert(`Você comprou o ${modelo} por R$ ${carro.preco.toLocaleString()}`);
        // Remove o carro da lista
        carrosDisponiveis.splice(carrosDisponiveis.indexOf(carro), 1);
        listarCarros(); // Atualiza a lista de carros
    } else {
        alert('Carro não encontrado.');
    }
}

// Gráfico de carros disponíveis
const ctx = document.getElementById('carrosGrafico').getContext('2d');
const carrosGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Número de Carros Disponíveis',
            data: [5, 70, 500, 10, 20], // Pode ser ajustado conforme o número real de carros
            backgroundColor: 'rgba(255, 215, 0, 0.7)',
            borderColor: 'rgba(255, 215, 0, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    }
});

// Chama a função para listar carros ao carregar a página
window.onload = listarCarros;
