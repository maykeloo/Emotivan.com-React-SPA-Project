<template>
    <form action="">
        <div class="inputs"> 
            <swiping-text class="toLeft"><label for="">Nazywam się <input type="text"></label></swiping-text>
            <swiping-text class="toLeft"><label for="">Mój adres e-mail to <input type="email"></label></swiping-text>
            <swiping-text class="toLeft"><label for="">Mój numer telefonu składa się z następujących cyfr <input type="number"></label></swiping-text>
            <swiping-text class="toLeft"><label for=""><span class="form-underline">ale wcale nie muszę go podawać</span></label></swiping-text>
        </div>
        <div class="form-confirmation">
        <Slideup>
            <btn class="form-button">
                <template #slot1>
                    Wyślij wiadomość 
                </template>
                <template #slot2>
                    <v-icon name="la-telegram-plane" fill="black" scale="1.5"/>
                </template>
            </btn>
            </Slideup>  
            <Slideup>
            <p>Klikając przycisk „Wyślij wiadomość” wyrażasz zgodę na naszą Politykę Prywatności.</p>
            </Slideup>  
        </div>

        <div class="form-additional-info">
            <Slideup class="toLeft">
                <span class="form-additional-title">Jeśli wolisz wyślij nam maila <UnderText style="cursor: pointer" @click="setPopup">bezpośrenio.</UnderText></span>
            </Slideup>
            <div class="form-additional-content">
                <div>
                    <Slideup class="toLeft">
                            <p>emotivan@outlook.com</p>
                    </Slideup>
                    <Slideup class="toLeft">
                            <p>Wystartuj. <br> Rozpocznij. <br> Przekonaj się.</p>
                    </Slideup>
                </div>
                <div>
                    <Slideup class="toLeft">
                        <p>Tarnów</p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>Małopolska</p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>Polska</p>
                    </Slideup>
                </div>
                <div>
                    <Slideup class="toLeft">
                        <p>WhatsApp: <a href="tel:+48514010099"><under-text>+48 514 010 099</under-text></a></p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/micha%C5%82-sukiennik-108a2b225" target="_blank"><under-text>www.linkedin.com/me</under-text></a></p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>Facebook: <a href="https://www.facebook.com/Michalsukiennikk/" target="_blank"><under-text>www.facebook.com/me</under-text></a></p>
                    </Slideup>
                </div>
            </div>
        </div>
    </form>
    <Popup>Udało ci się skopiować nasz adres e-mail <v-icon name="co-copy" fill="white" scale="3"></v-icon></Popup>
</template>

<script setup>
import Btn from '@/components/Btn.vue';
import SwipingText from '@/components/SwipingText.vue';
import UnderText from '@/components/UnderText.vue';
import Slideup from '@/components/Slideup.vue';
import Popup from '@/components/Popup.vue'

import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core';

const store = useStore()

const setPopup = () => {
    store.commit('setPopup')
    navigator.clipboard.writeText('emotivan@outlook.com');
}

onMounted(() => {
    gsap.to('.inputs input', {
        borderColor: 'black',
        delay: 2
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

        input {
            background: white;
            border: 1px solid transparent;
            padding: 0.5rem 1rem;
            outline: none;
            transition: 0.3s;
            caret-color: #e16162;
            margin: 0 1rem;
            border-radius: 0;

            @media screen and (max-width: 786px) {
              margin: 0;
            }

            &::-webkit-inner-spin-button, 
            &::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
            }

            &:focus {
                background: #f9bc69;
            }
        }

        .form-underline {
            font-style: italic;
            text-decoration: underline;
        }

    }

    .form-confirmation {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .form-button {
            margin-top: 4rem;
            display: flex;
            justify-content: center;
        }

        > p {
            display: block;
            text-align: center;
            font-size: 1rem;
            width: 100%;
            margin: 0 auto;
            margin-top: 1rem;
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
        }
    }
</style>