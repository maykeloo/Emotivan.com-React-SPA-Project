<template>
  <div class="faq-content-wrapper">

    <div class="faq-question-box">
      <div @click="question1 = !question1" class="faq-question-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#faqCollapse1" aria-expanded="false" aria-controls="faqCollapse1">
        <span class="faq-lines-wrapper">
          <span class="faq-line line-one"></span>
          <span class="faq-line line-two" :class="[question1 && 'rotated']"></span>
        </span>
        <span class="faq-question-title">Title of the question, title of the question?</span>
      </div>
      <div class="collapse multi-collapse" id="faqCollapse1">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
          user
          activates the relevant trigger.
        </div>
      </div>
    </div>

    <div class="faq-question-box">
      <div @click="question2 = !question2" class="faq-question-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
        <span class="faq-lines-wrapper">
          <span class="faq-line line-one"></span>
          <span class="faq-line line-two" :class="[question2 && 'rotated']"></span>
        </span>
        <span class="faq-question-title">Title of the question, title of the question?</span>
      </div>
      <div class="collapse multi-collapse" id="faqCollapse2">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
          user
          activates the relevant trigger.
        </div>
      </div>
    </div>

    <div class="faq-question-box">
      <div @click="question3 = !question3" class="faq-question-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
        <span class="faq-lines-wrapper">
          <span class="faq-line line-one"></span>
          <span class="faq-line line-two" :class="[question3 && 'rotated']"></span>
        </span>
        <span class="faq-question-title">Title of the question, title of the question?</span>
      </div>
      <div class="collapse multi-collapse" id="faqCollapse3">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
          user
          activates the relevant trigger.
        </div>
      </div>
    </div>

    <div class="faq-question-box">
      <div @click="question4 = !question4" class="faq-question-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
        <span class="faq-lines-wrapper">
          <span class="faq-line line-one"></span>
          <span class="faq-line line-two" :class="[question4 && 'rotated']"></span>
        </span>
        <span class="faq-question-title">Title of the question, title of the question?</span>
      </div>
      <div class="collapse multi-collapse" id="faqCollapse4">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
          user
          activates the relevant trigger.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
          question1: false,
          question2: false,
          question3: false,
          question4: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';

.faq-content-wrapper {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media screen and (max-width: 786px) {
    width: 100%;
  }
  .faq-question-button {
    display: flex;
    align-items: center;
    color: black;

    .faq-lines-wrapper {
      position: relative;
      .faq-line {
        width: 20px;
        top: 50%;
        left: 0;
        height: 2px;
        background: black;
        display: block;
        position: absolute;

        &.line-two {
          transform: rotate(90deg);
          transition: 0.2s;
          &.rotated {
          transform: rotate(0deg);
          }
        }
      }
    }

    .faq-question-title {
      font-size: 3rem;
      font-weight: 600;
      margin-left: 40px;

      @media screen and (max-width: 786px) {
        font-size: 1.8rem;
      }
    }
  }

  .card {
    background: #eff0f3;
    border: 0;
    border-radius: 0;
    padding: 1rem 0;
    color: black;
    font-size: 1.5rem;
    margin-left: 40px;
    }

}
</style>