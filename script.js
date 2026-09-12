const i18Obj = {
    'en': {
        'en': 'en',
        'ru': 'ru',
      'name': 'Irina Bukley',
      'open': 'Open to suggestions and new projects',
      'job': 'Irina Bukley | Junior front-end developer',
      'about': 'About',
      'about-descr-1': "I'm actively studying Frontend Development right now!",
      'about-descr-2': 'My professional motivation is to develop in the field of development in both Frontend and Backend.',
      'about-descr-3': 'I like to benefit people and create user-friendly interfaces.',
      'experience': 'Professional experience',
      'experience-text': '(only on educational projects yet)',
      'code-example': 'Code example:',
      'challenge-1': 'My first challenge - Stage 0',
      'challenge-1-text': 'My first websites: ',
      'challenge-new': "What's interesting for me:",
      'challenge-achievement': 'My achievements:',
      'challenge-1-new-1': '➥ HTML',
      'challenge-1-new-2': '➥ Adaptive layout',
      'challenge-1-new-3': '➥ JS functionality',
      'challenge-2': 'My second challenge - Stage 0.5 Bootcamp + self-study',
      'challenge-2-new-1': '➥ CSS: variables',
      'challenge-2-new-2': '➥ CSS: nesting',
      'challenge-2-new-3': '➥ Slider on pure CSS',
      'challenge-3': 'My third challenge - Stage 1 + self-study',
      'challenge-3-text': 'My examples: in progress<',
     
      'hobby-1': '✍ Fitness and dance aerobics',
      'hobby-2': '✍ Vocals',
      'hobby-3': '✍ Traveling with family',
      'hobby-4': '✍ Reading a wide variety of literature',
      'quotes': 'Top 3 my favorite quotes',
      'quotes-1': '✘ The road will be mastered by those who walk.',
      'quotes-2': '✘ Show me a man who has never made a mistake and I will show you a man who has never achieved much.',
      'quotes-3': '✘ By giving up the phrase “I don’t have time,” you will soon realize that you have time for almost everything you consider necessary to do in life.',
      'contacts': 'Contacts',
      'edu': 'Education',
      'edu-job-1': 'Quality manager',
      'edu-address-1': 'BNTU | Minsk, Belarus',
      'edu-job-2': 'Advanced training: Translator and referent in the field of professional communication',
      'edu-address-2': 'Academy of Postgraduate Education | Minsk, Belarus',
      'lang': 'Languages',
      'lang-ru': 'Russian | Native',
      'lang-en': 'English | B1',
      'skills': 'Skills',
      'footer': 'my github',
    },
    'ru': {
        'en': 'англ',
        'ru': 'рус',
      'name': 'Ирина Буклей',
      'open': 'Открыта для предложений и новых проектов',
      'job': 'Ирина Буклей | Младший фронтенд разработчик',
      'about': 'Обо мне',
      'about-descr-1': 'Активно изучаю Фронтенд разработку прямо сейчас!',
      'about-descr-2': 'Моя профессиональная мотивация - развиваться в области разработки как во Фронтенд, так и в Бэкенд.',
      'about-descr-3': 'Мне нравится приносить пользу людям, создавать удобные интерфейсы.',
      'experience': 'Профессиональый опыт',
      'experience-text': '(пока лишь на учебных проектах)',
      'code-example': 'Пример кода:',
      'challenge-1': 'Мой первый челлендж - Stage 0 + самообучение',
      'challenge-1-text': 'Мои первые сверстанные сайты: ',
      'challenge-new': 'Что интересного для себя:',
      'challenge-achievement': 'Мои достижения:',
      'challenge-1-new-1': '➥ HTML',
      'challenge-1-new-2': '➥ Адаптивная верстка',
      'challenge-1-new-3': '➥ Функционал на JS',
      'challenge-2': 'Мой второй челлендж - Stage 0.5 Bootcamp + самообучение',
      'challenge-2-new-1': '➥ CSS: переменные',
      'challenge-2-new-2': '➥ CSS: вложенность',
      'challenge-2-new-3': '➥ лайден на чистом CSS',
      'challenge-3': 'Мой третий челлендж - Stage 1 + самообучение',
      'challenge-3-text': 'Мои примеры: в процессе',

      'hobby-1': '✍ Фитнес и танцевальная аэробика',
      'hobby-2': '✍ Вокал',
      'hobby-3': '✍ Путешествия с семьей',
      'hobby-4': '✍ Чтение самой разнообразной литературы',
      'quotes': 'Топ-3 мои любимые цитаты',
      'quotes-1': '✘ Дорогу осилит идущий',
      'quotes-2': '✘ Покажите мне человека, который никогда не ошибался, и я покажу вам человека, который никогда многого не добивался',
      'quotes-3': '✘ Отказавшись от фразы «у меня нет времени», вы скоро поймете, что у вас есть время практически для всего, что вы посчитаете нужным сделать в жизни.',
      'contacts': 'Контакты',
      'edu': 'Образование',
      'edu-job-1': 'Менеджер по качеству',
      'edu-address-1': 'БНТУ | Минск, Беларусь',
      'edu-job-2': 'Повышение квалификации: Переводчик референт в сфере профессиональной коммуникации',
      'edu-address-2': 'Академия последипломного образования | Минск, Беларусь',
      'lang': 'Языки',
      'lang-ru': 'Русский | Носитель',
      'lang-en': 'Английский | B1',
      'skills': 'Навыки',
      'footer': 'МОЙ ГИТХАБ',
    }
  }

 // translate
function getTranslate(lang) {
    const elems = document.querySelectorAll('[data-i18]'); 
    const objKeysEn = i18Obj.en;
    const objKeysRu = i18Obj.ru;
    elems.forEach( (elem) => {
        let currentElem = elem.getAttribute('data-i18');
        for(let key in objKeysEn){
            if(currentElem === key){
                if(lang === ru) {
                    elem.textContent = objKeysRu[key];
                }else {
                    elem.textContent = objKeysEn[key];
                }
            }
        }
    })
}

let enBtn = document.querySelector('#en');
let ruBtn = document.querySelector('#ru');

ruBtn.addEventListener('click', () => {
    getTranslate(ru);
    document.querySelector('.ru').classList.add('active');
    document.querySelector('.en').classList.remove('active');
});
enBtn.addEventListener('click', () => {
    getTranslate(en);
    document.querySelector('.en').classList.add('active');
    document.querySelector('.ru').classList.remove('active');
});

// navigation color

const aboutEl = document.getElementById('about');
const contactsEl = document.getElementById('contacts');
const eduEl = document.getElementById('edu');
const skillsEl = document.getElementById('skills');
const aboutNavEl = document.getElementById('nav-about');
const contactsNavEl = document.getElementById('nav-contacts');
const eduNavEl = document.getElementById('nav-edu');
const skillsNavEl = document.getElementById('nav-skills'); 

aboutNavEl.addEventListener('click', () => coloredTitle (aboutEl));
contactsNavEl.addEventListener('click', () => coloredTitle (contactsEl));
eduNavEl.addEventListener('click', () => coloredTitle (eduEl));
skillsNavEl.addEventListener('click', () => coloredTitle (skillsEl));

function coloredTitle (title) {
    title.style.backgroundColor = "#e9e773";
    title.style.width = "fit-content";
        title.style.margin = "1rem 0 0.5rem auto";
    setTimeout(() => {
        title.style.backgroundColor = "";
        title.style.width = "";
        title.style.margin = "1rem 0 0.5rem 0";
    }, 2000);
}