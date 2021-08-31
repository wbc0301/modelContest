<template>
	<div class="rank">
        <rank-title></rank-title>
        <rank-item v-for="(item, index) in rankList" :key="index" :item="item"></rank-item>
    </div>
</template>

<script>
import RankTitle from '@/components/rankTitle';
import RankItem from '@/components/rankItem';

export default {
	name: 'rank',
	data() {
		return {};
	},
	components: { RankTitle, RankItem },
	props: ['rankList'],
};
</script>

<style lang='less' scoped>
.rank {
    width: 80%;
    padding-top: 10%;
    margin: auto;
}
</style>
