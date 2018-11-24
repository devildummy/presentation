const videosOnPageCounter = (width = parseInt(document.documentElement.clientWidth, 10)) => {
  let videosOnPageCount;

  if (width >= 1300) {
    videosOnPageCount = 4;
  } else if (width >= 768) {
    videosOnPageCount = 2;
  } else {
    videosOnPageCount = 1;
  }

  return videosOnPageCount;
};

export { videosOnPageCounter as default };
