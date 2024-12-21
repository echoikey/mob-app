<template>
  <header class="header">
    <div class="wrapper">
      <a href="" class="logo">
        <img src="@/assets/img/logo.svg" alt="#" class="logo__img"/>
      </a>
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__item"><span>CN</span>/<span>EN</span></li>
          <li class="menu__item"><a href="">关于我们</a></li>
          <li class="menu__item"><a href="">产品美学</a></li>
          <li class="menu__item"><a href="">联系我们</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>
<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    background-color: #fff;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 6.5%;
  }
  .logo__img:hover {
    opacity: 0.5;
  }
  .logo__img {
    width: 100%;
    height: auto;
  }
  /* nav */
  .menu {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 3;
    width: 63%;
  }
  /* ul */
  .menu__list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

  }

  /* ul>li */
  .menu__item {
    margin-left: auto;
    cursor: pointer;
  }
  .menu ul:hover li:nth-child(1) {
    opacity: 1;
  }
  .menu:hover ul li {
    opacity: 0.4;
  }

  .menu ul li a {
    font-family: "GothamBook","苹方-简  ","苹方","PingFang SC","微软雅黑";
    background: #fff;
    color: #333333;
    padding-bottom:5.2rem;
    cursor: pointer;
  }

  .menu ul li a:link {
    text-decoration: none;
  }

  .menu ul .active a {
    border-bottom:2px solid #000; 
    opacity:1;
  }

  .menu ul li:hover {
    opacity:1
  }

  .menu ul li:hover a {
    border-bottom:2px solid #000; 
  }

  /* CN */
  .menu li:nth-child(1) {
    font-family: "Arial Black",Gadget,sans-serif; font-weight:normal;
  }
  /* EN */
  .menu li:nth-child(1) span:nth-child(2) {
    color: #999;
  }
</style>