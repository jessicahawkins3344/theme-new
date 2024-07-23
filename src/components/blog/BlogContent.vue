<template>
    <section class="py-20 px-4 bg-gray-50">
        <div class="container px-8 lg:px-12 mx-auto">
          <div class="relative pt-20 pb-16 mb-12 bg-cover bg-no-repeat rounded-4xl" style="background-image: url('https://s3.us-central-1.wasabisys.com/house-jet/assets/JHawkins/base-img-ca1.png');background-position: center center;">
            <div class="overlay rounded-4xl"></div>
            <div class="max-w-2xl mx-auto px-4 relative">
              <div class="text-center mb-6 z-30">
                <span class="text-xs py-1 px-3 text-primary font-semibold bg-gray-50 rounded-4xl">
                  <a class="text-primary hover:underline" href="#">CATEGORY</a>&nbsp;
                  <span class="text-gray-900">24 Jan, 2020</span>
                </span>
                <h2 class="leading-snug text-3xl md:text-5xl my-2 text-white font-bold font-heading">Curabitur vestibulum odio maximus ipsum</h2>
              </div>
              <div class="flex justify-center">
                <img class="w-12 h-12 object-cover rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
                <div class="pl-4">
                  <p class="text-blueGray-100 mb-1">Alice Bradley</p>
                  <p class="text-xs text-blueGray-200 font-semibold">Author</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto">
            <p class="mb-6 leading-loose text-blueGray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>
            <p class="leading-loose text-blueGray-600">Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt lorem cursus suscipit. Integer scelerisque sem et sem porta, eu volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut fringilla tincidunt, augue diam pretium augue, sit amet vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.</p>
          </div>
        </div>
    </section>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: .5s ease;
  background: linear-gradient(180deg, rgb(0 0 0 / 30%) 26.4%, rgb(2 15 23 / 73%) 54.63%, rgb(6 14 29 / 90%) 81.76%);
}

</style>