<template>
    <form action="">
        <swiping-text class="toLeft"><label for="">Nazywam się <input type="text"></label></swiping-text>
        <swiping-text class="toLeft"><label for="">Mój e-mail to <input type="email"> , mój numer</label></swiping-text>
        <swiping-text class="toLeft"><label for="">telefonu składa się z następujących cyfr <input
                    type="number"></label></swiping-text>
        <swiping-text class="toLeft"><label for=""><span class="form-underline">ale wcale nie muszę go
                    podawać</span></label></swiping-text>

        <div class="form-confirmation">
            <btn class="form-button">
                <template #slot1>
                    Wyślij wiadomość 
                </template>
                <template #slot2>
                    <v-icon name="la-telegram-plane" fill="#eff0f3" scale="1.5"/>
                </template>
            </btn>
            <p>By clicking on “Send Inquiry” button, you agree to our Privacy Policy, and allow BB Agency to use this information for marketing purposes.</p>
        </div>

        <div class="form-additional-info">
            <Slideup class="toLeft">
                <span class="form-additional-title">If you prefer, <UnderText>send us an email</UnderText></span>
            </Slideup>
            <Slideup class="toLeft">
                <span class="form-additional-title">for new business opportunities or job openings.</span>
            </Slideup>
            <div class="form-additional-content">
                <div>
                    <Slideup class="toLeft">
                            <p>emotivan@outlook.com</p>
                    </Slideup>
                    <Slideup class="toLeft">
                            <p>New business, general and press.</p>
                    </Slideup>
                </div>
                <div>
                    <Slideup class="toLeft">
                        <p>51500 Krk</p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>51500 Krk</p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>51500 Krk</p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>51500 Krk</p>
                    </Slideup>
                </div>
                <div>
                    <Slideup class="toLeft">
                        <p>51500 Krk</p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>51500 Krk</p>
                    </Slideup>
                    <Slideup class="toLeft">
                        <p>51500 Krk</p>
                    </Slideup>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import Btn from '@/components/Btn.vue';
import SwipingText from '@/components/SwipingText.vue';
import UnderText from '@/components/UnderText.vue';
import Slideup from '@/components/Slideup.vue';

</script>

<style scoped lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 5rem;
    }

    label {
        font-size: 2rem;

        input {
            background: #abd1c6;
            padding: 1rem;
            border: 0;
            outline: none;
            transition: 0.3s;
            caret-color: #e16162;
            margin: 0 1rem;

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
            font-size: 1.2rem;
            width: 75%;
            margin: 0 auto;
            margin-top: 1rem;
        }
    }

    .form-additional-info {
        margin-top: 10rem;

        .form-additional-title {
            font-size: 5rem;
            width: 80%;
            font-weight: 600;

            @media screen and (max-width: 786px) {
                font-size: 3rem;
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