<template>
	<div class="rankTitle">
        <span>排名</span>
        <span>参赛队伍</span>
        <span>部门</span>
        <span>赛道</span>
        <span>总得分</span>
    </div>
</template>

<script>


export default {
	name: 'rankTitle',
};
</script>

<style lang='less' scoped>
.rankTitle {
    display: flex;
    justify-content: space-between;
    border: 2px solid #00d7fe;
    background: #00d7fe44;
    border-radius: 10px;
    margin: 10px 0;
    line-height: 6vh;
    span {
        flex: 1;
        color: #fff;
        text-align: center;
    }
}
</style>
