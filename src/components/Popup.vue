<template>
  <v-row >
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="white--text primary"
            elevation="14"
            light
            v-bind="attrs"
            v-on="on"
            >Add New Folder</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-title>
              <div><h3>Add Folder Details</h3></div>
            </v-card-title>
            <v-card-text>
              
                <input type="text" v-model="path" >
  
            </v-card-text>

            <v-card-actions class="justify-start">
              <v-btn plain class="green--text" text @click="getChildren"
                >enter</v-btn
              >
              <v-btn plain class="red--text" @click="dialog.value = false"
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
const axios = require( 'axios')
export default {
  data() {
    return {
      title: "",
      content: "",
      picker: null,
      path:null,
    };
  },

   mounted() {
     this.getChildren
     
  //  axios
  //     .get("http://127.0.0.1:8000/api/get-folder-children/ketcha6 ")
  //     .then(response => (this.info = response.data))
  },
  methods: {
    async getChildren(){
      try{
        axios
      .get("http://127.0.0.1:8000/api/get-folders/ ")
      .then(response => (this.path = response.data))
      return this.path
      }catch(error){
          console.log(error.response)
      }
    }

  }

 
};
</script>

<style scoped></style>
