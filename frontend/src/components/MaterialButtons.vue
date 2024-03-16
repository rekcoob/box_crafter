<script>
export default {
  data() {
    return {
      mat: 3,
      thickn: 5
    }
  },
  methods: {
    switchActive(n) {
      this.mat = n
      if (n === 1) {
        this.thickn = 3
        this.$emit('thicknChanged', this.thickn)
      } else if (n === 2) {
        this.thickn = 4
        this.$emit('thicknChanged', this.thickn)
      } else {
        this.thickn = 5
        this.$emit('thicknChanged', this.thickn)
      }
    }
  }
}
</script>

<template>
  <div class="material">
    <h3>Materiál</h3>
    <div class="craft">
      <button class="btn-primary" :class="{ active: mat === 1 }" @click="switchActive(1)">B</button>
      <button class="btn-primary" :class="{ active: mat === 2 }" @click="switchActive(2)">C</button>
      <button class="btn-primary" :class="{ active: mat === 3 }" @click="switchActive(3)">
        BC
      </button>
    </div>
    <p><b>Hrúbka:</b> {{ thickn }} mm</p>
  </div>
</template>

<style scoped>
.material {
  /* margin: 50px;
  padding: 50px; */
  /* border: solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
button {
  /* display: inline-block; */
  margin: 10px 0;
  padding: 0.5em 1em;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-primary {
  background-color: #181a1b;
  color: #1e84ff;
  border: 1px solid #007bff;
}
.btn-primary:hover {
  border-color: #0056b3;
  box-shadow: 0 0 10px #0062cc;
  opacity: 0.9;
}
.active {
  background-color: #0056b3;
  color: #fff;
}
.quality {
  margin: 30px 0px;
}
</style>
