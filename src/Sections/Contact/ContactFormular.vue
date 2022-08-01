<template>
    <form @submit="sendEmail">
        <div class="inputs"> 
            <swiping-text class="toLeft delay2"><label for="name">Imię i nazwisko<input ref="name" id="name" name="name" type="text"></label></swiping-text>
            <swiping-text class="toLeft delay2"><label for="email">Adres e-mail <input ref="email" id="email" name="email" type="email"></label></swiping-text>
            <swiping-text class="toLeft delay2"><label for="number"><span>Number telefonu </span><span class="number-info">Numer telefonu jest opcjonalny</span><input ref="number" id="number" name="number" type="number"></label></swiping-text>
            <swiping-text class="toLeft delay2"><label for="message">Wiadomość<textarea ref="message" name="message"></textarea></label></swiping-text>
        </div>
        <div class="form-confirmation">
            <button type="submit">
                <btn class="form-button" type="submit">
                    <template #slot1>
                        Wyślij wiadomość 
                    </template>
                    <template #slot2>
                        <v-icon name="la-telegram-plane" fill="black" scale="1.5"/>
                    </template>
                </btn>
            </button>
            <p class="form-button-info">Klikając przycisk „Wyślij wiadomość” wyrażasz zgodę na naszą Politykę Prywatności.</p>
        </div>
    </form>

        <div class="form-additional-info">
            <span class="form-additional-title">
                <Slideup class="toLeft">Jeśli wolisz wyślij nam maila </Slideup>
                <Slideup class="toLeft"><UnderText style="cursor: pointer" @click="setPopup">bezpośrenio.</UnderText></Slideup>
            </span>
            <div class="form-additional-content">
                <div>
                    <Slideup class="toLeft">emotivan@outlook.com</Slideup>
                    <br>
                    <Slideup class="toLeft">Wystartuj.</Slideup>
                    <Slideup class="toLeft">Rozpocznij.</Slideup>
                    <Slideup class="toLeft">Przekonaj się.</Slideup>
                </div>
                <div>
                    <Slideup class="toLeft">
                        Tarnów
                    </Slideup>
                    <Slideup class="toLeft">
                        Małopolska
                    </Slideup>
                    <Slideup class="toLeft">
                        Polska
                    </Slideup>
                </div>
                <div>
                    <Slideup class="toLeft">
                        WhatsApp: <a href="tel:+48514010099"><under-text>+48 514 010 099</under-text></a>
                    </Slideup>
                    <Slideup class="toLeft">
                        LinkedIn: <a href="https://www.linkedin.com/in/micha%C5%82-sukiennik-108a2b225" target="_blank"><under-text>www.linkedin.com/me</under-text></a>
                    </Slideup>
                    <Slideup class="toLeft">
                        Facebook: <a href="https://www.facebook.com/Michalsukiennikk/" target="_blank"><under-text>www.facebook.com/me</under-text></a>
                    </Slideup>
                </div>
            </div>
        </div>
    <Popup><template #copy>Udało ci się skopiować nasz adres e-mail <v-icon name="co-copy" fill="white" scale="3"></v-icon></template></Popup>
    <Popup><template #email>Wysyłanie <img class="email-loader" src="@/assets/email-loader.svg" alt=""></template></Popup>
</template>

<script setup>
import Btn from '@/components/Btn.vue';
import SwipingText from '@/components/SwipingText.vue';
import UnderText from '@/components/UnderText.vue';
import Slideup from '@/components/Slideup.vue';
import Popup from '@/components/Popup.vue'
import emailjs from 'emailjs-com'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core';
import { ref } from 'vue';

// EMAIL
const name = ref(null);
const email = ref(null);
const number = ref(null);
const message = ref(null);

const store = useStore()

const setPopup = () => {
    store.commit('setPopup')
    navigator.clipboard.writeText('emotivan@outlook.com');
}

const sendEmail = (e) => {
    e.preventDefault();
    store.commit('setPopupResponse', true);
    emailjs.sendForm('service_7lt5rhh', 'template_gyz1omo', e.target, 'CyhVFctLLtdeDva5l')
    .then(() => {
        store.commit('setPopupResponse', false);
        name.value.value = ''
        email.value.value = ''
        number.value.value = ''
        message.value.value = ''
    }, (error) => {
        console.log('FAILED...', error.text);
    });
}
onMounted(() => {
    gsap.to('.inputs input', {
        borderColor: 'black',
        delay: 1.75,
    })

    gsap.to('.inputs input', {
        delay: 0.75,
        backgroundColor: 'white'
    })

    gsap.to('.inputs textarea', {
        borderColor: 'black',
        delay: 1.75,
    })

    gsap.to('.inputs textarea', {
        delay: 0.75,
        backgroundColor: 'white'
    })

    gsap.from('.form-confirmation > *', {
        y: '30%',
        autoAlpha: 0,
        stagger: 0.1,
        delay: 1,
        duration: 0.3
    }) 
})

</script>

<style scoped lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 5rem;

        @media screen and (max-width: 786px) {
          gap: 2rem;
        }
    }

    label {
        font-size: 2rem;
        margin-top: 1rem;
        display: flex;
        align-items: flex-start;
        position: relative;
        flex-direction: column;

        @media screen and (max-width: 786px) {
            font-size: 1.5rem;
            width: 100%;
        }

        input, textarea {
            background-color: #eff0f3;
            border: 2px solid transparent;
            padding: 0.5rem 1rem;
            outline: none;
            transition: 0.3s;
            caret-color: #e16162;
            margin: 0 1rem;
            border-radius: 0;
            max-height: 300px;

            @media screen and (max-width: 786px) {
              margin: 0;
              width: 100%;
            }

            &::-webkit-inner-spin-button, 
            &::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
            }

            &:focus {
                background-color: #f9bc69 !important;
            }
        }

        .form-underline {
            display: block;
            text-align: center;
            font-size: 1rem;
            width: 100%;
            margin: 0 auto;
            margin-top: 1rem;
            text-decoration: underline;
        }

    }

    .form-confirmation {
        display: flex;
        justify-content: center;
        flex-direction: column;

        button {
            margin-top: 4rem;
            outline: none;
            border: 0;
            background: none;
            padding: 0;
        }

        > * {
            visibility: hidden;
        }
        .form-button {
            display: flex;
            justify-content: center;
        }

        .form-button-info {
            display: block;
            text-align: center;
            font-size: 1rem;
            width: 100%;
            margin: 0 auto;
            margin-top: 1rem;
        }
    }

    .number-info {
        position: absolute;
        bottom: 5px;
        font-size: 0.8rem;
        left: 0;

        @media screen and (max-width: 786px) {
            bottom: unset;
            top: 5px;
            font-size: 0.8rem;
            right: 0;
            left: unset;
        }       
    }

    .form-additional-info {
        margin-top: 10rem;

        .form-additional-title {
            font-size: 4rem;
            width: 80%;
            font-weight: 600;

            @media screen and (max-width: 786px) {
                font-size: 2rem;
                width: 100%;
                line-height: 3.5rem; 
            }
        }

        .form-additional-content {
            display: flex;
            flex-direction: column;
            gap: 5rem;
            margin-top: 3rem;
            font-size: 2rem;

            @media screen and (max-width: 786px) {
              font-size: 1.5rem
            }
        }
    }

    .email-loader {
        width: 3rem;
    }
</style>