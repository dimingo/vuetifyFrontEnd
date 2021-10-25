<template>
  <v-container fluid style="margin: 0px;  width: 50%">
    <v-row  no-gutters class="mb-6">
      <v-col tyle="margin: 0px;  padding: 0px;" sm="6" md="5" lg="6">
        <v-card max-width="344"  
          outlined
          tile>
          <v-treeview
            v-model="tree"
            :items="items.data"
            activatable
            item-key="name"
            open-on-click
          >
            <template v-slot:prepend="{ item, open }" ,slot="label">

              <v-icon v-if="!item.file == true" >
                {{ open ? "mdi-folder-open" : "mdi-folder" }}

              </v-icon>

              <v-icon v-else>
                {{ files[documents.path] }}
              </v-icon>
            </template>
          </v-treeview>
        </v-card>
      </v-col>
      <v-col  sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
        <v-card   class="pa-2">
          {{documents.path}}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-code-json",
        md: "mdi-language-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        doc: "mdi-file-document-outline",
        xls: "mdi-file-excel",
      },
      tree: [],
      items: [],
      documents:[],
    };
  },

  mounted() {
    this.loadTree();
  },
  methods: {
    async loadTree() {
      axios

        .get("http://127.0.0.1:8000/api/get-folders/")

        .then((response) => (this.items = response.data))

        .catch((error) => {
          console.log(error);

          this.errored = true;
        });
    },
    listDocuments: function(item) {
      axios
      .get("27.0.0.1:8000/api/get-document-children/" + item.id )
      .then((response)=>(this.documents = response.data))
      .catch((error) => {
        console.log(error);
        this.erroed = true;
      });
    },
  },
};
</script>
