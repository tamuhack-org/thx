<script lang="ts">
    export let title: string;
    export let questions: {question: string, answers: string[] }[] = [];
</script>

<div class="flex flex-col lg:flex-row">
    <div class="w-full mb-10 lg:mb-0 lg:w-1/2">
        <h2 id="new-section-title" class="font-semibold text-4xl text-[#192F6D]">
            {title}
        </h2>
    </div>
    <div class="w-full lg:w-1/2">
        {#each questions as item (item.question)}
            <details class="mb-10 text-[#192F6D] relative border-b-[3px] border-opacity-30 border-[#192F6D]">
                <summary class="cursor-pointer text-2xl pr-6 flex justify-between mb-6 font-semibold">
                    {item.question}
                    <img src="/assets/arrow.png" class="arrow h-full w-auto" alt="arrow" />
                </summary>
                <p class="mt-2 text-xl">
                    {#each item.answers as answer}
                        <p class="my-5">{answer}</p>
                    {/each}
                </p>
            </details>
        {/each}
    </div>
</div>

<style>
    details[open] .arrow:not(:focus) {
        transform: rotate(180deg);
    }
</style>