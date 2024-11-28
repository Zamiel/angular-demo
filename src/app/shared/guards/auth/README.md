### AuthGuard

This guard is there to insure the activation of a route only when we logged in.<br>
If no auth is found in the cookie, then we redirect the client to the login page.

```aiignore
  if (!authService.isLoggedIn) {
    return router.parseUrl('/login');
  }
```

