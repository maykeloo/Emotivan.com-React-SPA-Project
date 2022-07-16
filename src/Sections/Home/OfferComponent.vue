<template>
  <div class="container">
    <div class="panel panel1">
      <img src="@/assets/www.svg" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat
        inventore repellat ratione provident aut, dolorum est atque magnam?
        Cupiditate assumenda mollitia magnam placeat, quod laudantium aperiam
        ipsum reiciendis unde tempore laboriosam labore, natus dignissimos
        impedit provident rerum ullam cumque.
      </p>
    </div>
    <div class="panel panel2">
      <img src="@/assets/www.svg" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat
        inventore repellat ratione provident aut, dolorum est atque magnam?
        Cupiditate assumenda mollitia magnam placeat, quod laudantium aperiam
        ipsum reiciendis unde tempore laboriosam labore, natus dignissimos
        impedit provident rerum ullam cumque.
      </p>
    </div>
    <div class="panel panel3">
      <img src="@/assets/www.svg" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat
        inventore repellat ratione provident aut, dolorum est atque magnam?
        Cupiditate assumenda mollitia magnam placeat, quod laudantium aperiam
        ipsum reiciendis unde tempore laboriosam labore, natus dignissimos
        impedit provident rerum ullam cumque.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const mq = window.matchMedia("(min-width: 786px)");

  gsap.registerEffect({
    name: "slide",
    effect: (targets) => {
      return gsap.from(targets, {
        duration: 0.6,
        y: -10,
      });
    },
  });

  gsap.registerEffect({
    name: "slideup",
    effect: (targets) => {
      return gsap.from(targets, {
        autoAlpha: 0,
        duration: 0.6,
        y: 10,
      });
    },
  });

  gsap.utils.toArray(".panel").forEach((block) => {
    if (mq) {
      ScrollTrigger.create({
        trigger: block,
        pin: true,
        start: "top-=5%",
        scrub: 0.5,
        onEnter: () => {
          gsap.effects.slide(block)
          block.style.visibility = "inherit"  
        },
      });
    } else {
      ScrollTrigger.create({
        trigger: block,
        pin: true,
        start: "top-=20%",
        scrub: 0.5,
        onEnter: () => {
          gsap.effects.slide(block)
          block.style.visibility = "inherit"  
        },
      });
    }
  });
});
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  padding-bottom: 10rem;
  font-size: 3rem;
  gap: 5rem;
  @media screen and (max-width: 786px) {
    font-size: 1.8rem;
    flex-direction: column;
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