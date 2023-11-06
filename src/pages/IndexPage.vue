<template>
  <q-page class="flex flex-center">
    <div class="row items-center">
                <div class="col-auto">
                  <q-img
                    src="..\assets\image.png"
                    alt="User's profile picture"
                    class="rounded-borders"
                    width="300px"
                    height="300px"
                  />
                </div>
                <div>
                  <q-btn href="http://localhost:9092/#/tejal/about" label="Lets Get Started!" push color="primary" />
                </div>
              </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
