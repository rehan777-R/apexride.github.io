// src/pages/sign in/signin.js
//
// Real Firebase Authentication - Sign In (Email/Password + Google + Forgot Password).

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signinForm');
    const errorBox = document.getElementById('authError');
    const successBox = document.getElementById('authSuccess');
    const googleBtn = document.getElementById('googleSignInBtn');
    const forgotBtn = document.getElementById('forgotPasswordBtn');
    const submitBtn = document.getElementById('signinSubmitBtn');

    const showError = (message) => {
        successBox.classList.add('hidden');
        errorBox.textContent = message;
        errorBox.classList.remove('hidden');
    };

    const showSuccess = (message) => {
        errorBox.classList.add('hidden');
        successBox.textContent = message;
        successBox.classList.remove('hidden');
    };

    const hideMessages = () => {
        errorBox.classList.add('hidden');
        successBox.classList.add('hidden');
    };

    const friendlyError = (code) => {
        switch (code) {
            case 'auth/invalid-email':
                return 'Please enter a valid email address.';
            case 'auth/user-not-found':
            case 'auth/wrong-password':
            case 'auth/invalid-credential':
                return 'Incorrect email or password.';
            case 'auth/too-many-requests':
                return 'Too many attempts. Please try again later.';
            case 'auth/popup-closed-by-user':
                return 'Google sign-in was cancelled.';
            case 'auth/missing-email':
                return 'Please enter your email address first.';
            default:
                return 'Something went wrong. Please try again.';
        }
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            hideMessages();

            const email = document.getElementById('signinEmail').value.trim();
            const password = document.getElementById('signinPassword').value;

            submitBtn.disabled = true;
            submitBtn.textContent = 'Signing In...';

            auth.signInWithEmailAndPassword(email, password)
                .then(() => {
                    window.location.href = '../../../index.html';
                })
                .catch((error) => {
                    showError(friendlyError(error.code));
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Sign In';
                });
        });
    }

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            hideMessages();
            auth.signInWithPopup(googleProvider)
                .then(() => {
                    window.location.href = '../../../index.html';
                })
                .catch((error) => {
                    showError(friendlyError(error.code));
                });
        });
    }

    if (forgotBtn) {
        forgotBtn.addEventListener('click', () => {
            hideMessages();
            const email = document.getElementById('signinEmail').value.trim();

            if (!email) {
                showError('Please enter your email address first, then click "Forgot password?" again.');
                return;
            }

            auth.sendPasswordResetEmail(email)
                .then(() => {
                    showSuccess(`Password reset link sent to ${email}. Please check your inbox.`);
                })
                .catch((error) => {
                    showError(friendlyError(error.code));
                });
        });
    }
});
