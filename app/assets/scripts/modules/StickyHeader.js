import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $("");
		this.headerTriggerElement = $("")
		this.createHeaderWaypoint();
		this.pageSections = $("");
		this.headerLinks = $("");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == 'down') {
					that.siteHeader.addClass("");
				} else {
					that.siteHeader.removeClass("");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("");
						that.headerLinks.removeClass("")
						$(matchingHeaderLink).addClass("");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("");
						that.headerLinks.removeClass("")
						$(matchingHeaderLink).addClass("");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;