import './scss/style.scss';
import { changeTheme, loadTheme } from './js/theme';
import AudioPlayer from './js/audio';

const PREVIEW_OF_AUDIO = document.querySelector('.main__container');
const AUDIO_BUTTONS_LIST = document.querySelector('[data-audio-buttons]');
const START_BTN = document.querySelector('[data-play]');
const DOWNLOAD_BTN = document.querySelector('[data-download]');
const AUDIOS = ['drozd', 'forest', 'javoronok', 'slavka', 'solovey', 'zarynka'];
const THEME_BTN = document.querySelector('.theme');
const audioPlayer = new AudioPlayer(START_BTN, DOWNLOAD_BTN, AUDIOS, PREVIEW_OF_AUDIO);

START_BTN.addEventListener('click', () => audioPlayer.initializeAudio());

AUDIO_BUTTONS_LIST.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.dataset.audio) audioPlayer.initializeAudio(e.target);
});

document.addEventListener('DOMContentLoaded', () => loadTheme());
THEME_BTN.addEventListener('click', changeTheme);