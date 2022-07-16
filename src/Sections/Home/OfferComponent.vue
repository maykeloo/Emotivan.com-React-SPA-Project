<template>
  <div class="container">
    <div class="panel panel1">
      <div>
        <h2>World Wide Web</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat
          inventore repellat ratione provident aut, dolorum est atque magnam?
          <br>
          <br>
          Cupiditate assumenda mollitia magnam placeat, quod laudantium aperiam
          ipsum reiciendis unde tempore laboriosam labore, natus dignissimos
          impedit provident rerum ullam cumque.
        </p>
      </div>
      <img src="@/assets/www.svg" alt="" />
    </div>
    <div class="panel panel2">
      <div>
        <h2>Customer Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat
          inventore repellat ratione provident aut, dolorum est atque magnam?
          <br>
          <br>
          Cupiditate assumenda mollitia magnam placeat, quod laudantium aperiam
          ipsum reiciendis unde tempore laboriosam labore, natus dignissimos
          impedit provident rerum ullam cumque.
        </p>
      </div>
      <img src="@/assets/service.svg" alt="" />
    </div>
    <div class="panel panel3">
      <div>
        <h2>Implementation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat
          inventore repellat ratione provident aut, dolorum est atque magnam?
          <br>
          <br>
          Cupiditate assumenda mollitia magnam placeat, quod laudantium aperiam
          ipsum reiciendis unde tempore laboriosam labore, natus dignissimos
          impedit provident rerum ullam cumque.
        </p>
      </div>
      <img src="@/assets/implement.svg" alt="" />
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

  gsap.utils.toArray(".panel").forEach((block, index) => {
    if (mq) {
      ScrollTrigger.create({
        trigger: block,
        pin: true,
        start: "top-=20%",
        scrub: 0.5,
        onEnter: () => {
          if(index === 0) {
            document.body.style = "background: white; color: black"
          } else if(index === 1) {
            document.body.style = "background: #abd1c6; color: black"
          } else if(index === 2) {
            document.body.style = "background: #e16162; color: white"
          }
        },
        onEnterBack: () => {
          if(index === 0) {
            document.body.style = "background: white; color: black"
          } else if(index === 1) {
            document.body.style = "background: #abd1c6; color: black"
            } else if(index === 2) {
            document.body.style = "background: #e16162; color: white"
          }
        },
        onLeaveBack: () => {
          if(index === 0) {
            document.body.style = "background: #004643; color: white"
          }
        },
        onLeave: () => {
          if(index === 2) {
            document.body.style = "background: #004643; color: white"
          }
        }
      });
    } else {
      ScrollTrigger.create({
        trigger: block,
        pin: true,
        start: "top-=20%",
        scrub: 0.5,
        markers: true,
        onEnter: () => {
          if(index === 0) {
            document.body.style = "background: white; color: black"
          } else if(index === 1) {
            document.body.style = "background: #abd1c6; color: black"
            } else if(index === 2) {
            document.body.style = "background: #e16162; color: white"
          }
        },
        onEnterBack: () => {
          if(index === 0) {
            document.body.style = "background: white; color: black"
          } else if(index === 1) {
            document.body.style = "background: #abd1c6; color: black"
            } else if(index === 2) {
            document.body.style = "background: #e16162; color: white"
          }
        },
        onLeaveBack: () => {
          if(index === 0) {
            document.body.style = "background: #004643; color: white"
          }
        },
        onLeave: () => {
          if(index === 2) {
            document.body.style = "background: #004643; color: white"
          }
        }
      });
    }
  });
});
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  padding-bottom: 10rem;
  font-size: 2rem;
  gap: 5rem;
  @media screen and (max-width: 786px) {
    flex-direction: column-reverse;
    font-size: 1.6rem;
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