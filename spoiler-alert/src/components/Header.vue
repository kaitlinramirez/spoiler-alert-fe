<template>
    <header>
        <div>
            <b-navbar class="navbar" type="light" variant="light" fixed="top">
                <h1>Spoiler Alert!</h1>
                <Login />
            </b-navbar>
        </div>
    </header>
</template>

<script>
import Login from '@/components/Login'
export default {
  components: {
    Login
  }
}
</script>

<style>

</style>
