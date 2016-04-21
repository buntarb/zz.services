/**
 * @fileoverview Provide zz.services.BaseService.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.services.BaseService' );
goog.require( 'goog.events');
goog.require( 'goog.events.EventTarget');

/**
 * Base services class.
 * @constructor
 * @extends {goog.events.EventTarget}
 */
zz.services.BaseService = function( ){

	goog.base( this );
};

/**
 * Base inheritance.
 */
goog.inherits( zz.services.BaseService, goog.events.EventTarget );