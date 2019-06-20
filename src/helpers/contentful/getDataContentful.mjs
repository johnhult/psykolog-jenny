import contentful from 'helpers/contentful/contentful.js';

export default async function getDataContentful(query) {
	const entries = await contentful
		.getEntry(query)
		.then(entries => {
			// Do some clean-up: Make sure we only return "fields" and not the "sys" bits
			// const _entries = entries.items.map(entry => {
			// 	return entry.fields;
			// });

			const _entries = entries.fields;
			console.log('ENTRIES', _entries);
			Object.keys(_entries).forEach(key => {
				console.log(_entries[key]);
				if (_entries[key].fields) {
					_entries[key] = _entries[key].fields;
				}
			});

			return _entries;
		})
		.catch(error => console.warn(error));

	return entries;
}
