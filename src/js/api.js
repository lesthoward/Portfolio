async function getLanguageTexts() {
	try {
		const url = 'https://api.npoint.io/39a2e7bad3aa723d5b65';
		const request = await fetch(url);
		return await request.json();
	} catch (err) {
		console.log(err);
	}
}

export { getLanguageTexts };
