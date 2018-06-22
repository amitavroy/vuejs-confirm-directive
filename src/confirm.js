import Vue from 'vue';
import axios from 'axios';

var VueConfirm = Vue.directive('confirm', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      var confirm = window.confirm(binding.value.message);

      if (confirm === true) {
        var data = {};

        if (binding.value.data != null && binding.value.data != '') {
          data = binding.value.data;
        }

        axios.post(binding.value.link, data).then(response => {
          if (binding.modifiers.reload && binding.modifiers.reload === true) {
            location.reload();
          } else {
            binding.value.callback(response);
          }
        });
      }
    });
  }
});

export default VueConfirm;
