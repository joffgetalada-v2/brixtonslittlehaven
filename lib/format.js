// Shared formatting helpers.
export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
