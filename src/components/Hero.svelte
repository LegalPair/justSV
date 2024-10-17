<script>
    import CtAs from "./CTAs.svelte";
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
</script>

<SectionWrapper>
    <Header />
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <h2
            class="text-5xl sm:text-6xl md:text-7xl lg:text-6xl max-w-[1200px] mx-auto w-full text-center font-semibold"
        >
            <span class="text-indigo-400">We help you find suitable lawyers.</span><br/>
            <span class="text-indigo-400">Smarter, Easier, and Trustworthy</span>
        </h2>
        <p
            class="text-xl sm:text-2xl md:text-2xl text-center max-w-[1000px] mx-auto w-full"
        >
        We use AI technology to help you find suitable lawyers and any other legal information you will need. <span
                class="italic"
                >We are not a broker - this means we do not sell you to service providers, nor collaborate with them to sign with you.</span>
        </p>
        <CtAs />
    </div>
</SectionWrapper>
