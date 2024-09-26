document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const jokesContainer = document.getElementById('jokes-container');

    const jokes = [
        {
            question: "How many programmers does it take to change a light bulb?",
            answer: "None, that's a hardware problem."
        },
        {
            question: "Web developers in the world that enjoy finding bugs",
            answer: "Spiders"
        },
        {
            question: "A SQL query walks into a bar, approaches two tables and asks...",
            answer: "Can I join you?"
        },
        {
            question: "Why do Java developers wear glasses?",
            answer: "Because they don't C#."
        },
        {
            question: "Why was the JavaScript developer sad?",
            answer: "Because he didn't Node how to Express himself."
        },
        {
            question: "Why do programmers always mix up Halloween and Christmas?",
            answer: "Because Oct 31 == Dec 25."
        },
        {
            question: "Why did the programmer quit his job?",
            answer: "Because he didn't get arrays."
        },
        {
            question: "What do you call a programmer from Finland?",
            answer: "Nerdic."
        },
        {
            question: "What's a programmer's favorite hangout place?",
            answer: "Foo Bar."
        },
        {
            question: "Why did the programmer go broke?",
            answer: "Because he used up all his cache."
        },
        {
            question: "Why do programmers prefer dark chocolate?",
            answer: "Because it's byte-sized."
        },
        {
            question: "What's a programmer's favorite snack?",
            answer: "Cookies."
        },
        {
            question: "What do you call a programmer from a communist country?",
            answer: "A Soviet Union."
        },
        {
            question: "Why do programmers hate nature?",
            answer: "It has too many bugs."
        },
        {
            question: "What's a programmer's favorite place in the house?",
            answer: "The Rooter."
        },
        {
            question: "Why did the programmer get stuck in the shower?",
            answer: "The instructions said: Lather, Rinse, Repeat."
        },
        {
            question: "What do you call a programmer who doesn't comment their code?",
            answer: "A C-list celebrity."
        },
        {
            question: "Why did the programmer die in the shower?",
            answer: "He read the shampoo bottle instructions: Lather, Rinse, Repeat."
        }
    ];

    function showContent(id) {
        contentSections.forEach(section => section.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        if (id === 'home') displayRandomJokes();
    }

    function setActiveLink(clickedLink) {
        navLinks.forEach(link => {
            link.removeAttribute('aria-current');
        });
        clickedLink.setAttribute('aria-current', 'page');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showContent(targetId);
            setActiveLink(link);
            history.pushState(null, '', `#${targetId}`);
        });
    });

    function handleHashChange() {
        const hash = window.location.hash.substring(1) || 'home';
        showContent(hash);
        setActiveLink(document.querySelector(`a[href="#${hash}"]`));
    }

    window.addEventListener('hashchange', handleHashChange);

    function updateDarkModeButtonText() {
        darkModeToggle.textContent = body.classList.contains('dark-mode') 
            ? "I can't hear you, it's too dark in here" 
            : "Light attracts bugs";
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        updateDarkModeButtonText();
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayRandomJokes() {
        jokesContainer.innerHTML = '';
        shuffleArray(jokes);
        jokes.slice(0, 4).forEach(joke => {
            const jokeCard = document.createElement('div');
            jokeCard.className = 'joke-card';
            jokeCard.innerHTML = `
                <div class="joke-card-inner">
                    <div class="joke-card-front"><p>${joke.question}</p></div>
                    <div class="joke-card-back"><p>${joke.answer}</p></div>
                </div>
            `;
            jokesContainer.appendChild(jokeCard);
        });
    }

    handleHashChange();
    updateDarkModeButtonText();
});