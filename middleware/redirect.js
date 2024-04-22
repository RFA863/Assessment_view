export default function ({ route, redirect }) {
    // Redirect to /assessment/login if the current route is /
    if (route.path === '/') {
        return redirect('/assessment/login')
    }
}