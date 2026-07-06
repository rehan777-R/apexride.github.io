// src/pages/sign up/signup.js
//
// Real Firebase Authentication - Sign Up (Email/Password + Google).

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signupForm');
    const errorBox = document.getElementById('authError');
    const googleBtn = document.getElementById('googleSignUpBtn');
    const submitBtn = document.getElementById('signupSubmitBtn');

    const showError = (message) => {
        errorBox.textContent = message;
        errorBox.classList.remove('hidden');
    };

    const hideError = () => {
        errorBox.classList.add('hidden');
    };

    const friendlyError = (code) => {
        switch (code) {
            case 'auth/email-already-in-use':
                return 'An account with this email already exists. Try signing in instead.';
            case 'auth/invalid-email':
                return 'Please enter a valid email address.';
            case 'auth/weak-password':
                return 'Password is too weak. Use at least 8 characters.';
            case 'auth/popup-closed-by-user':
                return 'Google sign-in was cancelled.';
            default:
                return 'Something went wrong. Please try again.';
        }
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            hideError();

            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;

            if (password !== confirmPassword) {
                showError("Passwords don't match. Please check and try again.");
                return;
            }
            if (password.length < 8) {
                showError('Password must be at least 8 characters.');
                return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Account...';

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => userCredential.user.updateProfile({ displayName: name }))
                .then(() => {
                    window.location.href = '../../../index.html';
                })
                .catch((error) => {
                    showError(friendlyError(error.code));
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Create Account';
                });
        });
    }

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            hideError();
            auth.signInWithPopup(googleProvider)
                .then(() => {
                    window.location.href = '../../../index.html';
                })
                .catch((error) => {
                    showError(friendlyError(error.code));
                });
        });
    }
});
