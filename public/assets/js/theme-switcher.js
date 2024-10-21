document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("theme-switcher");
  const themeOptions = themeSwitcher.querySelectorAll("li");

  // Get current theme from local storage or default to 'default'
  const currentTheme = localStorage.getItem("theme") || "default";
  document.documentElement.className = currentTheme;

  themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedTheme = option.getAttribute("value");
      document.documentElement.className = selectedTheme;
      localStorage.setItem("theme", selectedTheme);
    });
  });
});
