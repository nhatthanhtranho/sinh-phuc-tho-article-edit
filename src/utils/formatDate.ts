export function formatDate(date: Date) {
    if (!(date instanceof Date)) {
      // Handle cases where a Date object isn't provided.  Try to convert, or throw an error.
      try {
        date = new Date(date); // Attempt conversion
      } catch (e) {
        console.log(e);
        return "Invalid Date"; // Or handle the error as needed
      }
    }
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }