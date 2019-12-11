<?php
/**
 * Extending blocks
 *
 * @package olein-blocks
 */

function ob_extending_blocks_enqueue() {
	wp_enqueue_script( 'ob-extending-blocks-script',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks' )
	);
}
add_action( 'enqueue_block_editor_assets', 'ob_extending_blocks_enqueue' );

function ob_extending_blocks_styles() {
	wp_enqueue_style( 'ob-extending-blocks-style',
		plugins_url( 'build/style.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'ob_extending_blocks_styles' );