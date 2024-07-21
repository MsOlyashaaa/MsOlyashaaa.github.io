/**
 * **Replaces placeholders in a string template with gender-specific values, considering the capitalization of the first letter**.
 * @param gender - The gender value used for replacement (e.g., 'male' or 'female'). If null, no replacements are made.
 * @returns The template string with placeholders replaced by the appropriate gender-specific terms, adjusting the capitalization of the first letter based on the placeholder.
 */


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
