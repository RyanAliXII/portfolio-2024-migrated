type Themes = "dark" | "light";
/*
    Get theme from localstorage. The theme value should only be 'light' and 'dark'. 
    If the theme is unset or incorrect value, 'dark' will be the theme.
*/
const getTheme = () => {
  const storageTheme = localStorage.getItem("theme");
  //
  if (storageTheme != "dark" && storageTheme != "light") return "dark";
  return storageTheme;
};
/*  
    Change the theme by adding or removing class 'dark' in <html> tag then
    save the the state of the theme in localstorage.
    see https://tailwindcss.com/docs/dark-mode
*/
const changeTheme = (theme: Themes) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  return theme;
};

const toggle = () => {
  const theme = getTheme();
  const newTheme = theme === "light" ? "dark" : "light";
  return changeTheme(newTheme);
};

/*
    Replace the button icon of the theme toggler. 
    If the theme is light, the icon should be a moon else it should be a sun.
*/
const icon = document.createElement("i");
const MoonIconClass = "fas fa-moon";
const SunIconClass = "fas fa-sun";
const replaceTogglerIcon = (currentTheme: Themes) => {
  if (currentTheme === "light") {
    icon.className = MoonIconClass;
  } else {
    icon.className = SunIconClass;
  }
  themeTogglerButton.innerHTML = null;
  themeTogglerButton.append(icon);
};

const themeTogglerButton: HTMLButtonElement = document.querySelector(
  "#themeTogglerButton"
);
themeTogglerButton.addEventListener("click", () => {
  const theme = toggle();
  replaceTogglerIcon(theme);
});

//Determine the theme on page load.
const initTheme = () => {
  const theme = getTheme();
  changeTheme(theme);
  replaceTogglerIcon(theme);
};
initTheme();
