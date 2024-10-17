<script>
    import ProductCard from "./ProductCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    let productFeatures = [
        {
            featureList: [
                "Upload any file/documents for reference",
                "Save and download your question and Answer",
                "Find suitable solicitor/barrister for you with a detailed report"
            ],
            description: "",
            imgUrl: "assets/imgi.png",
        },
        {
            featureList: [
                "We only use publicly accessible information of lawyers",
                "We never keep your uploaded files or case information",
                "We never use your activities with us, even for training our own models"
            ],
            description: "We do everything to ensure our non-biased position",
            imgUrl: "assets/training.png",
        },
        {
            featureList: [
                "We connect realtime information and exclusive database",
                "We deliver detailed and customised recommendation report"
            ],
            description: "We use OpenAI’s most powerful LLMs to ensure the best and most suitable recommendation results",
            imgUrl: "assets/goal.png",
        },
    ];
</script>

<SectionWrapper id="product">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <div class="flex flex-col gap-2">
            
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Features For Everyone, and Everything
            </h3>
        </div>

        {#each productFeatures as productFeature, index}
            <ProductCard {productFeature} {index}>
                {#if index === 0}
                    File Upload
                {:else if index === 1}
                    <span class="text-indigo-400 font-medium">We do everything to ensure</span>
                    <span class="text-black font-medium"> our non-biased position</span>
                {:else}
                    <span class="text-indigo-400 font-medium">Assistant for legal services search</span>
                    <span class="text-black font-medium"> of this neo-era</span>
                {/if}
            </ProductCard>
        {/each}
    </div>
</SectionWrapper>
