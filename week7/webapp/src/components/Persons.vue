<template>
<div>
    <h1>Persons Page</h1>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Middle Initial</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="person in persons" :key="person.personId">
                <td>{{ person.firstName }}</td>
                <td>{{ person.middleName }}</td>
                <td>{{ person.lastName }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'Person',
        props: ['auth'],
        data () {
            return {
                persons: []
            }
        },

        methods: {
            getAuthHeader: function() {
                return {
                    headers: {
                        Authorization: 'Bearer ' + this.auth.accessToken
                    }
                }
            },

            getPersons: function() {
                // This wasn't working so I manually entered the URL (PRODUCT: undefined)
                // This might cause problems for other users or server relaunches.
                let personsApi = "http://localhost:8081/api/persons" 
                
                Vue.axios.get(personsApi, getAuthHeader()).then(
                    (response) => {
                        console.log(response)
                        this.persons = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            }
        },

        mounted() {
            this.getPersons();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
    color: white;
}

th {
    color: white;
}
</style>