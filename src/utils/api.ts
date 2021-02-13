import { ClassificationType } from "typescript";

// Schema von CatAPI
export type Cat = {
  breeds: string[];
  categories: string[];
  id: string;
  url: string;
};

// Infos, die ich brauch von der CatAPI
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
  const result = (await response.json()) as Cat;
  const test = convertToImage(result);
  return test;
}
