let themeValue =
  localStorage.getItem("theme") ??
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

function setPreference(themeValue) {
  localStorage.setItem("theme", themeValue);
  reflectPreference(themeValue);
}

function reflectPreference(themeValue) {
  document.firstElementChild?.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Check if the body element exists before using getComputedStyle
  if (document.body) {
    const bgColor = window.getComputedStyle(document.body).backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference(themeValue);

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference(themeValue);
  });

window.addEventListener("load", () => {
  function setThemeFeature() {
    // set on load so screen readers can get the latest value on the button
    reflectPreference(themeValue);

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference(themeValue);
    });
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
});
