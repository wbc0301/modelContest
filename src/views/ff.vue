<template>
	<div class="ff">
		<rank v-if="showType==='rank'" :rankList="rankList"></rank>
		<model v-if="showType==='model'" :modelData="modelData"></model>
	</div>
</template>

<script>
import rank from '@/components/rank.vue'
import model from '@/components/model.vue'

export default {
	name: 'ff',
	components: { rank, model },
	data() {
		return {
			showType: 'model',
			rankList: [
				{ rank: 1, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 2, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 3, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 4, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 5, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 6, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 7, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 8, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
				{ rank: 9, team: '参赛队伍', department: '部门部门部门', track: '赛道赛道', score: '99分' },
			],
			modelData: {
				title: 'aaa赛道战队展示',
				list: [
					{ subTitle: '111战队', src: '/a.png' },
					{ subTitle: '222战队', src: '/a.png' },
					{ subTitle: '333战队', src: '/a.png' },
				]
			},

		}
	},
	mounted() {
		// setInterval(() => {
		// 请求接口
		// }, 200)

	},
}
</script>
<style lang="less">
.ff {
	background: url(../assets/bg.jpg) center/cover;
	width: 100vw;
	height: 100vh;
}
</style>