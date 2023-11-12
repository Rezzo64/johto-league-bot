import { db } from './database.js';

export async function saveNewWeeks(length, seasonNumber) {
    const weekQuery = 'INSERT INTO week (number, season) VALUES'.concat(
        Array(6).fill('').map((_, i) => `\n(${i + 1}, ${seasonNumber})`).join(',')
    );
    
    await db.run(weekQuery);
}