<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">{{ headerOne }}</th>
                            <th scope="col">{{ headerTwo }}</th>
                            <th scope="col">{{ headerThree }}</th>
                            <th scope="col">{{ headerFour }}</th>
                            <th scope="col">{{ headerFive }}</th>
                            <th scope="col">{{ headerSix }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(person,i) in persons'>
                            <th scope="row">{{ parseInt(i) + 1 }}</th>
                            <td>{{ person.name }}</td>
                            <td>{{person.email}}</td>
                            <td>{{person.role}}</td>
                            <td>{{person.city}}</td>
                            <td>{{person.score}}</td>
                            <td>
                                <button class="btn btn-danger" @click='deleteContact(i)'>Delete</button>
                                <button class="btn btn-primary" @click='editContact(person)'>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
                <div class="card shadow p-4">
                    <h2 class="mb-4">{{ message }}</h2>
                    <form @submit.prevent="addContact">
                        <div class="form-group">
                            <label>{{ message2 }}</label>
                            <input v-model="user.name" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>{{ message3 }}</label>
                            <input v-model="user.email" type="Email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>{{ message4 }}</label>
                            <input v-model="user.role" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>{{ message5 }}</label>
                            <input v-model="user.city" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>{{ message6 }}</label>
                            <input v-model="user.score" type="text" class="form-control">
                        </div>
                        <div class="style">
                            <p>The total score is {{ totalScore }} </p>
                        </div>
                        <div class="form-group mlto">
                            <button type="submit" class="btn btn-primary ml-3" v-if='status'>{{ message7 }}</button>
                            <button type="button" class="btn btn-secondary"  @click='updateContact' v-else>{{ message8 }}</button>
                            <button type="reset" class="btn btn-danger ml-3" @click='resetField'>{{ message9 }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headerOne: 'ID',
            headerTwo: 'NAME',
            headerThree: 'EMAIL',
            headerFour: 'ROLE',
            headerFive: 'CITY',
            headerSix: 'SCORE',
            message: 'Please add new users',
            message2: 'Name',
            message3: 'Email',
            message4: 'Role',
            message5: 'City',
            message6: 'Score',
            message7: 'Submit',
            message8: 'Update',
            message9: 'Reset',
            user: {
                name: "",
                role: "",
            },
            persons: [
                {
                    name:  'wisdom', 
                    email: 'wisdom425@gmail.com',
                    role:  'Back-end Developer',
                    city:  'Uyo',
                    score: 45
                },
                {
                    name:  'Ruth', 
                    email: 'ruth321@gmail.com',
                    role:  'Android Developer',
                    city:  'Calabar',
                    score: 52
                },
                {
                    name:  'Steve', 
                    email: 'stevey25@gmail.com',
                    role:  'AI Developer',
                    city:  'Abuja',
                    score: 60
                },
                {
                    name:  'Martha', 
                    email: 'martha005@gmail.com',
                    role:  'PHP Developer',
                    city:  'PortHarcourt',
                    score: 55
                },
                {
                    name:  'Samuel', 
                    email: 'samuel523@gmail.com',
                    role:  'Javascript Developer',
                    city:  'Uyo',
                    score: 70
                },
            ],
            status: true
        }
    },
    methods: {
        deleteContact(i){
           this.persons.splice(i, 1);
           this.user = ''
        },
        editContact(id){
           this.user = id;
           this.status = false;
        },
        addContact(){
            this.persons.push(this.user);
        },
        updateContact(){
            alert('Contact has been updated')
        },
        resetField(){
            this.status = true;
        },
        
    },
    computed: {
        totalScore(){
            let sum = 0
            for(let i=0; i < this.persons.length; i++){
                sum = sum + parseInt(this.persons[i].score);
            }
            return sum;
        }
    }
}
</script>

<style scoped>
    .style{
        text-align: center;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
    }
    .mlto{
        display: flex;
        justify-content: center;
    }
</style>