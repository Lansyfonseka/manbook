<template>
  <div class="container settings">
    <h3>Profile</h3>
    <hr class="cute-line">
    <form action="submit" class="settings__info">
      <div class="grid-container-two-colums">
        <!-- <label for="user-name">Name:</label>
        <input type="text" placeholder="New name" id="user-name">
        <label for="user-mail">Mail:</label>
        <input type="text" placeholder="New mail" id="user-mail">
        <label for="user-photo">Photo:</label>
        <input type="text" placeholder="New photo link" id="user-photo"> -->
        <custom-input label="Name"></custom-input>
        <custom-input label="Mail"></custom-input>
        <custom-input label="Photo"></custom-input>
      </div>
      <div class="button-container-right">
        <button class="settings__info_save button-good">Save</button>
      </div>
    </form>
    <h3>Password</h3>
    <hr class="cute-line">
    <form action="submit" class="settings__password">
      <div class="grid-container-two-colums">
        <!-- <label for="user-old-password">Old password:</label>
        <input type="password" placeholder="Old password" id="user-old-password">

        <label for="user-new-password">New password:</label>
        <input type="password" placeholder="New password" id="user-new-password">

        <label for="user-repeate-password">Repeat new password:</label>
        <input type="password" placeholder="Repeat new password" id="user-repeate-password"> -->

        <custom-input label="Old password"></custom-input>
        <custom-input label="New password"></custom-input>
        <custom-input label="Repeat new password"></custom-input>
      </div>
      <div class="button-container-right">
        <button class="settings__info_save button-good">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import './UserSettings.scss';
import customInput from '@/components/customInput/customInput.vue';

export default {
  components: {
    customInput
  }
}
</script>