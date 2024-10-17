<script>
    import "../app.css";
    import CtAs from "../components/CTAs.svelte";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation'; // For handling navigation after login
    
    let y;
    $: outerHeight = 0;

    function reroute(href) {
        setTimeout(() => {
            window.location.href = href;
        }, 100);  // Delay to ensure modal closes before navigation
    }

    onMount(() => {
        // Add any other necessary logic here
    });
</script>

<!-- Mobile Menu -->
{#if false} <!-- Modal logic removed, adapt according to your use case -->
    <div class="mobile-menu md:hidden">
        <button class="close-button">
            ✖️
        </button>
        <a href="/auth" on:click={() => reroute('/auth')} class="login-button">
            <i class="fa fa-user-circle"></i> Log In
        </a>
        <nav class="mobile-nav">
            <a href="/" on:click={() => reroute('/')}>Home</a>
            <a href="/our-team" on:click={() => reroute('/our-team')}>Our Team</a>
            <a href="/subscription" on:click={() => reroute('/subscription')}>Subscription</a>
            <a href="/contact" on:click={() => reroute('/contact')}>Contact Us</a>
            <a href="/#product" on:click={() => reroute('/#product')}>Our Services</a>
        </nav>
        <div class="mobile-auth-buttons">
            <a href="/auth" on:click={() => reroute('/auth')} class="demo-button">START</a>
        </div>
    </div>
{/if}

<!-- Place Header at the top -->
<Header />

<!-- Main content area -->
<main class="mainContainer">
    <slot />
</main>

<Footer />

<svelte:window bind:scrollY={y} bind:outerHeight />

<style>
    .mainContainer {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: 80px; /* Ensure there is enough padding for the header */
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        height: 100%;
        background-color: white;
        z-index: 2000; /* Ensure mobile menu is above the header */
        display: flex;
        flex-direction: column;
        padding: 1rem;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    }

    .mobile-menu .close-button {
        align-self: flex-end;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .login-button {
        font-size: 1rem;
        color: #4d56ff;
        text-decoration: none;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }

    .mobile-nav a {
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid #ccc;
    }

    .mobile-auth-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: auto;
    }

    .demo-button {
        padding: 0.5rem 1rem;
        background-color: #6978ff;
        color: white;
        border-radius: 0.25rem;
        text-align: center;
        transition: background-color 0.3s, color 0.3s;
    }

    .demo-button:hover {
        background-color: #4d56ff;
        color: white;
    }

    @media (min-width: 769px) {
        .mobile-menu {
            display: none;
        }
    }

    header {
        z-index: 1000;
    }
</style>
