export default function generate(length = 6) {
  // Define the characters allowed in the ID (first char must be a letter)
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";

  // Ensure the first character is a letter
  let id = letters.charAt(Math.floor(Math.random() * letters.length));

  // Add the rest of the characters
  for (let i = 1; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Check if ID already exists in the document
  if (document.getElementById(id)) {
    return generate(length); // Regenerate if the ID is not unique
  }

  return id;
}
