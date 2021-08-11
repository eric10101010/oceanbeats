<template>
  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger" v-show="action === 'order' && status === 'delete'">
            訂單序號 : {{ temp.num }}
          </strong> (刪除後將無法恢復)。
          <!-- <strong class="text-danger" >訂單序號：{{ temp.num }}</strong>
          (刪除後將無法恢復)。 -->
        </div>
        <div class="modal-footer">

          <button type="button" class="btn btn-danger" @click="$emit('del-item')">
            確定刪除
          </button>
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
            取消
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['temp', 'action', 'status']
}
</script>
