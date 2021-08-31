<template>
	<div class="model">
		<div class="main">
			<div class="wrap" v-for="(item, i) in modelData.list" :key="i">
				<div class="subtitle">{{item.subTitle}}</div>
				<div class="img-box">
					<img :src="item.src" alt width="20vw" />
				</div>
			</div>
		</div>
		<div class="title">{{modelData.title}}</div>
	</div>
</template>

<script>
export default {
	name: 'model',
	props: ['modelData'],
	data() {
		return {};
	},
};
</script>

<style lang='less' scoped>
.model {
	padding-top: 10vh;
    color: #fff;
	.main {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
        text-align: center;
		.wrap {
			width: 30vw;
		}
	}
}
</style>
