// dom elements
const buttons = document.querySelectorAll('button')
const textarea = document.querySelector('textarea')
const output = document.querySelector('.output')

// flavours
const flavours = {
  ninja: ['dojo', 'shogun', 'shinobi', 'samuri', 'shuriken'],
  pokemon: ['pika', 'pokeball', 'pokedex', 'evolve', 'ash', 'gym'],
  space: ['universe', 'galaxy', 'telescope', 'comet', 'stars'],
}

// functions
const flavourize = (inputText, flavour) => {
    const textArray = inputText.split(' ');

    for (let i = 0; i < textArray.length; i++) {
        if (i % 3 === 0) {
            const random = Math.floor(Math.random() * flavour.length);
            textArray[i] = flavour[random];
        }
    }
    return textArray.join(' ');
}

const updateOutput = (text) => {
    output.textContent = text;
}

// event listener
buttons.forEach(b => {
  b.addEventListener('click', (e) => {
    e.preventDefault();

    if (textarea.value) {
        const flavour = e.target.dataset.flavour;

        const text = flavourize(textarea.value, flavours[flavour]);

        updateOutput(text);
    }

  })
})



// =====================================================================
// MY SOLUTION

// // dom elements
// const buttons = document.querySelectorAll('button')
// const textarea = document.querySelector('textarea')
// const output = document.querySelector('.output')

// // flavours
// const flavours = {
//     ninja: ['dojo', 'shogun', 'shinobi', 'samuri', 'shuriken'],
//     pokemon: ['pika', 'pokeball', 'pokedex', 'evolve', 'ash', 'gym'],
//     space: ['universe', 'galaxy', 'telescope', 'comet', 'stars'],
// }

// // functions
// const flavourize = (inputText, flavour) => {
//     const chosenFlavour = flavours[flavour];
//     // console.log(chosenFlavour)
//     const lenghtOfFlavourArray = [...chosenFlavour].length;
//     // console.log(lenghtOfFlavourArray)
//     function randomize() {
//         return Math.floor(Math.random() * lenghtOfFlavourArray)
//     }

//     const text = inputText.split(' ');
//     // console.log(text)
//     for (let i = 2; i < text.length; i = i + 3) {
//         text[i] = chosenFlavour[randomize()];
//     }
    
//     updateOutput(text);
// }

// const updateOutput = (text) => {
//     text = [...text].join(', ');

//     output.textContent = text;
// }

// // event listener
// buttons.forEach(b => {
//     b.addEventListener('click', (e) => {
//         e.preventDefault();

//         const textToFlavorize = textarea.value;
//         const clickedFlavour = e.target.dataset.flavour;

//         flavourize(textToFlavorize, clickedFlavour)
//     })
// })