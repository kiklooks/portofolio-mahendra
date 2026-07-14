import { ref, onMounted, onUnmounted } from "vue";

export function useScrollSpy() {

    const activeSection = ref("")

    const sections = [
        "about",
        "skills",
        "experience",
        "projects",
        "github",
        "contact"
    ]

    const onScroll = () => {

        let current = ""

        sections.forEach(id => {

            const section = document.getElementById(id)

            if (!section) return

            const top = section.offsetTop - 120
            const height = section.offsetHeight

            if (
                window.scrollY >= top &&
                window.scrollY < top + height
            ) {

                current = id

            }

        })

        activeSection.value = current

    }

    onMounted(() => {

        window.addEventListener("scroll", onScroll)

        onScroll()

    })

    onUnmounted(() => {

        window.removeEventListener("scroll", onScroll)

    })

    return {

        activeSection

    }

}