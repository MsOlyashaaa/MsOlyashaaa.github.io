const createReplacements = (gender: string): Record<string, string> => ({
  gender: gender.toLowerCase(),
  Gender: gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase(),
});

export const replacePlaceholders = (template: string, gender: string | null): string => {
  if (!gender) {
    return template;
  }

  const replacements = createReplacements(gender);

  return template.replace(/\{(\w+)}/g, (_, key) => {
    const replacement = replacements[key];
    return replacement !== undefined ? replacement : `{${key}}`;
  });
};
