<script lang="ts" setup>
  const { isDark, toggleColorMode } = useDarkMode()
  function signout() {}

  function toggleTheme(e: any) {
    e.preventDefault()
    toggleColorMode()
  }

  const menuitems = [
    {
      title: "Profile",
      icon: "i-mingcute-user-1-line",
      action: () => navigateTo("/dashboard/profile")
    },
    {
      title: "Settings",
      icon: "i-tabler-settings",
      action: () => navigateTo("/dashboard/settings")
    },
    { title: "Sign out", icon: "i-tabler-logout", action: () => signout() }
  ]
</script>

<template>
  <div class="flex items-center justify-center">
    <LazyUiDropdownMenu>
      <UiDropdownMenuTrigger>
        <UiAvatar fallback="OR" text="xs" />
      </UiDropdownMenuTrigger>

      <UiDropdownMenuContent class="w-max" align="right" :align-offset="10">
        <div p="2" w="full" flex="~ items-center gap-2">
          <UiAvatar fallback="OR" class="text-xs" />
          <div space-y="1">
            <h3 text="xs" font="semibold">Okoro Redemption</h3>
            <p text="xxs content-mute" font="medium">
              okororedemption24@gmail.com
            </p>
          </div>
        </div>

        <UiDropdownMenuSeparator />

        <UiDropdownMenuItem
          v-for="item in menuitems"
          class="text-xs font-semibold"
          :icon="item.icon"
          :title="item.title"
          @click="item.action"
        />

        <!-- Toggle Theme Option -->
        <UiDropdownMenuItem
          class="text-xs font-semibold"
          :icon="isDark ? 'i-mingcute-moon-line' : 'i-mingcute-sun-line'"
          :title="`${isDark ? 'Dark' : 'Light'} Mode`"
          @select="toggleTheme"
        />
      </UiDropdownMenuContent>
    </LazyUiDropdownMenu>
  </div>
</template>
