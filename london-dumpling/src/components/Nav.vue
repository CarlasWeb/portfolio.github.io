<template>
    
    <div class="container">
        <section class="top-nav">
            <img class="ld-logo" src="../assets/ld-logo.png">
            <input id="menu-toggle" type="checkbox"  />
                <label class='menu-button-container' for="menu-toggle" >
                <div class='menu-button' style="margin-top:35px;"></div>
            </label>
            <ul class="menu">
                <li><a class="nav-link" href="#about">About</a></li>
                <li><a class="nav-link" href="#menus">Menus</a></li>
                <li><a class="nav-link" href="#gallery">Gallery</a></li>
                <li><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
    name: 'Nav'
    }
</script>

<style>
    
    .top-nav {
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        justify-content: space-between;
        /* background-color: var(--primary-color); */
        padding-top: 30px;
    }

    .nav-link {
        text-decoration: none;
        cursor: pointer;
    }

    .nav-link:hover {
        font-weight: 600;
    }

    .menu {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .menu > li {
        margin: 0 1rem;
        overflow: hidden;
    }

    .menu-button-container {
        display: none;
        height: 100%;
        width: 30px;
        cursor: pointer;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #menu-toggle {
        display: none;
    }

    .menu-button,
    .menu-button::before,
    .menu-button::after {
        display: block;
        background-color:#C3C3C3;;
        position: absolute;
        height: 4px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
    }

    .menu-button::before {
        content: '';
        margin-top: -8px;
    }

    .menu-button::after {
        content: '';
        margin-top: 8px;
    }

    #menu-toggle:checked + .menu-button-container .menu-button::before {
        margin-top: 0px;
        transform: rotate(405deg);
    }

    #menu-toggle:checked + .menu-button-container .menu-button {
        background: rgba(255, 255, 255, 0);
    }

    #menu-toggle:checked + .menu-button-container .menu-button::after {
        margin-top: 0px;
        transform: rotate(-405deg);
    }
    .ld-logo {
        max-width: 50px;
        height: auto;
        padding-top: 5px;
    }

    @media only screen and (max-width: 767px){
        .top-nav {
            padding: 1em;
        }

        .iceprivacy-logo {
            max-width: 150px;
        }

        .menu-button-container {
            display: flex;
        }
    
        .menu {
            position: absolute;
            top: 0;
            margin-top: 63px;
            left: 0;
            flex-direction: column;
            width: 100%;
        }

        #menu-toggle ~ .menu li {
            height: 0;
            margin: 0;
            padding: 0;
            border: 0;
            transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        #menu-toggle:checked ~ .menu li {
            height: 3.5em;
            transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .menu > li {
            display: flex;
            justify-content: right;
            margin: 0;
            width: 100%;
            /* background-color: var(--primary-color); */
        }

        .nav-link {
            padding: 20px 20px 0 0;
        }
    }
</style>


