function Slider (data) {
	this.selector = data.selector
	this.width = data.width || 500
	this.height = data.height || 250
	this.timeout = data.timeout || 3000
	this.speed = data.speed || 500
	this.box = document.querySelector(this.selector + ' .slide-box')
	this.list = document.querySelector(this.selector + ' .slide-box .slide')
	this.element = document.querySelectorAll(this.selector + ' .slide-box .slide li')
	this.translate = 0

	this.init = function () {
		let self = this
		
		let elementLength = this.element.length
		this.element.forEach(function (e) {
			e.style.width = self.width + 'px'
		})
		this.box.style.width = this.width + 'px'
		this.box.style.height = this.height + 'px'
		this.list.style.width = (this.width * elementLength) + 'px'
		this.list.style.transition = 'transform ' + (this.speed/1000) + 's'

		this.interval = setInterval(this.slide, this.timeout)
		this.event()
	}.bind(this)

	this.slide = function () {
		if (this.translate === this.width * (this.element.length - 1)) {
			this.translate = 0
		} else {
			this.translate += this.width
		}
		
		this.list.style.transform = 'translateX(-' + this.translate + 'px)'
	}.bind(this)

	this.touchmove = function () {

	}.bind(this)

	this.event = function () {
		var self = this
		
		this.box.addEventListener('mouseover', function (e) {
			e.preventDefault()
			clearInterval(self.interval)
		}, false)

		this.box.addEventListener('mouseleave', function (e) {
			e.preventDefault()
			self.interval = setInterval(self.slide, self.timeout)
		}, false)

	}.bind(this)

	this.init()

}
