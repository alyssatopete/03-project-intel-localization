// List of languages that use right-to-left direction
var rtlLanguages = ['ar', 'he', 'fa', 'ur'];

// This function checks the page language and sets the direction
function updateDirection() {
  // Get the language from the <html> tag
  var lang = document.documentElement.lang;
  // If the language is RTL, set dir="rtl", otherwise set dir="ltr"
  if (rtlLanguages.includes(lang)) {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
}

// Run the function when the page loads
updateDirection();

// This watches for changes to the <html> lang attribute
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === 'lang') {
      updateDirection();
    }
  });
});

// Start watching the <html> element for changes
observer.observe(document.documentElement, { attributes: true });

// Now, if the language changes (for example, by Google Translate), the direction will update automatically.
