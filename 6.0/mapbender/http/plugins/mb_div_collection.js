/**
 * Package: mb_div_collection
 *
 * Description:
 *
 * Puts existing div elements in a new element - see this as a container
 * List the elements which should be integrated comma-separated under target.
 *  
 * Files:
 * - http/plugins/mb_div_collection.js
 *
 * SQL:
 * > INSERT INTO gui_element(fkey_gui_id, e_id, e_pos, e_public, e_comment, 
 * > e_title, e_element, e_src, e_attributes, e_left, e_top, e_width, 
 * > e_height, e_z_index, e_more_styles, e_content, e_closetag, e_js_file, 
 * > e_mb_mod, e_target, e_requires, e_url) VALUES('<appId>',
 * > 'mb_div_collection',3,1,
 * > 'existing divs in new div object. List the elements comma-separated under target.',
 * > '','div','','',NULL ,NULL ,NULL ,NULL ,NULL ,'',
 * > '','div',
 * > '../plugins/mb_div_collection.js','','','','');
 * 
 * Help:
 *
 * Maintainer:
 * http://www.mapbender.org/User:Armin_Retterath
 *
 * License:
 * Copyright (c) 2009, Open Source Geospatial Foundation
 * This program is dual licensed under the GNU General Public License
 * and Simplified BSD license.
 * http://svn.osgeo.org/mapbender/trunk/mapbender/license/license.txt
 */

var $parentDiv = $(this);

var DivContainerApi = function (o) {
	var that = this;
	
	this.create = function () {
		o.$target.each(function () {
			var $currentDivEntry = $(this);
			$parentDiv.append($currentDivEntry);

		});
	
	};
	this.create();
};

$parentDiv.mapbender(new DivContainerApi(options));
