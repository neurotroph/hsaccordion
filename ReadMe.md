# Horizontal Stacked Accordion
Lightweight CSS a horizontally stacked accordion HTML. Mainly built with HTML and CSS 3 transitions.

jQuery only optional for auto-play.

## Usage
### HTML
The accordion is based on an ```<ul>```-element. You have to use the pre-defined CSS-classes in order to have the accordion working:
```HTML
<div class="container">
	<ul class="hsaccordion">
		<li class="hsa-tab" id="hsa-tab01">
			<div class="hsa-tab-image">
				<a href="#"><!-- Slide Title --></a>
			</div>
			<div class="hsa-tab-content">
				<!-- Text/HTML content -->
			</div>
		</li>
		<!-- Repeat. -->
	</ul>
</div>
```
The use of a ```container``` is advised, but not necessary.

To add the background images, set the ```background-image``` property for your elements, e.g.:
```HTML
<style>
	#hsa-tab01 { background-image: url('./img/tab-01.jpeg'); }
</style>
```
You can also use inline-styles:
```HTML
		<li class="hsa-tab" style="background-image: url('./img/tab-01.jpeg');">
```

### CSS / LESS
As of version 1.0 you need to use [LESS](http://www.lesscss.org) to create your CSS file. The included CSS file can be edited and overrided, but is not documented. The configuration of the ```hsaccordion.less``` is recommended:
```LESS
/* ======== SETTINGS ========= */
/* Height of the accordion */
@hsa-height:			400px;
/* Width of the preview */
@hsa-preview-width:		80px;
/* Width of the image, when tab is active */
@hsa-fullimage-width:	250px;
/* Real width of the image file (see ReadMe) */
@hsa-realimage-width:	400px;
/* Width of the content section of the tab */
@hsa-content-width:		400px;
/* CSS3 transition definition */
@hsa-transition:		all 0.6s 0.1s ease-in-out;
/* Definition for border around preview image */
@hsa-preview-border:	1px solid #fff;
/* Background of tab */
@hsa-tab-background:	#fafaf0;
/* Switch for the use of desaturated preview images */
@hsa-desaturate:		true;
/* ===== END OF SETTINGS ===== */
```
The background image should be slightly wider than the ```@hsa-fullimage-width```, the ```@hsa-realimage-width``` should match the actual width of the image in order to calculate the correct position of the center when showing only the preview.

After compiling the .less-file, remember to always include the stylesheet in your HTML:
```HTML
<link rel="stylesheet" href="hsaccordion/css/hsaccordion.css">
```


### JavaScript / jQuery
The use of JavaScript is not required for the core functionality of the accordion. If you are looking for an auto-play feature going through the tabs automatically, however, you can use the included jQuery-plugin. Obviously, jQuery is required.
```HTML
<script src="hsaccordion/js/jquery.hsaccordion.js"></script>
<script>
	$(document).ready(function() {
		$('.accordion').hsAccordion({
			// Default settings:
			firstTab: 		1,
			autoplay: 		true,
			pauseOnHover: 	true,
			cycleSpeed: 	4000
		});
	});
</script>
```

## License
*MIT License*, see LICENSE for legal details. It basically means, you can

* use it privately or commercially,
* modify and adapt it to your needs and
* re-distribute it

as long as you credit the original author and reference this GitHub repository.

## ToDo's
* LESS-less version with themeing in separate CSS file

If you encounter any bugs, please create an issue, make a fork or create a pull request.

## Credits
* Demo uses [normalize.css](http://git.io/normalize) (not required)
* Demo images from [Unsplash](http://unsplash.com)