<template>
    <div>
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <button @click="editContact">Edit</button>
      <button @click="deleteContact">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contact: {}
      };
    },
    created() {
      const id = this.$route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      this.contact = contacts.find(c => c.id === parseInt(id));
    },
    methods: {
      editContact() {
        this.$router.push(`/edit/${this.contact.id}`);
      },
      deleteContact() {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts = contacts.filter(c => c.id !== this.contact.id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      }
    }
  };
  </script>
  