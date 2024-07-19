<template>
    <div>
      <input v-model="search" placeholder="Search contacts" />
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="{ path: '/edit/' + contact.id }">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: '',
      };
    },
    computed: {
      contacts() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        return contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
      },
      filteredContacts() {
        return this.contacts.filter(contact =>
          (contact.firstName + ' ' + contact.lastName).toLowerCase().includes(this.search.toLowerCase())
        );
      }
    }
  };
  </script>
  