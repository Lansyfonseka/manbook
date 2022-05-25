<template>
  <div class="custom-field-container">
    <select name="type" id="field-type" v-model="selected">
      
      <option value="string">String</option>
      <option value="number">Number</option>
      <option value="date">Date</option>
      <option value="checkbox">Checkbox</option>      
    </select>
    <input :type="selected" name="selected" id="selected">
  </div>
</template>

<script>
import './customField.scss'
export default{
}
</script>
