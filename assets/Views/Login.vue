<template>
  <div>
    <b-container class="py-5">
      <b-row>
        <b-col>
          <ValidationObserver ref="observer">
            <b-form
              slot-scope="{ validate }"
              @submit.prevent="validate().then(handleSubmit)"
            >
              <ValidationProvider rules="required" name="Email">
                <b-form-group
                  slot-scope="{ valid, errors }"
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    :state="errors[0] ? false : valid ? true : null"
                    type="email"
                    placeholder="Enter email"
                    
                  ></b-form-input>
                  <b-form-valid-feedback>
                    {{ errors[0] }}
                  </b-form-valid-feedback>
                </b-form-group>
              </ValidationProvider>
       
                <ValidationProvider rules="required" name="Password">
                  <b-form-group
                    id="input-group-3"
                    label="Your Password:"
                    label-for="input-3"
                    slot-scope="{ valid, errors }"
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.password"
                        :state="errors[0] ? false : valid ? true : null"                   
                      placeholder="Enter password"
                      type="password"
                      
                    ></b-form-input>
                    <b-form-valid-feedback>
                        {{ errors[0] }}
                      </b-form-valid-feedback>
                  </b-form-group>
              </ValidationProvider>


              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters , mapActions} from 'vuex';
import {ValidationObserver , ValidationProvider} from 'vee-validate';
export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
       
      },
    };
  },
  methods: {

    ...mapActions({
      login: 'auth/login'
    }),

    async handleSubmit() {   
  
      

      await this.login(this.form)
      .then((res)=> {
        console.log(res)
      }).catch((e)=> {
        console.log(e);
      })
    },
  },
};
</script>