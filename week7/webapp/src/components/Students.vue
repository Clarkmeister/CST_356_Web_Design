<template>
<div>
    <h1>Students Page</h1>
    <table>
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Email Address</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student.personId">
                <td>{{ student.studentId }}</td>
                <td>{{ student.emailAddress }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'Students',

        data () {
            return {
                students: []
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

            getStudents: function() {
                // This wasn't working so I manually entered the URL (PRODUCT: undefined)
                // This might cause problems for other users or server relaunches.
                let studentsApi = "http://localhost:8081/api/students" 

                Vue.axios.get(studentsApi, getAuthHeader()).then(
                    (response) => {
                        console.log(response)
                        this.students = response.data;
                    },
                    (error) => {
                        console.log(error)
                    }
                );
            }
        },

        mounted() {
            this.getStudents();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table {
        color: white;
    }
</style>