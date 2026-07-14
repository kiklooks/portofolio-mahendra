import { ref, onMounted, onUnmounted } from "vue";

export function useTyping(words) {

    const text = ref("");

    const deleting = ref(false);

    let wordIndex = 0;

    let charIndex = 0;

    let timer = null;

    function typing() {

        const current = words[wordIndex];

        if (!deleting.value) {

            text.value = current.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === current.length) {

                deleting.value = true;

                timer = setTimeout(typing, 1800);

                return;

            }

        } else {

            text.value = current.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting.value = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        timer = setTimeout(
            typing,
            deleting.value ? 45 : 90
        );

    }

    onMounted(() => typing());

    onUnmounted(() => clearTimeout(timer));

    return {

        text

    }

}