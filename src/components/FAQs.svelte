<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    let faqs = [
        {
            question: "How can we assist you?",
            ans: "We assist you in finding suitable lawyers by providing recommendation reports tailored to your needs with standardized and visualized data, ensuring you know which lawyers are the best fit for you and why. Our chatbot also offers concise and summarized information for your convenience."
        },
        {
            question: "Why is maintaining a non-biased stance crucial for clients?",
            ans: "When seeking help with finding professional services, you often encounter service retailers or case brokers. Service retailers help professionals find clients for a fee, while case brokers collect potential clients and sell them to professionals. This can lead to clients getting matched with unsuitable professionals. We aim to provide a new, unbiased approach."
        },
        {
            question: "What guarantees do we provide?",
            ans: "We guarantee that the information in our reports is accurate according to our sources. However, we cannot guarantee the authenticity of the publicly accessible information itself, nor can we endorse it. We also cannot guarantee satisfaction with legal services provided by lawyers and firms, as we do not offer legal services ourselves."
        },
        {
            question: "Do we market for law firms?",
            ans: "No, we do not engage in marketing for law firms. We gather lawyers’ information from public sources or directly from firms and lawyers to provide unbiased recommendations. We only cooperate with firms to obtain more detailed information, which is clearly marked. Our website has no marketing promotions."
        },
        {
            question: "How do we protect your data?",
            ans: "We are registered with the Information Commissioner's Office and adhere to regulations to keep your information confidential. We do not store your uploaded files/documents or use your data to train our chatbot. If you have any concerns, please contact us for assistance."
        }
    ];
</script>

<SectionWrapper id="faqs">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                For all your questions, qualms & queries
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Frequently Asked Questions
            </h3>
        </div>
        <div class="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">
            {#each faqs as faq}
                <div
                    class="flex flex-col gap-2 text-left max-w-[800px] w-full mx-auto relative p-4 px-6"
                >
                    <div
                        class="absolute top-0 left-0 w-1/3 h-[1px] bg-slate-950 -translate-x-4"
                    ></div>
                    <div
                        class="absolute top-0 left-0 h-2/3 w-[1px] bg-slate-950 -translate-y-4"
                    ></div>
                    <h4 class="text-lg sm:text-xl md:text-2xl pt-2">
                        {faq.question}
                    </h4>
                    <p class="pl-2">{faq.ans}</p>
                </div>
            {/each}
        </div>
    </div>
</SectionWrapper>
