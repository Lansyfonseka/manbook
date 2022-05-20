export default {
  beforeMount(el, binding) {
    const clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.body.addEventListener("click", clickOutsideEvent);
  }
}