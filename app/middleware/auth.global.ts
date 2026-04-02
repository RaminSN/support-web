export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn, user } = useOidcAuth();

  if (loggedIn.value || to.path === "/login" || to.path.startsWith("/auth/")) {
    return;
  }

  return navigateTo("/login");
});
