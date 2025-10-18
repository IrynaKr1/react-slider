function getArtworks(option) {
  const defaultOption = {
    limit: 15,
    fields: [
      'id',
      'title',
      'image_id',
      'artist_display',
      'date_display',
      'medium_display',
      'description',
      'short_description',
      'credit_line',
    ],
  };

  const realOptions = {
    ...defaultOption,
    ...option,
  };

  const { limit, fields } = realOptions;

  return fetch(
    `https://api.artic.edu/api/v1/artworks?fields=${fields.join(
      ','
    )}&limit=${limit}`
  ).then((response) => response.json());
}
