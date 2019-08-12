/* eslint-disable no-undef */

export default async function sendData(endpoint, data) {
	const RESPONSE = await fetch(endpoint, {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		method: 'POST',
		body: JSON.stringify(data)
	});

	return RESPONSE;
}
