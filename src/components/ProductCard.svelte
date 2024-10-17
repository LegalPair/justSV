<script>
    export let index;
    export let productFeature;
    import { goto } from '$app/navigation';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base">
    <div class={"flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10 " + (index % 2 === 1 ? " md:order-2" : " ")}>
        <h4 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10">
            <slot />
        </h4>
        <p>{productFeature.description}</p>
        <div class="flex flex-col gap-3">
            {#each productFeature.featureList as listItem}
                <div class="flex gap-2 items-center">
                    <div class="hexagon">
                        <i class="fa-solid fa-check text-white"></i>
                    </div>
                    <p>{listItem}</p>
                </div>
            {/each}
        </div>
        <div class="flex items-center">
            <button class="specialBtnDark mr-auto font-semibold" on:click={() => goto('/auth')}>
                <p>Try free today &rarr;</p>
            </button>
        </div>
    </div>
    <div class={"flex flex-col dropShadow overflow-hidden rounded-b-lg "}>
        <div class="rounded-t-xl h-8 sm:h-10 bg-white opacity-60 px-3 flex items-center gap-2">
            {#each [1, 2, 3] as i}
                <div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300"/>
            {/each}
        </div>
        <div class="flex flex-col bg-white gap-4 flex-1">
            <img src={productFeature.imgUrl} alt="product-img" />
        </div>
    </div>
</div>

<style>
    .hexagon {
        width: 24px;
        height: 24px;
        background-color: #4d56ff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-right: 8px; /* Ensure consistent spacing */
        flex-shrink: 0;
    }

    .hexagon:before,
    .hexagon:after {
        content: "";
        position: absolute;
        width: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
    }

    .hexagon:before {
        bottom: 100%;
        border-bottom: 7px solid #4d56ff;
    }

    .hexagon:after {
        top: 100%;
        width: 0;
        border-top: 7px solid #4d56ff;
    }

    .flex {
        display: flex;
    }

    .gap-2 {
        gap: 0.5rem;
    }

    .gap-3 {
        gap: 0.75rem;
    }

    @media (max-width: 768px) {
        .hexagon {
            width: 18px;
            height: 18px;
        }

        .hexagon:before,
        .hexagon:after {
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
        }

        .hexagon:before {
            border-bottom: 5px solid #4d56ff;
        }

        .hexagon:after {
            border-top: 5px solid #4d56ff;
        }
    }
</style>
