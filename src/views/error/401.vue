<template>
  <div class="error-page">
    <div class="error-box">
      <div class="error-code">401</div>
      <div class="error-desc">抱歉，您没有访问权限！</div>
      <div class="error-handle">
        <router-link to="/">返回首页</router-link>
      </div>
    </div>
  </div>
</template>
  
<script setup name="401">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #eef0fc;
    box-sizing: border-box;
}

.error-box {
    width: 400px;
    background-color: #fff;
    padding: 80px 50px;
    border-radius: 5px;
}

.error-code {
    line-height: 1;
    font-size: 100px;
    font-weight: bold;
    color: var(--el-color-primary);
    margin-bottom: 20px;
    text-align: center;
}

.error-desc {
    font-size: 20px;
    color: #777;
    text-align: center;
}

.error-handle {
    margin-top: 50px;
    text-align: center;
}

.error-btn {
    margin-left: 100px;
}
</style>