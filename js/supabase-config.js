const supabaseUrl = "https://blmfynejuhpjffbihdat.supabase.co";
const supabaseKey = "sb_publishable_gF6VR4z2wNWDt5tNVn5_HA_i5EqDt_2";

const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

async function checkAuth() {
    const {
        data: { session },
        error,
    } = await supabaseClient.auth.getSession();
    if (error) {
        console.error("Error checking auth:", error);
        return null;
    }
    return session;
}

async function getCurrentUser() {
    const {
        data: { user },
        error,
    } = await supabaseClient.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user;
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error("Error signing out:", error);
        return false;
    }
    return true;
}