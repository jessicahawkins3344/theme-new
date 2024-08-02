<template>
    <form data-aos="fade-left" data-aos-delay="400" >
        <div class="mb-4">
            <input class="transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary" type="text" placeholder="Subject">
        </div>
        <div class="mb-4">
            <input class="transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary" type="text" placeholder="Name">
        </div>
        <div class="mb-4">
            <input class="transition-all ease-in-out w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary" type="email" placeholder="name@example.com">
        </div>
        <div class="mb-4"><textarea class="transition-all ease-in-out w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none focus:ring-2 ring-primary" type="text" placeholder="Message..."></textarea></div>
        <div class="flex justify-between items-center">
            <label>
            <input class="mr-1" type="checkbox" name="terms" value="1"><span class="text-sm font-semibold">I agree to terms and conditions.</span>
            </label>
            <button class="inline-block px-10 py-4 text-white font-semibold tracking-tight bg-primary hover:opacity-80 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" type="submit">Submit</button>
        </div>
    </form>
</template>

<script scroped>

</script>

<style scoped>

</style>