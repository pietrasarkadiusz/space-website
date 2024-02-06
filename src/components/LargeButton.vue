<template>
  <router-link
    class="large-button bg-white text-dark uppercase ff-serif"
    to="/explore"
    >Explore</router-link
  >
</template>
<script>
export default {};
</script>
<style scoped>
/* large button */

.large-button {
  font-size: 2rem;
  position: relative;
  display: inline-grid;
  z-index: 1;
  place-items: center;
  padding: 0 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  text-decoration: none;
  outline-style: none;
}

.large-button::after {
  content: '';
  position: absolute;
  z-index: -1;
  background: hsl(var(--clr-white) / 0.15);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 400ms linear, transform 500ms ease-in-out;
}

.large-button:hover::after,
.large-button:focus::after {
  opacity: 1;
  transform: scale(1.4);
}
</style>
