import changingActiveElement from "./functions";

class AudioPlayer {
  constructor(startButton, downloadButton, audioList, previewImage) {
    this.startButton = startButton;
    this.downloadButton = downloadButton;
    this.audioList = audioList;
    this.audio = new Audio();
    this.audiosCurrent = audioList[0];
    this.previewImage = previewImage;
    this.isPlaying = false;
    this.target = document.querySelector(`[data-audio="0"]`);
  }

  initializeAudio(target) {
    if (target) {
      if (target !== this.target) {
        this.target = target;
        this.audiosCurrent = this.audioList[+target.dataset.audio];
        changingActiveElement(target, 'button__audio--active');
        this.audioStart();
      }
    } else {
      if (!this.isPlaying) this.audioStart();
      else this.audioStop();
    }
  }

  audioStart () {
    this.isPlaying = true;
    this.audio.src = `./assets/audio/${this.audiosCurrent}.mp3`;
    this.changePreviewImage();
    this.initializeAudioDownload();
    this.audio.play();
    this.startButton.classList.add('button__control--played');
    this.audio.currentTime = 0;
  }

  audioStop() {
    this.isPlaying = false;
    this.audio.pause();
    this.startButton.classList.remove('button__control--played');
  }

  changePreviewImage() {
    this.previewImage.style.backgroundImage = `url(./assets/img/${this.audiosCurrent}.jpg)`;
  }

  initializeAudioDownload() {
    this.downloadButton.href = `./assets/audio/${this.audiosCurrent}.mp3`;
    this.downloadButton.title = `Download ${this.audiosCurrent}`;
    this.downloadButton.download = `${this.audiosCurrent}`;
  }
}

export default AudioPlayer;