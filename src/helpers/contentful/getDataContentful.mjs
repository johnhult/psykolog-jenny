import contentful from 'helpers/contentful/contentful.js';

export default async function getDataContentful(query, getAll, options, includeSys) {
	let entries;
	if (getAll) {
		let settings = {
			content_type: query,
			...options
		};
		entries = await contentful
			.getEntries(settings)
			.then(entries => {
				// Do some clean-up: Make sure we only return "fields" and not the "sys" bits
				console.log(entries);
				const _entries = entries.items;
				_entries.totalItems = entries.total;
				Object.keys(_entries).forEach(key => {
					if (_entries[key].fields) {
						if (!includeSys) {
							_entries[key] = _entries[key].fields;
						}
						Object.keys(_entries[key]).forEach(innerKey => {
							if (_entries[key][innerKey].fields) {
								if (!includeSys) {
									_entries[key][innerKey] = _entries[key][innerKey].fields;
								}
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
