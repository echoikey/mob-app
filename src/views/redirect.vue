<script>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      const { params, query } = route;
      const { path } = params;
      router.replace({ path: '/' + path, query });
    })
    return () => null;
  }
}
</script>