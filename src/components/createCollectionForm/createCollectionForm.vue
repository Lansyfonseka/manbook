<template>
  <form action="submit" class="new-book">
    <div class="new-book__main-information grid-container-two-colums">
      <label for="collection-title">Title:</label>
      <input type="text" id="collection-title" placeholder="Title" v-model="bookTitle">
      <label for="collection-description">Description:</label>
      <textarea name="" id="collecion-description" placeholder="Description" v-model="bookDescription"></textarea>
      <label for="collection-photo">Photo:</label>
      <input type="text" id="collection-photo" placeholder="Link photo" v-model="bookPhoto">
    </div>
    <hr class="cute-line">
    <div class="new-book__additional-information">
      <customField 
        v-for="field in bookCustomFields"
        :key="field.id"
        :idField="field.id"
        :typeField="field.type"
        :titleField="field.title"
        @delete-field="removeCustomField"
        @change-field-title="renameCustonField"
        @change-field-type="retypeCustonField"
      />
      <button class="new-book__additional-information_add-field button-good" @click.prevent="addNewCustomField">Add new field</button>
    </div>
      <div class="button-container-right">
        <button class="new-book__save" @click.prevent="saveBook">Save</button>
      </div>      
  </form>
</template>

<script>
import './createCollectionForm.scss';
import customField from './customField/customField.vue';

export default {
  data () {
    return {
      bookTitle: null,
      bookDescription: null,
      bookPhoto: null,
      bookCustomFields: [],
      countFields: 0
    }
  },
  components: {
    customField
  },
  methods: {
    addNewCustomField() {
      const newCustomField = {
        type: 'string',
        title: '',
        id: this.countFields++
      }
      this.bookCustomFields.push(newCustomField)
    },
    removeCustomField(id) {
      this.bookCustomFields = this.bookCustomFields.filter( item => item.id !== id);
    },
    renameCustonField(title, id) {
      const customField = this.bookCustomFields.find( element => element.id === id);
      customField.title = title;
    },
    retypeCustonField(type, id) {
      const customField = this.bookCustomFields.find( element => element.id === id);
      customField.type = type;
    },
    saveBook() {
      console.log('Title: ', this.bookTitle);
      console.log('Description: ', this.bookDescription);
      console.log('Photo: ', this.bookPhoto);
      console.log('Custom fields', this.bookCustomFields);
    }
  }
}
</script>