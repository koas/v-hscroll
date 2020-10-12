# v-hscroll
Vue directive for mouse wheel horizontal scrolling.

Documentation and examples available at the [demo page](https://koas.dev/v-hscroll/).

## Quick start
Install via npm:

`$ npm install @koas/v-hscroll`

Import in your main.js file:

`import HScroll from "@koas/v-hscroll";`

Add the directive to any element with an horizontal scroll:

```
<template>
	<div class="outer">
		<div v-hscroll class="inner">
			<div class="element">1</div>
			<div class="element">2</div>
			<div class="element">3</div>
			<div class="element">4</div>
		</div>
	</div>
</template>

<style type="text/css">
.outer {
	width: 650px;
}
.inner {
	overflow: auto;
	white-space: nowrap;
	border: 1px solid #000;
}
.element {
	width: 250px;
	height: 150px;
	background: #000;
	color: #fff;
	margin: 10px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}
</style>


```
