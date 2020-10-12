# v-hscroll
This Vue directive enables mouse wheel horizontal scrolling on any element.

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
			<div class="element"></div>
		</div>
	</div>
</template>

<style type="text/css">
.outer {
	width: 600px;
}
.inner {
	overflow: auto;
	white-space: nowrap;
	display: inline-block;
	border: 1px solid #000;
}
.element {
	width: 250px;
	height: 250px;
	background: red;

}
</style>


```
