<script>
import PageMain from "./components/PageMain.vue"
import PageHeader from "./components/PageHeader.vue"
import PageFooter from "./components/PageFooter.vue"



import { store } from "./store.js" //state management

export default {
	components: {
		PageHeader,
		PageMain,
		PageFooter
	},
	data() {
		return {
			store
		}
	},
	mounted() {

		// axios.get("indirizzo").then(risultato => {
		// 	console.log(risultato);
		// }).catch(errore => {
		// 	console.error(errore);
		// });
	},
	methods: {

	}
}
</script>

<template>
	<main>
		<PageHeader />
		<PageMain />
		<PageFooter />

	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>