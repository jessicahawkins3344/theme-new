<template>
    <section class="relative py-24 lg:py-28 lg:pb-36 overflow-hidden border-b-2">
        <div class="container px-8 lg:px-12 mx-auto">
            <div class="flex flex-wrap max-w-7xl mx-auto -m-3">
                <TeamCard
                    v-for="(member, index) in members"
                    :key="index"
                    :image="member.image"
                    :name="member.name"
                    :title="member.title"
                    :bio="member.bio"
                />
            </div>
        </div>
    </section>
</template>

<script>
import TeamCard from './TeamCard.vue';

export default {
  name: 'TeamMembers',

  components: {
    TeamCard
  },

  data() {
    return {
        members: [
            {
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60',
            name: 'Julie Thompson',
            title: 'CEO',
            bio: 'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
            },
            {
            image: 'https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60',
            name: 'Thomas Moore',
            title: 'Director',
            bio: 'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
            },
            {
            image: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60',
            name: 'Ann Jones',
            title: 'CFO',
            bio: 'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
            },
            {
            image: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60',
            name: 'Ann Jones',
            title: 'CFO',
            bio: 'Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.'
            },
            
        ]
    };
  }
}
</script>

<style scoped>
</style>