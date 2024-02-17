<script lang="ts" setup>
  const withdrawModal = ref(false)
  const confirmModal = ref(false)
  const editModal = ref(false)
  const formData = ref("")

  const transcations = [
    { type: "Cash Widthdrawal", date: "24th April 2024", ammount: "4,000" },
    { type: "Cash Widthdrawal", date: "24th April 2024", ammount: "4,000" },
    { type: "Cash Widthdrawal", date: "24th April 2024", ammount: "4,000" },
    { type: "Cash Widthdrawal", date: "24th April 2024", ammount: "4,000" },
    { type: "Cash Widthdrawal", date: "24th April 2024", ammount: "4,000" }
  ]

  const bankDetails = [
    { value: "Okoro Redemption", label: "Account Name" },
    { value: "Keystone Bank", label: "Bank Name" },
    { value: "6042720661", label: "Account Number" }
  ]

  async function handleInitWithdrawal(data: any) {
    formData.value = JSON.stringify(data)
    withdrawModal.value = false
    confirmModal.value = true
  }

  async function handleConfirmWithdrawal(data: any) {
    formData.value = JSON.stringify(data)
    confirmModal.value = false
  }

  async function handleEditDetails(data: any) {
    formData.value = JSON.stringify(data)
    editModal.value = false
  }
</script>

<template>
  <Page title="My Wallet">
    <PageHeading
      heading="My Wallet"
      sub-heading="Below is a full financial details of your profile"
    />

    <UiBlock>
      <UiCard class="w-full">
        <UiCardHeader
          class="flex flex-row items-center justify-between space-y-0"
        >
          <UiCardTitle
            class="flex gap-2 items-center text-xs md:text-sm font-medium"
          >
            <div class="i-tabler-wallet size-6" />
            <span>Wallet Balance</span>
          </UiCardTitle>

          <ui-button
            @click="withdrawModal = true"
            icon="i-tabler-cash-banknote"
            label="Widthdraw Cash"
          />
        </UiCardHeader>

        <UiCardContent class="!pt-0 p-4 md:p-5">
          <p class="text-xl md:text-2xl font-extrabold">₦3,000,000</p>
        </UiCardContent>
      </UiCard>
    </UiBlock>

    <div w="full" grid="~ cols-1 md:cols-2 gap-x-7 gap-y-10">
      <!-- Transcations -->
      <UiInfoBlock heading="Transcations">
        <div flex="center">
          <UiList class="py-0 space-y-7">
            <template v-for="n in transcations">
              <UiListItem class="items-start p-0">
                <div flex-shrink="0" mt="0.5" size="5" class="i-tabler-cash" />
                <UiListContent>
                  <UiListTitle class="lt-md:text-xs" :title="n.type" />
                  <UiListSubtitle :subtitle="n.date" />
                </UiListContent>
              </UiListItem>
            </template>
          </UiList>
        </div>
      </UiInfoBlock>

      <!-- Bank Details -->
      <UiInfoBlock heading="Bank Details">
        <template #extra>
          <ui-button
            @click="editModal = true"
            variant="link"
            label="Edit Details"
            icon="i-tabler-pencil"
          />
        </template>
        <div flex="center">
          <UiList class="py-0 space-y-7">
            <template v-for="n in bankDetails">
              <UiListItem class="items-start p-0">
                <div
                  flex-shrink="0"
                  mt="0.5"
                  size="5"
                  class="i-mingcute-bank-line"
                />
                <UiListContent>
                  <UiListTitle class="lt-md:text-xs" :title="n.value" />
                  <UiListSubtitle :subtitle="n.label" />
                </UiListContent>
              </UiListItem>
            </template>
          </UiList>
        </div>
      </UiInfoBlock>
    </div>

    <!-- Withdrawal Modal -->
    <LazyUiModal
      v-model="withdrawModal"
      title="Widthdraw Cash"
      description="Withraw funds to your bank account"
    >
      <FormKit
        type="form"
        @submit="handleInitWithdrawal"
        submit-label="Continue"
      >
        <div w="full" space-y="7">
          <FormKit
            type="cinput"
            ctype="number"
            label="Amount"
            name="amount"
            placeholder="Enter amount you wish to withdraw"
            validation="required"
          />

          <FormKit
            type="cselect"
            label="Account Details"
            name="account"
            placeholder="Select recipiant bank account details"
            count="6"
            :options="['Okoro Redemption (UBA)', 'Okoro Redemption (FCMB)']"
            validation="required"
          />
        </div>
      </FormKit>
    </LazyUiModal>

    <!-- Bank Details Modal -->
    <LazyUiModal
      v-model="editModal"
      title="Edit Bank Details"
      description="Edit bank details for withdrawals"
    >
      <FormKit type="form" @submit="handleEditDetails" submit-label="Confirm">
        <div w="full" space-y="7">
          <FormKit
            type="cinput"
            ctype="number"
            label="Account Number"
            name="accountNo"
            placeholder="Enter your account number here"
            validation="required|length:10"
          />

          <FormKit
            type="cselect"
            label="Bank Name"
            name="bankName"
            placeholder="Select corresponding bank name"
            :options="['Keystone Bank', 'UBA', 'FCMB', 'Wema']"
            validation="required"
          />
        </div>
      </FormKit>
    </LazyUiModal>

    <!-- Confirm Withdrawal Modal -->
    <LazyUiConfirmModal v-model="confirmModal" no-footer>
      <div w="full" flex="~ col center gap-4" text="center">
        <h1 text="lg" font="bold">Confirm Withdrawal</h1>

        <p text="sm">
          Withdraw <b>N50000</b> to <b>Okoro Redemption</b> of
          <b>Keystone Bank</b> with account no. <b>6043720661</b>
        </p>

        <UiGradientDivider />

        <div space-y="2" text="center">
          <p text="sm">Enter OTP to confirm transaction</p>
          <UiPinInput :input-count="6" placeholder="0" />
          <ui-button variant="link" label="Resend OTP" />
        </div>

        <div flex="center gap-2">
          <ui-button
            @click="confirmModal = false"
            variant="secondary"
            label="Cancel"
          />
          <ui-button @click="handleConfirmWithdrawal" label="Confirm" />
        </div>
      </div>
    </LazyUiConfirmModal>
  </Page>
</template>
