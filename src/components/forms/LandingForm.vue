<template>
    <div class="max-w-2xl mx-auto text-center px-8 py-16 rounded bg-gray-50">
        <div class="max-w-md mb-8 mx-auto">
            <span class="text-xs py-1 px-3 text-primary font-semibold bg-blue-50 rounded-xl">{{ subheading }}</span>
            <h1 class="mt-2 text-5xl font-bold font-heading leading-tight">{{ headline }}</h1>
            <p class="mt-2">
                {{ description }}
            </p>
        </div>
        <div>
            <form class="removed">
                <div class="mb-4">
                    <input class="w-full p-4 text-xs font-semibold leading-none rounded outline-none" type="text" placeholder="Subject">
                </div>
                <div class="mb-4">
                    <input class="w-full p-4 text-xs font-semibold leading-none rounded outline-none" type="text" placeholder="Name">
                </div>
                <div class="mb-4">
                    <input class="w-full p-4 text-xs font-semibold leading-none rounded outline-none" type="email" placeholder="name@example.com">
                </div>
                <div class="mb-4 removed"></div>
                <div class="mb-4 removed"></div>
                <div class="flex justify-between items-center">
                    <label>
                    <input class="mr-1" type="checkbox" name="terms" value="1">
                    <span class="text-sm font-semibold">I agree to terms and conditions.</span>
                    </label>
                    <button class="py-4 px-8 text-sm text-white font-semibold leading-none bg-primary hover:brightness-120 rounded" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script scoped>
export default {
  name: 'LandingForm',
  props: {
    subheading: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>