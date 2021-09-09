<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="white--text primary"
            elevation="21"
            light
            v-bind="attrs"
            v-on="on"
            >Add New Project</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-card-title>
              <div><h3>Add new title</h3></div>
            </v-card-title>
            <v-card-text>
              <v-form class="px-3">
                <v-text-field
                  label="Title"
                  v-model="title"
                  prepend-icon="mdi-folder"
                ></v-text-field>

                <v-menu
                  v-model="fromDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      label="From Date"
                      prepend-icon="mdi-event"
                      readonly
                      :value="picker"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    locale="en-in"
                    :min="minDate"
                    :max="maxDate"
                    v-model="picker"
                    no-title
                    @input="fromDateMenu = false"
                  ></v-date-picker>
                </v-menu>

                <v-textarea
                  label="Information"
                  v-model="content"
                  prepend-icon="mdi-pencil"
                ></v-textarea>
              </v-form>
            </v-card-text>

            <v-card-actions class="justify-start">
              <v-btn plain class="green--text" text @click="submit"
                >Add Project</v-btn
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
export default {
  data() {
    return {
      title: "",
      content: "",
      picker: null,
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    },
  },
};
</script>

<style scoped></style>
