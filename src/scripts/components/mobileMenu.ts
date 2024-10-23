// Mobile specific
const mobileMenuBtn = document.querySelector("#mobileMenuBtn") as HTMLElement;
const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
const closeMobileMenuBtn = document.querySelector(
  "#closeMobileMenuBtn"
) as HTMLElement;

const openLangMenuBtn = document.querySelector("#openLangMenuBtn");
const langMenu = document.querySelector(".language-menu") as HTMLElement;

// Function to handle mobile menu functionality
function handleMobileMenu() {
  const toggleHidden = (element: HTMLElement) => {
    element?.classList.toggle("hidden");
  };

  // Add event listeners to toggle the mobile menu's visibility
  mobileMenuBtn.addEventListener("click", () => {
    toggleHidden(mobileNav);
  });

  // Add another event listener to close the mobile menu
  closeMobileMenuBtn.addEventListener("click", () => toggleHidden(mobileNav));

  // Opening language menu on mobile
  openLangMenuBtn?.addEventListener("click", () => {
    toggleHidden(langMenu);
    // Hide mobile menu
    toggleHidden(mobileNav);
  });
}

// Export the mobileMenu function
export { handleMobileMenu };
