/**
 * Created by Suny on 7/6/16.
 */
app.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})
.constant('USER_ROLES', {
    admin: 'admin',
    manager: 'manager',
    developer: 'developer',
    tester: 'tester',
    guest: 'guest'
});