export function formatDateString(dateString?: string): string {
  // Check if the input is an empty string
  if (!dateString?.trim()) {
    return 'Invalid Date';
  }

  // Create a new Date object from the string
  const date = new Date(dateString);

  // Check if the Date object is valid
  if (isNaN(date.getTime())) {
   return 'Invalid Date';
  }

  // Get the day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits for day
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
  const year = date.getFullYear();

  // Return the formatted date in dd/mm/yyyy format
  return `${day}/${month}/${year}`;
}

// Example usage
try {
  const formattedDate = formatDateString('2025-02-02');
  console.log(formattedDate); // Output: "02/02/2025"
} catch (error: any) {
  console.error(error.message);
}