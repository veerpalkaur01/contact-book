<template>
    <div>
      <h1>Add New Contact</h1>
      <ContactForm :contact="contact" />
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue';
  
  export default {
    components: { ContactForm },
    data() {
      return {
        contact: { firstName: '', lastName: '', email: '' }
      };
    }
  };
  </script>
  