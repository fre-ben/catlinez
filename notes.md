# API Info

## TheCatAPI

Thanks for signing up, welcome to the API!

Your API key:

4ed34816-c19f-4144-9082-b2ffc3df0e40

Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string paramter e.g. 'api_key=4ed34816-c19f-4144-9082-b2ffc3df0e40' More details on authentication.

API Documentation | Postman Collection.

If you need any example code, or have any questions then checkout the forum: https://forum.thatapiguy.com

All the best, Aden.

## Random cat

// Schema von random.cat
export type Cat = {
file: string;
};

export type Cats = {
results: Cat;
};

// Infos die ich brauch von der CatAPI
export type RandomCat = {
imgSrc: string;
};

function convertToImage(randomCat: Cat): RandomCat {
return {
imgSrc: randomCat.file,
};
}

export async function getRandomCat() {
const response = await fetch(`https://aws.random.cat/meow`);
const result = (await response.json()) as Cat;
const test = convertToImage(result);
// const test = result.map((randomCat) => convertToImage(randomCat));
console.log(result);
return test;
}

## Currents Api Token

dRj7MBwlYafKn4RJFGHIM--anhE1w_bpXLYKo7hdZIKJW0eX

https://api.currentsapi.services/v1/latest-news?language=de&apiKey=dRj7MBwlYafKn4RJFGHIM--anhE1w_bpXLYKo7hdZIKJW0eX

## Todo

- Sport news rausfiltern
