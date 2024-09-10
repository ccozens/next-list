// imports
import { type NextRequest } from 'next/server'

// revalidate using ISR
export const revalidate = 60

// // set database to use
const setDatabase = async () => {
	await database.sql`USE DATABASE svelte_lists.sqlite`;
};

await setDatabase();

// fetch data
export async function GET(request: NextRequest) {

}