<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();
    const {blog} = defineProps(["blog"]);

    function detailView(id) {
        router.push(`/blogs/${id}`);
    }
</script>

<template>
    <div class="itemBox">
        <label>제목 {{ blog.title }}</label>
        <button @click="detailView(blog.id)">조회하기</button>
    </div>
</template>

<style scoped>
.itemBox {
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    height: 30px;
    margin-bottom: 1%;
}

label {
    margin-left: 1%;
}

button {
    margin-right: 1%;
}
</style>