function cleanText(t) {
  return t.trim();
}

function capitalize(t) {
  const cleaned = cleanText(t).toLowerCase();
  return cleaned[0].toUpperCase() + cleaned.slice(1);
}

function formatDisplayName(firstName, lastName) {
  const cleanFirst = capitalize(firstName);
  const cleanLast = capitalize(lastName);

  return `${cleanFirst} ${cleanLast}`;
}

// Test Log
console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));
