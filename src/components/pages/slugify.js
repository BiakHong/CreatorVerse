export const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace spaces and special characters with hyphens
      .replace(/^-+|-+$/g, '');    // Remove leading or trailing hyphens
  };