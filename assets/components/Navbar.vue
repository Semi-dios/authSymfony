<template>
        <div>
            <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>

                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Sing" right>
                    <b-dropdown-item to="/login">Login</b-dropdown-item>
                    <b-dropdown-item to="/register">Register</b-dropdown-item>
             
                </b-nav-item-dropdown>

           
                </b-navbar-nav>
            </b-navbar>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>