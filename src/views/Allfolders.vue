<template>
 <div>
   <!-- {{items.data}} -->

  <v-treeview
    v-model="tree"
  
    :items="items.data"
    activatable
    item-key="name"
    open-on-click
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.documents.file] }}
      </v-icon>
    </template>
  </v-treeview>

 </div>
</template>
<script>
import axios from 'axios'
  export default {
    data () {


    return{
    
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        doc: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
      },
      tree: [],
      items: [
      ],
      }
    },
     mounted() {
     axios

      .get('http://127.0.0.1:8000/api/get-folders/')

      .then(response => (this.items = response.data))

      .catch(error => {

        console.log(error)

        this.errored = true

      })

  }

  }
</script>
