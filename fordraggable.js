const dragArea = document.querySelector(".wrapper");
new Sortable(dragArea, {
    animation: 100
});

const words = document.querySelectorAll(".tr_en .card");
const en_words = document.querySelectorAll(".wrapper .card");
const tr_cards = document.querySelectorAll("#tr_words .card");
const en_cards = document.querySelector(".wrapper").children;

words.forEach(word => {
    word.classList.add("my-4");
});

en_words.forEach(en_word => {
    en_word.addEventListener("drop", () => {
        checkOrder(en_cards, tr_cards);
    });
});

const en2tr = {
    pamukkale: {
        "öykü": "story",
        "kan": "blood",
        "ılıca": "spa",
        "tortu": "sediment",
        "oduncu": "woodcutter",
        "bozmak": "distrub",
        "Usta": "master",
        "Coşkun": "fast flowing",
        "Irmak": "river",
        "Bilinmek": "to be known",
        "Emek vermek": "put efforts",
        "Darılmak": "to be offended",
        "Köprü": "bridge",
        "Köprü": "bridge",
    }
}

function checkOrder(en_cards, tr_cards) {
    en_cards.forEach((card, index) => {
        let key = tr_cards[index].innerText;
        console.log(`${en2tr.pamukkale[key]} -- ${card.innerText}`);
        if (en2tr.pamukkale[key] === card.innerText) {
            tr_cards[index].classList.remove("bg-danger", "text-white");
            card.classList.remove("bg-danger", "text-white");
            tr_cards[index].classList.add("bg-success", "text-white");
            card.classList.add("bg-success", "text-white");
        } else {
            tr_cards[index].classList.remove("bg-success", "text-white");
            card.classList.remove("bg-success", "text-white");
            tr_cards[index].classList.add("bg-danger", "text-white");
            card.classList.add("bg-danger", "text-white");
        }
    });
}