<template>
  <section>
    <slideup>
      <h2>W głowie nowy projekt? <under-text>Zacznijmy!</under-text>
      </h2>
    </slideup>
    <Slideup>
      <btn @click="changePath()">
        <template #slot1>
          Rozpocznij projekt
        </template>
        <template #slot2>
          <v-icon name="ri-chat-smile-2-line" fill="black" scale="1.5" />
        </template>
      </btn>
    </Slideup>
  </section>
</template>

<script>
import Slideup from '@/components/Slideup.vue'
import Btn from '@/components/Btn.vue'
import UnderText from '@/components/UnderText.vue'
export default {
  components: { Slideup, Btn, UnderText },
    methods: {
    changePath() {
        gsap.to('.view *', {
          autoAlpha: 0,
          duration: 0.4,
        })
        setTimeout(() => {
          this.$router.push('/contact')
        }, 500)
      }
  },
}
</script>

<style scoped lang="scss">

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
}
h2 {
    font-weight: 600;
    font-size: 4rem;
    padding-bottom: 0.5rem;
    text-align: center;
    transition: 0.2s;
    margin: 0 auto;
    margin-bottom: 2rem;

    @media screen and (max-width: 786px) {
      font-size: 3.5rem;
    }
}

</style>