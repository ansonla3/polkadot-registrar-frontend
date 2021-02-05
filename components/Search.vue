<template>
    <div>
        <b-container fluid="md" class="container">
        <b-row>
            <b-col lg="3" md="3" sm="12" xs="12">

                <b-form-select v-model="selectedNetwork" :options="options">
                </b-form-select>
            </b-col>
            <b-col lg="9" md="9" sm="12" xs="12">
                <b-form-input v-model="address" placeholder="Enter your address"></b-form-input>
            </b-col>
        </b-row>

        <b-row>
            <b-col class="search">
            <b-button
                v-on:click="search"
                data-id="33"
                class="button"
                variant="outline-secondary"
                pill>Search</b-button>
            </b-col>
        </b-row>
        </b-container>

         <div v-if="isTriggered">
            <Table v-bind:searchResult="searchResult" />
         </div>

    </div>
</template>

<script>

const sampleData = {
   "net_address":{
      "network":"polkadot",
      "address":"15MUBwP6dyVw5CXF9PjSSv7SdXQuDSwjX86v1kBodCSWVR7cw"
   },
   "fields":[
      {
         "field":{
            "type":"matrix",
            "address":"@alice:matrix.org"
         },
         "is_permitted": true,
         "challenge":{
            "type":"expect_message",
            "state":{
               "expected_message":"1127233905",
               "from":{
                  "type":"matrix",
                  "address":"@alice:matrix.org"
               },
               "to":{
                  "type":"matrix",
                  "address":"@registrar:matrix.org"
               },
               "status":"valid"
            }
         }
      },

      {
         "field":{
            "type":"email",
            "address":"alice@email.com"
         },
         "is_permitted": true,
         "challenge":{
            "type":"back_and_forth",
            "state":{
               "expected_message":"6861321088",
               "from":{
                  "type":"email",
                  "address":"alice@email.com"
               },
               "to":{
                  "type":"email",
                  "address":"registrar@web3.foundation"
               },
               "status":"unconfirmed"
            }
         }
      },
      {
         "field":{
            "type":"display_name",
            "address":"Alice in Wonderland"
         },
         "is_permitted": true,
         "challenge":{
            "type":"display_name_check",
            "state":{
               "status":"valid",
               "similarities":null
            }
         }
      }
   ],
   "notifications":[
      {
         "level":"success",
         "message":"The Matrix account has been verified"
      }
   ]
};

export default {



    data() {
      return {
        address: '',
        selectedNetwork: 'Polkadot',
        options: [
          { value: 'Polkadot', text: 'Polkadot' },
          { value: 'Kusama', text: 'Kusama'},
        ],
        imgSrc: null,
        isTriggered: false,
        searchResult: {},
      }
    },

    mounted() {
      this.initialize();
    },

    methods: {
      initialize() {
        console.log("calling....")
     },

      async search() {
         try {
           if (this.address.trim().length <= 0) {
             this.$toast.error('Please enter your address.').goAway(3000);
           } else {
            this.isTriggered = true;
            this.searchResult = sampleData;
           }
         } catch(e){
            //  this.$toast.error('Error while')
         }
     }
    }
}
</script>

<style>

.container {
  margin: 0 auto;
  width: 70%;
  margin-top: 10%;
}


.search {
  padding-top: 10px;
}

.button {
  margin: 0 auto;
  display: block;
}

</style>