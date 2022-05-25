<template>
  <form action="submit" class="new-book">
    <div class="main-information">
      <label for="collection-title">Title:</label>
      <input type="text" id="collection-title" placeholder="Title">

      <label for="collection-description">Description:</label>
      <textarea name="" id="collecion-description" placeholder="Description"></textarea>

      <label for="collection-photo">Photo:</label>
      <input type="text" id="collection-photo" placeholder="Link photo">
    </div>
    <hr>
    <div class="additional-information">
      <customField 
        v-for="(field, index) in customFields"
        :key="index"
        :is="field"
      />
      <div class="additional-information_add-field" @click="addNewCustomField">Add new field</div>
    </div>
  </form>
</template>

<script>
import './createCollectionForm.scss';
import customField from './customField/customField.vue';

export default {
  data () {
    return {
      customFields: []
    }
  },
  components: {
    customField
  },
  methods: {
    addNewCustomField() {
      this.customFields.push(customField)
    }
  }
}
</script>