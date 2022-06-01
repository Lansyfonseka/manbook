<template>
  <div class="custom-field-container">
    <div class="custom-field-container__setting">
      <select name="type" id="field-type" v-model="type" @change="setNewType">
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        <option value="checkbox">Checkbox</option>      
      </select>
      <input name="selected" id="selected" v-model="title" placeholder="Field name" @input="setNewTitle">
    </div>
    <button class="custom-field-container__delete button-bad" @click.prevent="deleteField">Delete</button>
  </div>
</template>

<script>
import './customField.scss'

export default{
  props: {
    idField: Number,
    typeField: String,
    titleField: String
  },
  data() {
    return {
      title: this.titleField,
      type: this.typeField
    }
  },
  methods: {
    deleteField() {
      this.$emit('deleteField', this.idField);
    },
    setNewTitle() {
      this.$emit('changeFieldTitle', this.title, this.idField)
    },
    setNewType() {
      this.$emit('changeFieldType', this.type, this.idField)
    }
  }
}
</script>
