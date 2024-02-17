<script lang="ts" setup></script>

<template>
  <Page title="Register Lecturer">
    <PageHeading
      heading="Register a Lecturer"
      sub-heading="Register a new lecturer on the portal"
    />

    <UiBlock heading="Fill the form below">
      <FormKit type="form" submit-label="Register Lecturer">
        <div w="full" grid="~ cols-1 md:cols-2 gap-5">
          <FormKit
            type="cselect"
            name="title"
            label="Title"
            :options="['Dr.', 'Mr.', 'Mrs.', 'Miss.', 'Prof.']"
            placeholder="Select lecturer's title here"
            validation="required"
          />

          <FormKit
            type="cinput"
            name="name"
            label="Name"
            placeholder="Enter lecturer's fullname here"
            validation="required"
          />

          <FormKit
            type="cinput"
            ctype="email"
            name="email"
            label="Email Address"
            placeholder="Enter lecturer's email address here"
            validation="required|email"
          />

          <FormKit
            type="cinput"
            ctype="tel"
            name="phoneNo"
            label="Phone Number"
            placeholder="Enter phone number email address here"
            validation="required"
          />

          <FormKit
            type="cselect"
            name="faculty"
            label="Faculty"
            :options="['Science', 'Art']"
            placeholder="Select a faculty for the lecturer"
            validation="required"
          />

          <FormKit
            type="cmultiselect"
            name="department"
            label="Department"
            :options="['Computer Science', 'Architechure', 'Math']"
            placeholder="Select a department for the lecturer"
            validation="required"
          />

          <FormKit
            type="cmultiselect"
            name="course"
            label="Course"
            :options="['CSC101', 'CSC202', 'CSC303']"
            placeholder="Select a course for the lecturer"
            validation="required"
          />
        </div>
      </FormKit>
    </UiBlock>
  </Page>
</template>
