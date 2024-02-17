<script lang="ts" setup>
  definePageMeta({ layout: "auth" })
</script>

<template>
  <Page :spacing="false" title="Login">
    <div h="100dvh 100vh" flex="col center gap-5">
      <AppLogoFull w="30" />

      <div space-y="10" w="full sm:300px">
        <div space-y="1" text="center">
          <h1 text="2xl" font="bold">Administrative Login</h1>
          <h2 text="xs content-mute" font="semibold">
            Enter your login credentials to continue
          </h2>
        </div>

        <FormKit type="form" submit-label="Continue to account">
          <FormKitMessages />

          <div w="full" my="2" space-y="5">
            <FormKit
              type="cinput"
              ctype="email"
              label="Email Address"
              name="email"
              placeholder="Enter your email address here"
              validation="required"
            />

            <FormKit
              type="cinput"
              ctype="password"
              label="Password"
              name="password"
              placeholder="Enter your password here"
              validation="required"
            />

            <div w="full" text="center xs" space-x="1">
              <span
                >Forgot Password? Please Contact support team for a new
                one</span
              >
            </div>
          </div>
        </FormKit>
      </div>
    </div>
  </Page>
</template>
