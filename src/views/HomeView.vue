<template>
  <main>
    <div class="album py-3 bg-light">
      <div class="container">
        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 G-3">
          <transition-group name="benefits" appear>
            <div
              v-for="(item, index) in benefits"
              :key="index"
              id="item-list"
              class="d-flex"
            >
              <div class="card shadow-sm m-1">
                <div class="bg-danger text-light px-3">
                  <strong>
                    {{ item.title }}
                  </strong>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    <small>{{ item.description }}</small>
                  </p>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      benefits: [],
    };
  },
  created() {
    fetch("/benefits.json")
      .then((response) => response.json())
      .then(
        (data) => {
          this.benefits = data;
        },
        (response) => {
          console.log("Error loading json:", response);
        }
      );
  },
};
</script>
