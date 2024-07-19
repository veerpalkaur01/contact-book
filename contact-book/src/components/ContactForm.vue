<template>
    <form @submit.prevent="submitForm">
      <label>
        First Name:
        <input v-model="contact.firstName" required />
      </label>
      <label>
        Last Name:
        <input v-model="contact.lastName" required />
      </label>
      <label>
        Email:
        <input v-model="contact.email" type="email" required />
      </label>
      <button type="submit">{{ isEdit ? 'Update' : 'Add' }} Contact</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      contact: {
        type: Object,
        default: () => ({ firstName: '', lastName: '', email: '' })
      },
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      submitForm() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        if (this.isEdit) {
          const index = contacts.findIndex(c => c.id === this.contact.id);
          contacts[index] = this.contact;
        } else {
          this.contact.id = Date.now();
          contacts.push(this.contact);
        }
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      }
    }
  };
  </script>
  