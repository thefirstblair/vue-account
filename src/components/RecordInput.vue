<template>
    <div>
        <div style="background:white; border-radius:1vh;">
            <form @submit="addRecord" action="#">
                <label>Type: </label>
                <select v-model="form.type">
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>

                <label>Current: </label>
                <input type="number" required v-model="form.current">

                <label>Details: </label>
                <input id="detail" placeholder="Ex. ค่าอาหาร" type="text" v-model="form.detail">

                <label>Date: </label>
                <input type="date" required v-model="form.date">

                <button type="submit">Add the record</button>   
            </form>                     
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                type: 'Income',
                current: 0,
                detail: '',
                date: null
            }
        }
    },
    methods:{
        addRecord(e){
            this.$store.commit('addRecord',this.form)
            this.clearForm()
            e.preventDefault()
        },
        clearForm(){
            this.form = {
                type: 'Income',
                current: 0,
                detail: '',
                date: null
            }
        }
    }
}
</script>

<style scoped>
    form{
        width: 20vw;
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        border-radius: 1vh;
        height:60vh;
        padding:3vh;
    }
    label{
        color: black;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input,select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid black;
        color: #555;
    }
    button{
        color: #FFF;
        font-size: 1em;
        background: #2196F3;;
        border-color: #2196F3;
        padding: 10px 6px;
        border: none;
        width: 100%;
        margin-top:5vh;
    }
</style>