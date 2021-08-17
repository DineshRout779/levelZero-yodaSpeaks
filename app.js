const btnTranslate = document.querySelector('#btn-translate');
const textInput = document.querySelector('#inputText');
const textOutput = document.querySelector('#outputText');

const url = 'https://api.funtranslations.com/translate/yoda.json';

const getTranslationUrl = (text) => {
  return url + `?text=${text}`;
};

const handleClick = () => {
  text = textInput.value;

  fetch(getTranslationUrl(text))
    .then((response) => response.json())
    .then((responseData) => {
      textOutput.textContent = responseData.contents.translated;
    })
    .catch((err) => console.log(err));
};

btnTranslate.addEventListener('click', handleClick);
