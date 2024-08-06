let currentStoryIndex = 0;
let playerPoints = 0;

const story = [
    {
        text: "Você acorda em um quarto escuro. Não se lembra como chegou aqui. Ao olhar em volta, vê três portas: uma vermelha, uma azul e uma verde.",
        choices: [
            { text: "Abrir a porta vermelha.", nextIndex: 1 },
            { text: "Abrir a porta azul.", nextIndex: 2 },
            { text: "Abrir a porta verde.", nextIndex: 3 }
        ]
    },
    {
        text: "A porta vermelha leva a uma sala cheia de armadilhas. Você consegue desarmá-las e encontrar um mapa do tesouro escondido. O que faz?",
        choices: [
            { text: "Seguir o mapa e procurar o tesouro.", nextIndex: 4 },
            { text: "Voltar para o quarto e escolher outra porta.", nextIndex: 0 }
        ]
    },
    {
        text: "A porta azul abre para uma floresta encantada. Você encontra uma fada que oferece um desejo. O que deseja?",
        choices: [
            { text: "Desejar riqueza.", nextIndex: 5 },
            { text: "Desejar sabedoria.", nextIndex: 6 }
        ]
    },
    {
        text: "A porta verde leva a um labirinto subterrâneo. Você encontra uma espada mágica. O que você faz?",
        choices: [
            { text: "Usar a espada para explorar o labirinto.", nextIndex: 7 },
            { text: "Voltar para o quarto e escolher outra porta.", nextIndex: 0 }
        ]
    },
    {
        text: "Você segue o mapa e encontra o tesouro escondido! Parabéns, você venceu a aventura!",
        choices: []
    },
    {
        text: "Você desejou riqueza, mas o desejo tem consequências. Você encontra o tesouro, mas perde algo importante no processo. Fim da aventura.",
        choices: []
    },
    {
        text: "Você desejou sabedoria. A fada lhe ensina segredos antigos e você encontra o tesouro com facilidade. Parabéns, você venceu a aventura!",
        choices: []
    },
    {
        text: "Usando a espada mágica, você derrota os monstros do labirinto e encontra o tesouro escondido. Parabéns, você venceu a aventura!",
        choices: []
    }
];

function choosePath(choiceIndex) {
    const currentScene = story[currentStoryIndex];
    const nextIndex = currentScene.choices[choiceIndex - 1].nextIndex;

    if (nextIndex !== undefined) {
        currentStoryIndex = nextIndex;
        updateStory();
    }
}

function updateStory() {
    const currentScene = story[currentStoryIndex];
    const storyTextElement = document.getElementById('story-text');
    const choicesElement = document.getElementById('choices');

    storyTextElement.textContent = currentScene.text;

    // Limpar as escolhas anteriores
    choicesElement.innerHTML = '';

    // Adicionar novas escolhas
    currentScene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.setAttribute('onclick', `choosePath(${index + 1})`);
        choicesElement.appendChild(button);
    });

    // Se for o último cenário com escolhas vazias, exibir um botão de reiniciar
    if (currentScene.choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.textContent = "Recomeçar";
        restartButton.addEventListener('click', () => {
            currentStoryIndex = 0;
            updateStory();
        });
        choicesElement.appendChild(restartButton);
    }
}

// Iniciar a história
updateStory();

