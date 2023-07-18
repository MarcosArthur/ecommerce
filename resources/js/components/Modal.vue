<template>
  <Teleport to="body">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Informações</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Nome</label>
              <input type="text" class="form-control" disabled :value="store.user.name">
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Email</label>
              <input type="text" class="form-control" disabled :value="store.user.email">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>


import { useAuthStore } from '@/store/Auth'

const store = useAuthStore()


</script>