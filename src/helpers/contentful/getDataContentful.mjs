import contentful from 'helpers/contentful/contentful.js';

export default async function getDataContentful(query, getAll) {
	let entries;
	if (getAll) {
		entries = await contentful
			.getEntries({
				content_type: query
			})
			.then(entries => {
				// Do some clean-up: Make sure we only return "fields" and not the "sys" bits
				const _entries = entries.items;
				Object.keys(_entries).forEach(key => {
					if (_entries[key].fields) {
						_entries[key] = _entries[key].fields;
						Object.keys(_entries[key]).forEach(innerKey => {
							if (_entries[key][innerKey].fields) {
								_entries[key][innerKey] = _entries[key][innerKey].fields;
							}
						});
					}
				});

				return _entries;
			})
			.catch(error => console.warn(error));
	} else {
		entries = await contentful
			.getEntry(query)
			.then(entries => {
				// Do some clean-up: Make sure we only return "fields" and not the "sys" bits
				// const _entries = entries.items.map(entry => {
				// 	return entry.fields;
				// });

				const _entries = entries.fields;
				Object.keys(_entries).forEach(key => {
					if (_entries[key].fields) {
						_entries[key] = _entries[key].fields;
					}
				});

				return _entries;
			})
			.catch(error => console.warn(error));
	}

	return entries;
}
