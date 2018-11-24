class YouTube {
  constructor() {
    this.API_KEY = 'AIzaSyCdISf55j9mhBorWJrGWFfkvLJPFz0toRg';
    this.URL = 'https://www.googleapis.com/youtube/v3/';
  }

  byQuery(query, pageToken, optionObj) {
    const options = optionObj || {
      type: 'video',
      maxResults: 15,
    };
    let optionsString = '';
    Object.keys(options).forEach((key) => {
      optionsString += `${key}=${options[key]}&`;
    });
    if (pageToken) {
      optionsString += `pageToken=${pageToken}&`;
    }
    optionsString += `part=snippet&q=${query}&key=${this.API_KEY}`;
    return fetch(`${this.URL}search?${optionsString}`).then(answer => answer.json());
  }

  byID(id) {
    let optionsString = '';
    optionsString += `part=statistics&id=${id}&key=${this.API_KEY}`;
    return fetch(`${this.URL}videos?${optionsString}`).then(answer => answer.json());
  }
}

export { YouTube as default };
