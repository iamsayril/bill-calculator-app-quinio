async function requireAuth() {
    const session = await checkAuth();
    if (!session) {
        window.location.href = "html/login.html";
        return false;
    }
    return true;
}

async function initAuth() {
    const session = await checkAuth();
    if (!session) {
        window.location.href = "html/login.html";
    }
    return session;
}

async function redirectIfAuthenticated() {
    const session = await checkAuth();
    if (session) {
        window.location.href = "html/user_dashboard.html";
    }
}

async function checkAuth() {
    try {
        const { data, error } = await supabaseClient.auth.getSession();
        if (error || !data?.session) {
            return null;
        }
        return data.session;
    } catch (error) {
        console.error('Error checking auth:', error);
        return null;
    }
}

async function getCurrentUser() {
    try {
        const { data, error } = await supabaseClient.auth.getUser();
        if (error || !data?.user) {
            return null;
        }
        return data.user;
    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
}

async function handleLogout() {
    try {
        localStorage.removeItem('pending_email');
        
        await supabaseClient.auth.signOut();
        window.location.href = "index.html";
    } catch (error) {
        console.error('Error logging out:', error);
        alert('Error logging out');
    }
}