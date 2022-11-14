export const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 300); // fake async
  },
  signOut(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 300);
  },
};
