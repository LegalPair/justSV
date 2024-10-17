<script>
    export let dark;
    import { goto } from '$app/navigation';
</script>

<div class="flex items-center gap-4">
    <button class="specialBtnDark" on:click={() => goto('/auth')}>
        <p class="text-base sm:text-lg md:text-xl">Get Started for Free &rarr;</p>
    </button>
    <button class={"specialBtn " + (dark ? " bg-[#181b34]" : " ")} on:click={() => goto('/contact')}>
        <p class="text-base sm:text-lg md:text-xl">LEARN MORE</p>
    </button>
</div>

<style>
    .specialBtn {
        padding: 0.5rem 1rem;
        border: 2px solid #6978ff; /* Outline same color as Get Started for Free button */
        background-color: white; /* White background */
        color: #6978ff; /* Text color same as the outline */
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    .specialBtn:hover {
        background-color: #6978ff; /* Background color changes to blue on hover */
        color: white; /* Text color changes to white on hover */
    }

    .specialBtnDark {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.25rem;
        background-color: #6978ff; /* Adjust to the exact blue color */
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .specialBtnDark:hover {
        background-color: #4d56ff; /* Darker blue on hover */
    }
</style>
