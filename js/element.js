const cutBack = (number) => {
  let num = parseInt(number, 10);
  if (num > 1000000) {
    num = Math.floor(num / 1000000);
    num += 'M';
  } else if (num > 1000) {
    num = Math.floor(num / 1000);
    num += 'K';
  }
  return num;
};
class Element {
  constructor() {
    this.video = document.createElement('div');
    this.thumbnails = document.createElement('img');
    this.title = document.createElement('a');
    this.channel = document.createElement('a');
    this.description = document.createElement('div');
    this.statistics = document.createElement('ul');
    this.title.setAttribute('target', '_blank');
    this.channel.setAttribute('target', '_blank');
    Object.keys(this).forEach((key) => {
      this[key].classList.add(key);
      if (key !== 'video') {
        this.video.appendChild(this[key]);
      }
    });
    return this;
  }

  fillStatistics(statistics) {
    const faIcons = [
      '<i class="far fa-eye"></i>',
      '<i class="far fa-thumbs-up"></i>',
      '<i class="far fa-thumbs-down"></i>',
      '<i class="far fa-star"></i>',
      '<i class="far fa-comment"></i>',
      '<i class="far fa-calendar-alt"></i>',
    ];
    Object.keys(statistics).forEach((key, i) => {
      const li = document.createElement('li');
      li.classList.add(key);
      li.innerHTML = faIcons[i] + cutBack(statistics[key]);
      this.statistics.appendChild(li);
    });
    this.publishedAt = document.createElement('li');
    this.publishedAt.innerHTML = `${faIcons[5]}${this.publishedDate}`;
    this.statistics.appendChild(this.publishedAt);
    return this;
  }

  fillMain(main) {
    this.thumbnails.src = main.snippet.thumbnails.medium.url;
    this.title.href = `https://www.youtube.com/watch?v=${main.id.videoId}`;
    this.title.textContent = main.snippet.title;
    this.channel.href = `https://www.youtube.com/channel/${main.snippet.channelId}`;
    this.channel.innerHTML = `<i class="fas fa-user-circle"></i>${main.snippet.channelTitle}`;
    this.description.textContent = main.snippet.description;
    const date = main.snippet.publishedAt.slice(0, 10).split('-');
    this.publishedDate = `${date[1]}.${date[0].slice(2)}`;
    return this;
  }

  getElem() {
    return this.video;
  }
}

export { Element as default };
