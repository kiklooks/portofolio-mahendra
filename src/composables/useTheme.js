import { ref, onMounted } from "vue";

const theme = ref("light");

export function useTheme() {

    const applyTheme = (value) => {

        theme.value = value;

        document.documentElement.setAttribute(
            "data-theme",
            value
        );

        localStorage.setItem("theme", value);

    };

    const toggleTheme = () => {

        applyTheme(
            theme.value === "light"
                ? "dark"
                : "light"
        );

    };

    onMounted(() => {

        const saved =
            localStorage.getItem("theme") || "light";

        applyTheme(saved);

    });

    return {

        theme,

        toggleTheme

    };

}