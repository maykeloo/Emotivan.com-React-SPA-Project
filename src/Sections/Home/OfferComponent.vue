<template>
  <video-compontent></video-compontent>
  <div class="container-offer">
    <Slideup>
      <h2 class="title">But what can I do for you?</h2>
    </slideup>
    <div class="panels">
      <div class="panel panel1">
        <div>
          <img src="@/assets/www.svg" alt="" />
          <h2>World Wide Web</h2>
          <p>
            As you know, I create websites and this is my main job. I will create for you a business site, a blog or a
            place where you can contact your clients.
            <br>
            <br>
            I will move you or your business to the digital world.
          </p>
        </div>
          <Btn><template #slot1>Przeczytaj więcej</template></Btn>
      </div>
      <div class="panel panel2">
        <div>
          <img src="@/assets/service.svg" alt="" />
          <h2>Customer service</h2>
          <p>
            If you need me, I am available at any time, anywhere. You can talk to me, ask questions.
            <br>
            <br>
            I will be your guide through this process.
          </p>
        </div>
          <Btn><template #slot1>Przeczytaj więcej</template></Btn>
      </div>
      <div class="panel panel3">
        <div>
          <img src="@/assets/implement.svg" alt="" />
          <h2>Implementation</h2>
          <p>
            I will take care of your website's existence on the web by hosting it, buying a domain or servicing it.
            <br>
            <br>
            You don't have to be afraid if you don't know anything about it.
          </p>
        </div>
          <Btn><template #slot1>Przeczytaj więcej</template></Btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, ref } from "@vue/runtime-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slideup from "@/components/Slideup.vue";
import VideoCompontent from "./VideoCompontent.vue";
import { useStore } from 'vuex'
import Btn from "@/components/Btn.vue";

gsap.registerPlugin(ScrollTrigger)
const store = useStore()

const gsapAnimation = () => {
  gsap.utils.toArray(".panel").forEach((block, index) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 40% top-=50%",
          end: "bottom-=30%",
        });
        ScrollTrigger.create({
          trigger: block,
          start: "top 40% top-=50%",
          end: "bottom-=30%",
          once: true,
          onEnter: () => gsap.from(block, {y: 100, duration: 0.5, ease: "power4", autoAlpha: 0, delay: `0.${index}`})
        });
    });
}
onMounted(() => {
    gsapAnimation()
    console.log(store.state.route)
});

watch(
  () => store.state.route,
  (route) => {
    if(route == 'home') {
      gsapAnimation()
    } else {
      ScrollTrigger.disable();
    }
  }
)

</script>

<style scoped lang="scss">
.container-offer {
  margin-top: 10rem;
}
.title {
  font-size: 4rem;

  @media screen and (max-width: 786px) {
    font-size: 3.5rem;
  }
}
.panels {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  align-items: stretch;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.panel1 {
  background: #BEE3DB;
  color: white;
}

.panel2 {
  background: #FAF9F9;
}

.panel3 {
  background: #FFD6BA;
}
.panel {
  display: flex;
  gap: 3rem;
  width: 30%;
  flex-direction: column;
  padding: 2rem;
  align-items: flex-start;
  visibility: hidden;
  justify-content: space-between;

  p {
    font-size: 1.5rem;  
    transition: 0.3s;
    color: black;
    margin: 0;
    margin-top: 2rem;
  }
  @media screen and (max-width: 786px) {
    font-size: 2rem;
    justify-content: flex-end;
    gap: 1rem;
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    color: black;
    margin: 0;
    margin-top: 3rem;
  }

  img {
    height: 10rem;
  }
}
</style>