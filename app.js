const app = Vue.createApp({
    template:'',
    data(){
        return{
        shakeDisabled:false,
        LoggedUserInfo:'',
        contactMsg:'',
        loginMsg:'',
        registrationMsg:'',
        showSideMenu:'',
         contactForm:{
            name:'',
            email:'',
            message:''
        },
        loginForm:{
            email:'',
            password:'',
            confirm_password:'',
            stay_login:''
        },
        registrationForm:{
            name:'',
            email:'',
            password:'',
            confirm_password:'',
            account_type:''
        }
       }
    },
    mounted(){
            var LoggedUser = JSON.parse(localStorage.getItem('logged-user'));
            if(LoggedUser){
                this.LoggedUserInfo = LoggedUser
            }else{
                this.LoggedUserInfo = null;
            }

            
            console.log(localStorage.getItem('user-accounts'));
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    methods:{
        sendEmail(event){
            event.preventDefault();
            const contactForm = this.contactForm
            if(contactForm.name !== '' && contactForm.email !== '' && contactForm.message !== ''){
                this.contactMsg = {name:contactForm.name,message:'Mail sent successfully.'}
                contactForm.name='';
                contactForm.email='';
                contactForm.message='';
                return
            }else{
                return this.contactMsg = {name:contactForm.name,message:'Please fill all fields'}
            }
            
        },

        login(){
            event.preventDefault();
            const data = this.loginForm
            //get all users list from local storage
            const Accounts = JSON.parse(localStorage.getItem('user-accounts'));
            //find user account by email

            if(data.password != data.confirm_password){
                this.loginMsg = {class:'alert-warning',message:'Password doesn\'t match'}
                this.warnDisabled();
                return 
            }

            const userAccount = Accounts?Accounts.filter(x=>x.email == data.email && x.password == data.password)[0]:null


            if(data.email != '' && userAccount){

                localStorage.setItem('logged-user',JSON.stringify({email:userAccount.email,name:userAccount.name,account_type:userAccount.account_type}))
             
                window.location.href = 'index.html'

            }else{
                this.loginMsg = {class:'alert-danger',message:'Invalid email or password'}    
                this.warnDisabled();
                return
                
            }
        },


        register(){
            event.preventDefault();
            const data =  this.registrationForm
            const Accounts = JSON.parse(localStorage.getItem('user-accounts'))
            if(data.name == '' || data.email == '' || data.password == '' || data.confirm_password == '' || data.account_type == ''){
                return this.registrationMsg = { class:'alert-warning',message:'Please fill all fields properly' }
            }

            //find user account by email
            const userAccount = Accounts?Accounts.filter(x=>x.email == data.email):null
            console.log(userAccount.length);

            if(userAccount && userAccount.length > 0){
                this.registrationMsg = { class:'alert-warning',message:'Sorry ! an account already exist with this email' }
                this.warnDisabled();
                return
            }

            if(data.password != data.confirm_password){
                this.registrationMsg = { class:'alert-warning',message:'Sorry ! Password doesn\'t match' }
                this.warnDisabled();
                return
            }

            //

            const allUserAccount = Accounts?Accounts:[];
            allUserAccount.push(data);
            
            localStorage.setItem('user-accounts',JSON.stringify(allUserAccount));
            this.registrationMsg = { class:'alert-success',message:'New account has been created successfully' }

            window.location.href = 'login.html'
            return

        },

       

        logout(){
            localStorage.removeItem('logged-user');
            this.LoggedUserInfo=null
            return
        },

        showHideSidebar(event){
            this.showSideMenu = event.target.checked
        },

        warnDisabled() {
            this.shakeDisabled = true
            setTimeout(() => {
                this.shakeDisabled = false
            }, 1500)
        }
    },
    
})


app.mount('#app')
