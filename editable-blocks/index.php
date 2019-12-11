<?php
/**
 * Editable blocks
 *
 * @package olein-blocks
 */

function ob_editable_blocks_register_block() {
	wp_register_script(
		'ob-editable-blocks-script',
		plugins_url( 'build/index.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-element',
			'wp-editor'
		),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	wp_register_style(
		'ob-editable-blocks-editor',
		plugins_url( 'build/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
	);

	wp_register_style(
		'ob-editable-blocks-style',
		plugins_url( 'build/style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )
	);

	register_block_type( 'olein-blocks/editable-blocks', array(
		'style' => 'ob-editable-blocks-style',
		'editor_style' => 'ob-editable-blocks-editor',
		'editor_script' => 'ob-editable-blocks-script',
	) );
}
add_action( 'init', 'ob_editable_blocks_register_block' );