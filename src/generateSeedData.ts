import {writeFile} from "fs";
import path from "path";

const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateSeedData = (size: number): Array<number> => {
    let seedDataArray = new Array<number>(size);
    for (let i = 0; i < size; i++) {
        seedDataArray[i] = getRandomInt(1, 100);  // Generates random numbers between 1 and 100.
    }
    return seedDataArray;
}

// Usage
const seedData = generateSeedData(10);
const seedPath = path.join(__dirname,
    '..',
    'seed',
    'seedData.ts'
)

writeFile(
    seedPath,
    `export const seedData: number[] = [${seedData}];`,
    err => {
        console.error(err?.message)
    }
)