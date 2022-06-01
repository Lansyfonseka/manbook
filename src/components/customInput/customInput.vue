<template>
  <div class="custom-input">
    <input :type="type || 'text'" class="custom-input__input" :placeholder="label">
    <label class="custom-input__label">{{label}}</label>
  </div>
</template>

<script>
import './customInput.scss';

export default {
  props: {
    type: String,
    label: String,
    errorClass: Boolean    
  }  
}
</script>