export const useDarkMode = () => {
  const colorMode = useColorMode()

  function toggleColorMode() {
    colorMode.preference == "light"
      ? (colorMode.preference = "dark")
      : (colorMode.preference = "light")
  }

  const isDark = computed(() => colorMode.value == "dark")

  return { isDark, toggleColorMode }
}
