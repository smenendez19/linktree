<template>
  <div class="modal-backdrop">
    <div class="modal">
      <section class="modal-body">
        <slot name="body"> Default body </slot>
      </section>
      <slot name="buttons"> Buttons </slot>
    </div>
  </div>
</template>

<script setup></script>
