export function convertToSlug(str: string) {
    // Remove accents and convert to lowercase
    const lowerCaseStr = str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
    // Replace spaces and special characters with hyphens
    return lowerCaseStr.replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').trim();
  }