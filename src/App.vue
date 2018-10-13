<template>
    <div id="app">
      <v-app>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex>
              <router-view></router-view>
            </v-flex>
            <v-flex xs4>
              <router-view name="scoreBar"/>
            </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: #ccc;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

header, footer {
  grid-column: span 12;
}

main {
  grid-column: span 9;
}

aside {
  grid-column: span 3;
}

</style>
