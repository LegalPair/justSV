<script>
    let showModal = false;

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }
</script>

<footer class="py-16 sm:py-20 md:py-24 px-4 md:px-8">
    <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base">
        <div class="flex flex-col gap-4 md:col-span-2">
            <h1 class="font-semibold">
                Legal Pair <span class="text-indigo-400">Technology</span>
            </h1>
            <p>©2024 LEGAL PAIR TECHNOLOGY LTD. All rights reserved.</p>
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Support</p>
            <a href="/contact" class="cursor-pointer hover:text-indigo-400 duration-200">
                Contact Us
            </a>
            <a href="/faqs" class="cursor-pointer hover:text-indigo-400 duration-200">
                FAQs
            </a>
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Follow Us</p>
            <!-- Add social media links here -->
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Legal</p>
            <a href="#" class="cursor-pointer hover:text-indigo-400 duration-200">
                Privacy Preferences
            </a>
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: #d1e3fd;
        color: black;
    }

    footer a {
        text-decoration: none;
        color: inherit;
    }

    footer a:hover {
        color: #4d4dff; /* Adjust the hover color to your preference */
    }
</style>
