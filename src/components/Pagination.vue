<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !page.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="$emit('get-product', page.current_page - 1)"
        >
          <span aria-hidden="true"><i class="bi bi-caret-left-fill"></i></span>
        </a>
      </li>

      <li
        class="page-item"
        :class="{ active: item === page.current_page }"
        v-for="(item, index) in page.total_pages"
        :key="'pagination' + index"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('get-product', item)"
          >{{ item }}</a
        >
      </li>

      <li class="page-item" :class="{ disabled: !page.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('get-product', page.current_page + 1)"
        >
          <span aria-hidden="true"><i class="bi bi-caret-right-fill"></i></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    // console.log(this.page);
  }
}
</script>
