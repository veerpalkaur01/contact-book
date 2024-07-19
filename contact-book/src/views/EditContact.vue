<template>
    <div>
      <h1>Edit Contact</h1>
      <ContactForm :contact="contact" :isEdit="true" />
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue';
  
  export default {
    components: { ContactForm },
    data() {
      return {
        contact: {}
      };
    },
    created() {
      const id = this.$route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact = contacts.find(c => c.id === parseInt(id));
    }
  };
  </script>
  