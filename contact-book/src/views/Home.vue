<template>
    <div>
      <h1>Contact Book</h1>
      <ContactList />
      <router-link to="/add">Add New Contact</router-link>
    </div>
  </template>
  
  <script>
  import ContactList from '../components/ContactList.vue';
  
  export default {
    components: { ContactList }
  };
  </script>
  