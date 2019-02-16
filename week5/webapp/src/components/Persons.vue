<template>
<div>
    <h1>Persons Page</h1>
    <table>
    <tr>
        <th>First Name</th>
        <th>Middle Initial</th>
        <th>Last Name</th>
    </tr>
    <tr>
        <td>Arthur</td>
        <td>J</td>
        <td>Clark</td>
    </tr>
    <tr>
        <td>Ace</td>
        <td>W</td>
        <td>Clark</td>
    </tr>
    <tr>
        <td>Amity</td>
        <td>L</td>
        <td>Clark</td>
    </tr>
    <tr>
        <td>Jack</td>
        <td>A</td>
        <td>Clark</td>
    </tr>
    <tr>
        <td>Abe</td>
        <td>A</td>
        <td>Clark</td>
    </tr>     
    </table>
</div>
</template>

<script>
    export default {
        name: 'Persons',
        data () {
            return {
            }
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