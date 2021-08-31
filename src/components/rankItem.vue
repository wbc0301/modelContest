<template>
	<div class="rankItem">
		<span>{{item.rank}}</span>
		<span>{{item.team}}</span>
		<span>{{item.department}}</span>
		<span>{{item.track}}</span>
		<span>{{item.score}}</span>
	</div>
</template>

<script>
export default {
	name: 'rank',
	data() {
		return {};
	},
	props: ['item'],
};
</script>

<style lang='less' scoped>
.rankItem {
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
