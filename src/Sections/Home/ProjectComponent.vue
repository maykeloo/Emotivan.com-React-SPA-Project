<template>
<section>
  <slideup>
    <h2 :style="darkMode">Have a project in mind? Let’s get to <under-text :style="darkMode">work!</under-text></h2>
  </slideup>
  <btn :style="darkMode">        
  <template #slot1>
        Start project with me
    </template>
    <template #slot2>
        <v-icon name="ri-chat-smile-2-line" fill="#eff0f3" scale="1.5"/>
    </template></btn>
</section>
</template>

<script>
import Slideup from '@/components/Slideup.vue'
import Btn from '@/components/Btn.vue'
import UnderText from '@/components/UnderText.vue'
export default {
  components: { Slideup, Btn, UnderText },
  computed: {
    darkMode() {
      return {
        color: this.$store.state.dark ? "#eff0f3" : "#0b090a",
        fill: this.$store.state.dark ? "#eff0f3" : "#0b090a",
      };
    },
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
    line-height: 5.25rem;
    font-weight: 600;
    font-size: 5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    transition: 0.2s;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 80%;

    @media screen and (max-width: 786px) {
      width: 100%;
    }
}

.btn {
    color: #eff0f3;
    display: flex;
    gap: 1rem;
    align-items: center;
}
</style>