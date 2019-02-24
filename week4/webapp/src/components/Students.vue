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
            <tr v-for="student in students">
                <td>{{ student.student_id }}</td>
                <td>{{ student.email_address }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    export default {
        name: 'Students',
        mounted() {
            this.students = getStudents();
        },
        data () {
            return {
                students: []
            }
        }
    }
    function getStudents() {
        return JSON.parse(testStudents).students;
    }
    var testStudents = '{"students":[{"student_id":"100000000","email_address":"jon.doe@oit.edu"},{"student_id":"100000001","email_address":"jane.doe@oit.edu"},{"student_id":"100000002","email_address":"jack.doe@oit.edu"},{"student_id":"100000003","email_address":"jill.doe@oit.edu"},{"student_id":"100000004","email_address": "jerry.doe@oit.edu"}]}'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table {
        color: white;
    }
</style>