<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row no-gutters>
          <v-col md="3">
            <v-card>
              <v-card-title>
                Folder List
              </v-card-title>
              <v-card-text>
                <v-treeview
                  v-model="tree"
                  :items="items.data"
                  activatable
                  item-key="name"
                  open-on-click
                  @update:active="test(item)"
                >
                  <template slot="prepend" slot-scope="{ item, open }">

                    <v-icon v-if="item.uuid" >
                      {{ open ? "mdi-folder-open" : "mdi-folder" }}
                     
                    </v-icon>
                  </template>
                </v-treeview>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="9">
            <v-card>
              <v-card-title>
                Document List
              </v-card-title>
              <v-card-text>
                <v-treeview :items="documents.data" item-key="name">
                  {{ documents }}
                  <template slot="prepend" slot-scope="{ item }">
                   
                    <v-icon v-if="item">
                      {{ files[item.type] }}
                    </v-icon>
                  </template>
                </v-treeview>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
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
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel",
      },
      tree: [],
      items: [],
      documents: [
        {
          title: "js",

          path: "/okm:root/Evaluations/BOARD EVALUATION(SELF)- Total Board.doc",

          type: "js",
        },
        {
          title: "doc2",

          path: "/okm:root/Evaluations/BOARD EVALUATION(SELF)- Total Board.doc",

          type: "png",
        },
        {
          title: "json",

          path: "/okm:root/Evaluations/BOARD EVALUATION(SELF)- Total Board.doc",

          type: "html",
        },
        {
          title: "md",

          path: "/okm:root/Evaluations/BOARD EVALUATION(SELF)- Total Board.doc",

          type: "js",
        },
      ],
    };
  },
  mounted() {
    this.loadtree();
  },

  methods: {
    async loadtree() {
      axios
        .get("http://127.0.0.1:8000/api/get-folders")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    listDocument: function(item) {
      let name = item.name;
      console.log(name);
    },
    test(item) {
     

         axios
         .get("http://127.0.0.1:8000/api/get-document-children/" + item.uuid)

        .then((response) => {
          this.documents = response.data;
          console.log(this.documents.data);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
      
      
     
       
    },
  },
};
</script>
