<?php
/**
 * Plugin Name: Hidden field
 * Plugin URI: -
 * Description: Create hidden fields.
 * Author: Mayur Baroliya
 * Author URI: https://profiles.wordpress.org/baroliyamayur/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  The registerBlockType() function to register blocks.
 * wp-element: The wp.element.createElement() function to create elements.
 * wp-i18n:    The __() function for internationalization.
 *
 * @since 1.0.0
 */
function hidden_field_backend_enqueue() {
	wp_enqueue_script(
		'hidden-field-backend-script', // Unique handle.
		plugins_url( 'block.build.js', __FILE__ ), // block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ) // Dependencies, defined above.
	);
}
add_action( 'enqueue_block_editor_assets', 'hidden_field_backend_enqueue' );