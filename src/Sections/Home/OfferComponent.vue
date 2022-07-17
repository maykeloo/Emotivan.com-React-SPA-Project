<template>
  <video-compontent></video-compontent>
  <div class="container-offer">
  <Slideup>
    <h2 class="title">But what can I do for you?</h2>
  </slideup>
    <div class="panel panel1">
      <div>
        <h2>World Wide Web</h2>
        <p>
          As you know, I create websites and this is my main job. I will create for you a business site, a blog or a place where you can contact your clients.
          <br>
          <br>
          I will move you or your business to the digital world.
        </p>
      </div>
      <img src="@/assets/www.svg" alt="" />
    </div>
    <div class="panel panel2">
      <img src="@/assets/service.svg" alt="" />
      <div>
        <h2>Customer Services</h2>
        <p>
          If you need me, I am available at any time, anywhere. You can talk to me, ask questions. 
          <br>
          <br>
          I will be your guide through this process.
        </p>
      </div>
    </div>
    <div class="panel panel3">
      <div>
        <h2>Implementation</h2>
        <p>
          I will take care of your website's existence on the web by hosting it, buying a domain or servicing it.
          <br>
          <br>
          You don't have to be afraid if you don't know anything about it. 
        </p>
      </div>
      <img src="@/assets/implement.svg" alt="" />
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

gsap.registerPlugin(ScrollTrigger)
const store = useStore()

const gsapAnimation = () => {
  if(store.state.route == 'home') {
  gsap.utils.toArray(".panel").forEach((block, index) => {
        ScrollTrigger.create({
          trigger: block,
          start: "top 40% top-=50%",
          end: "bottom-=30%",
          onEnter: () => {
            if(index === 0) {
              document.body.style = "background: #eff0f3 !important; color: black !important"
            } else if(index === 1) {
              document.body.style = "background: #abd1c6 !important; color: black !important"
              } else if(index === 2) {
              document.body.style = "background: #e16162 !important; color: #eff0f3 !important"
            }
          },
          onEnterBack: () => {
            if(index === 0) {
              document.body.style = "background: #eff0f3 !important; color: black !important"
            } else if(index === 1) {
              document.body.style = "background: #abd1c6 !important; color: black !important"
              } else if(index === 2) {
              document.body.style = "background: #e16162 !important; color: #eff0f3 !important"
            }
          },
          onLeaveBack: () => {
            if(index === 0) {
              document.body.style = "background: #004643 !important; color: #eff0f3 !important"
            }
          },
          onLeave: () => {
            if(index === 2) {
              document.body.style = "background: #004643 !important; color: #eff0f3 !important"
            }
          }
        });
        ScrollTrigger.create({
          trigger: block,
          start: "top 40% top-=50%",
          end: "bottom-=30%",
          once: true,
          onEnter: () => gsap.from(block, {y: 100, duration: 0.6, ease: "power4", autoAlpha: 0})
        });
    });
  }
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
  font-size: 5rem;
}
.panel1 {
  margin-top: 5rem;
}
.panel {
  display: flex;
  padding-bottom: 10rem;
  gap: 5rem;
  visibility: hidden;

  p {
    font-size: 3rem;  
    transition: 0.3s;
  }
  @media screen and (max-width: 786px) {
    flex-direction: column-reverse;
    font-size: 2rem;
    justify-content: flex-end;
    gap: 1rem;
  }

  h2 {
    font-size: 4rem;

    @media screen and (max-width: 786px) {
      margin: 0;
      font-size: 3rem;
    }
  }

  img {
    width: 40%;

    @media screen and (max-width: 786px) {
      width: 65%;
      margin: 0 auto;
    }
  }
}
</style>