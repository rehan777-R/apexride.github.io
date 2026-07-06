// src/constants/auth-nav.js
//
// Har page ke navbar mein "Sign In" / "Sign Up" links ko login state ke
// mutabiq update karta hai. Jab user logged in ho to naam show hota hai
// aur "Sign Up" button "Logout" ban jata hai.

document.addEventListener("DOMContentLoaded", () => {
    if (typeof auth === "undefined") return;

    const signInLink = document.getElementById('navSignIn');
    const signUpLink = document.getElementById('navSignUp');

    if (!signInLink || !signUpLink) return;

    // Original hrefs save karna taake logout ke baad wapas restore ho sakein
    if (!signInLink.dataset.originalHref) {
        signInLink.dataset.originalHref = signInLink.getAttribute('href');
    }
    if (!signUpLink.dataset.originalHref) {
        signUpLink.dataset.originalHref = signUpLink.getAttribute('href');
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            // Logged in - naam dikhana aur Sign Up ko Logout mein badalna
            const displayName = user.displayName || (user.email ? user.email.split('@')[0] : 'Account');

            signInLink.textContent = `Hi, ${displayName}`;
            signInLink.removeAttribute('href');
            signInLink.classList.add('cursor-default');
            signInLink.classList.remove('hover:bg-blue-50');

            signUpLink.textContent = 'Logout';
            signUpLink.setAttribute('href', '#');
            signUpLink.onclick = (e) => {
                e.preventDefault();
                auth.signOut().then(() => {
                    window.location.reload();
                });
            };
        } else {
            // Logged out - default state wapas dikhana
            signInLink.textContent = 'Sign In';
            signInLink.setAttribute('href', signInLink.dataset.originalHref);
            signInLink.classList.remove('cursor-default');
            signInLink.classList.add('hover:bg-blue-50');

            signUpLink.textContent = 'Sign Up';
            signUpLink.setAttribute('href', signUpLink.dataset.originalHref);
            signUpLink.onclick = null;
        }
    });
});
