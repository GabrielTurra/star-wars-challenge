export function getImageLink(id, title) {
  const imageLink = `${id}-${title.toLowerCase().replace(/ /g, '-')}.jpg`;

  return imageLink;
}
