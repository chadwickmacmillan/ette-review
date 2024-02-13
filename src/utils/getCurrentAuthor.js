export const getCurrentAuthor = (authors, slug) =>
	authors.filter((obj) => obj.slug === slug)[0];

