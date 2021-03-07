//TheCatAPI
// Schema von CatAPI
export type Cat = {
  breeds: string[];
  categories: string[];
  id: string;
  url: string;
};

// Infos die ich brauch von der CatAPI
export type RandomCat = {
  imgSrc: string;
};

function convertToImage(randomCat: Cat): RandomCat {
  return {
    imgSrc: randomCat.url,
  };
}

export async function getRandomCat() {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?mime_types=gif`,
    {
      headers: {
        "x-api-key": "4ed34816-c19f-4144-9082-b2ffc3df0e40",
      },
    }
  );
  const result = (await response.json()) as Cat[];
  const test = convertToImage(result[0]);
  console.log(result[0]);
  return test;
}

// News API
// Schema currentsAPI
export type News = {
  status: string;
  news: [
    {
      id: string;
      title: string;
      description: string;
      url: string;
      author: string;
      image: string;
      language: string;
      category: string[];
      published: string;
    }
  ];
  page: number;
};

// Was ich brauch von currentsAPI
export type Headline = {
  headline: string;
  link: string;
};

export function randomNumber() {
  const num = Math.floor(Math.random() * 30);
  return num;
}

function convertToText(headline: News): Headline {
  const randomHeadline = randomNumber();
  return {
    headline: headline.news[randomHeadline].title,
    link: headline.news[randomHeadline].url,
  };
}

export async function getRandomHeadlineGerman() {
  const response = await fetch(
    `https://api.currentsapi.services/v1/latest-news?category=general&language=de&apiKey=dRj7MBwlYafKn4RJFGHIM--anhE1w_bpXLYKo7hdZIKJW0eX`
  );
  const result = (await response.json()) as News;
  const headline = convertToText(result);
  return headline;
}

export async function getRandomHeadlineEnglish() {
  const response = await fetch(
    `https://api.currentsapi.services/v1/latest-news?category=general&apiKey=dRj7MBwlYafKn4RJFGHIM--anhE1w_bpXLYKo7hdZIKJW0eX`
  );
  const result = (await response.json()) as News;
  const headline = convertToText(result);
  return headline;
}
