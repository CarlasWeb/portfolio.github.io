<template>
    <div class="bg-img parallax">
        <Nav/>
        <div class="centered">
            <h1>London Dumpling</h1>
        </div>
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'

    export default {
        name: 'MainImg',
        components: {
            Nav
        }
    }
</script>

<style>
    .bg-img {
        background-image: url("../assets/ld-main-img.png");
        min-height: 90vh;
        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /* Needed to position the navbar */
        /* position: relative; */
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>