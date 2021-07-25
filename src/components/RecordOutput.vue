<template>
    <div class="output">
        <table>
            <thead>
                <tr>
                    <td>No.</td>
                    <td>Type</td>
                    <td>Current (Baht)</td>
                    <td>Detail</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v,index) in this.$store.getters.getRecords" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ v.type }}</td>
                    <td>{{ v.current }}</td>
                    <td>{{ v.detail ? v.detail : '-' }}</td>
                    <td>{{ v.date }}</td>
                </tr>
            </tbody>
        </table>
        <h4>Total Income : {{ this.$store.getters.getTotal('income') }} Baht | Total Expense : {{ this.$store.getters.getTotal('outcome') }} Baht | Total : {{ this.$store.getters.getTotal('all') }} Baht</h4>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .output{
        background:white;
        width:50%;
        margin-left:3vh;
        height:60vh;
        border-radius: 1vh;
        padding:3vh;
        overflow: auto;
    }

    table{
        width:100%;
        border-spacing: 0;
    }

    thead td{
        padding:1vh;
    }

    tbody td{
        padding:1.2vh;
        border: 1px solid rgb(143, 143, 143);
    }

    
    tbody td:first{
        padding:0;
    }
</style>