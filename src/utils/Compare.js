export function CompareByCreatedDate(a, b) {
  const dateA = new Date(a.createdDate);
  const dateB = new Date(b.createdDate);

  return dateA - dateB;
}

export function CompareByDate(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  return dateA - dateB;
}