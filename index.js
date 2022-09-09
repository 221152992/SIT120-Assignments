Vue.component('app-user',{
    data: function() {
        return {
                  users: [{
                FirstName: 'Chris'
                }, {
                FirstName: 'Ryan'
                }, {
                FirstName: 'Mardi'
            }]  
        };
    },
    template: '<div><div class="user" v-for="user in users"><p>FirstName: {{ user.FirstName }}</p></div></div>'
});



var app = new Vue({
    el: '#App',
    data: {
        title: 'V-Component',
    }
});