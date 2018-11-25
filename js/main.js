import Element from './element';
import YouTube from './youtube';
import createFixElem from './searchInput';
import arrows from './arrows';
import toggleTooltip from './tooltip';
import videosOnPageCounter from './videosOnPage';

const swiper = document.createElement('div');
const youTubeSearch = new YouTube();
const searchElem = createFixElem();
const input = searchElem.children[1];
const { body } = document;
const pageViewer = body.querySelector('.page');
const videosOnLoad = [];
const pageControl = document.createElement('div');
const swiperWrapper = document.createElement('div');
pageControl.classList.add('page-control');
body.appendChild(pageControl);
let activeVideo = 1;
let videosCount = 0;
let activePage = 1;
let pages = 1;
let pageToken = false;
let videosOnPage = 0;

let width = parseInt(document.documentElement.clientWidth, 10);

swiper.classList.add('swiper');
swiperWrapper.classList.add('swiper-wrapper');
swiperWrapper.appendChild(swiper);
body.appendChild(swiperWrapper);
input.autofocus = true;

const searchBy = (query, nextpageToken, options) => {
  youTubeSearch.byQuery(query, nextpageToken, options)
    .then((main) => {
      pageToken = main.nextPageToken;
      Array.from(main.items).forEach((item) => {
        const video = new Element();
        video.fillMain(item);
        videosOnLoad.push(video);
        youTubeSearch.byID(item.id.videoId)
          .then((statistics) => {
            videosOnLoad[0].fillStatistics(statistics.items[0].statistics);
            swiper.appendChild(videosOnLoad[0].getElem());
            const animationTrick = videosOnLoad.shift().getElem();
            videosCount += 1;
            setTimeout(() => {
              animationTrick.style.opacity = 1;
            }, 300);
          });
      });
    });
};
const inputSubmit = () => {
  while (swiper.lastChild) {
    swiper.removeChild(swiper.lastChild);
  }

  pageToken = false;
  activeVideo = 1;
  videosCount = 0;
  activePage = 1;
  pages = 1;

  pageViewer.style.transform = `rotate(${0}deg)`;

  searchElem.classList.add('close');
  input.blur();
  swiper.style.transform = 'translateX(0px)';
  setTimeout(() => {
    pageViewer.textContent = activePage;
  }, 200);

  const query = input.value;
  searchBy(query, pageToken);
};
const fillPageControl = () => {
  while (pageControl.lastChild) {
    pageControl.removeChild(pageControl.lastChild);
  }
  if (pageControl.style.opacity === '0' || pageControl.style.opacity === '') {
    for (let i = 1; i <= pages; i += 1) {
      const elem = document.createElement('div');
      const text = document.createElement('span');
      elem.classList.add('pages');
      text.textContent = i;
      elem.appendChild(text);
      pageControl.appendChild(elem);
    }
    pageControl.style.zIndex = '2';
    pageControl.style.opacity = '1';
    swiper.classList.add('blured');
  } else {
    pageControl.style.opacity = '0';
    swiper.classList.remove('blured');
    setTimeout(() => {
      pageControl.style.zIndex = -1;
    }, 100);
  }
  pageControl.scrollTop = pageControl.scrollHeight;
};
const scroll = (reverse = false) => {
  if ((videosCount - activeVideo) < 12) {
    searchBy(input.value, pageToken);
  }
  setTimeout(() => {
    pageViewer.textContent = activePage;
  }, 200);

  const lastSwiperPosition = parseInt(swiper.style.transform.slice(11), 10) || 0;
  const deg = parseInt(pageViewer.style.transform.slice(7), 10) || 0;

  if (reverse) {
    if (lastSwiperPosition === 0) {
      swiper.style.transform = 'translateX(0px)';
    } else {
      swiper.style.transform = `translateX(${lastSwiperPosition + width}px)`;
      activeVideo -= videosOnPage;
      activePage -= 1;
    }
    pageViewer.style.transform = `rotate(${deg - 360}deg)`;
  } else {
    swiper.style.transform = `translateX(${lastSwiperPosition - width}px)`;
    swiper.style.minWidth = `${parseInt(swiper.style.minWidth, 10) + 100}vw`;
    pageViewer.style.transform = `rotate(${deg + 360}deg)`;
    activeVideo += videosOnPage;
    activePage += 1;
    pages += 1;
  }
};
const lettersOrNums = (keyCode) => {
  let isUsefulSymbol = (keyCode > 45 && keyCode < 90) || keyCode === 8;
  isUsefulSymbol = (keyCode > 103 && keyCode < 112) || isUsefulSymbol;
  isUsefulSymbol = (keyCode > 185 && keyCode < 223) || isUsefulSymbol;
  return isUsefulSymbol;
};
videosOnPage = videosOnPageCounter();
const touchListener = () => {
  let touchstart = 0;
  let touchmove = 0;
  let touchend = 0;
  let savePosition = 0;

  const touchWide = () => {
    const percent = Math.abs((touchmove * 100) / width);
    swiper.style.transform = `translateX(${savePosition}px)`;
    if (percent > 5) {
      scroll(touchstart < touchend);
    }
  };

  const move = (event) => {
    touchend = event.touches[0].screenX;
    touchmove = touchstart - touchend;
    swiper.style.transform = `translateX(${savePosition - (touchmove / 2)}px)`;
  };
  const moveMouse = (event) => {
    touchend = event.screenX;
    touchmove = touchstart - touchend;
    swiper.style.transform = `translateX(${savePosition - (touchmove / 2)}px)`;
  };
  const end = () => {
    swiper.style.transition = 'all 1s';
    touchWide();
    swiperWrapper.removeEventListener('touchmove', move);
    touchstart = 0;
    touchend = 0;
  };
  const start = (event) => {
    touchstart = event.touches[0].screenX;
    touchend = touchstart;
    touchmove = 0;
    savePosition = parseInt(swiper.style.transform.slice(11), 10) || 0;
    swiper.style.transition = 'all 0.1s';
    swiperWrapper.addEventListener('touchmove', move);
  };
  const endMouse = () => {
    swiper.style.transition = 'all 1s';
    touchWide();
    swiperWrapper.removeEventListener('mousemove', moveMouse);
    touchstart = 0;
    touchend = 0;
  };
  const startMouse = (event) => {
    touchstart = event.screenX;
    touchend = touchstart;
    touchmove = 0;
    savePosition = parseInt(swiper.style.transform.slice(11), 10) || 0;
    swiper.style.transition = 'all 0.1s';
    swiperWrapper.addEventListener('mousemove', moveMouse);
  };

  swiperWrapper.addEventListener('touchstart', start);
  swiperWrapper.addEventListener('touchend', end);
  swiperWrapper.addEventListener('touchcansel', end);

  swiperWrapper.addEventListener('mousedown', startMouse);
  swiperWrapper.addEventListener('mouseup', endMouse);
};
const hideElems = (e) => {
  if (!searchElem.contains(e.target)) {
    searchElem.classList.add('close');
    input.blur();
  } else {
    searchElem.classList.remove('close');
    input.focus();
  }
  if (pageControl.contains(e.target) && pageControl !== e.target) {
    swiper.style.transform = `translateX(${-(e.target.textContent - 1) * width}px)`;
    activeVideo = ((e.target.textContent - 1) * videosOnPage) + 1;
    activePage = +e.target.textContent;
    setTimeout(() => {
      pageViewer.textContent = activePage;
    }, 200);
    const deg = parseInt(pageViewer.style.transform.slice(7), 10) || 0;
    pageViewer.style.transform = `rotate(${deg + 360}deg)`;
    fillPageControl();
  }
  if (!pageControl.contains(e.target) && !pageViewer.contains(e.target) && pageControl.style.opacity === '1') {
    fillPageControl();
  }
  toggleTooltip();
};

searchElem.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 && e.target.value) {
    inputSubmit();

    if (!document.querySelector('.controls')) {
      const controls = arrows();
      controls[0].addEventListener('click', () => {
        scroll(true);
      });
      controls[1].addEventListener('click', () => {
        scroll();
      });
      touchListener();
    }
  }
});
body.addEventListener('keydown', (e) => {
  if (!searchElem.contains(e.target) && lettersOrNums(e.keyCode)) {
    searchElem.classList.remove('close');
    input.focus();
  }
});
pageControl.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'SPAN') {
    toggleTooltip(e.target, e.currentTarget);
  }
});
pageControl.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'SPAN') {
    toggleTooltip();
  }
});
body.addEventListener('mouseup', hideElems);
body.addEventListener('touchend', hideElems);
pageViewer.addEventListener('mouseup', fillPageControl);
window.addEventListener('resize', () => {
  if (videosCount) {
    width = parseInt(document.documentElement.clientWidth, 10);
    videosOnPage = videosOnPageCounter();
    activePage = Math.ceil(activeVideo / videosOnPage);
    pages = Math.ceil(videosCount / videosOnPage);
    const translate = (activePage - 1) * width;
    setTimeout(() => {
      pageViewer.textContent = activePage;
    }, 200);
    setTimeout(() => {
      swiper.style.transform = `translateX(${-translate}px)`;
      const deg = parseInt(pageViewer.style.transform.slice(7), 10) || 0;
      pageViewer.style.transform = `rotate(${deg + 360}deg)`;
    }, 2);
  }
});
