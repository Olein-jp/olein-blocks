// import { registerBlockType } from '@wordpress/blocks';
//
// registerBlockType( 'olein-blocks/extending-blocks', {
//     title: 'Extending Blocks(sample)', // up to you
//
//     icon: 'admin-site-alt2', // @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#icon-optional
//
//     category: 'common',
//     // common
//     // formatting
//     // layout
//     // widgets
//     // embed
//     // original -> https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories
//
//     example: {},
//
//     edit( { className } ) {
//         return <p className={ className }>Extending blocks (edit).</p>;
//     },
//
//     save() {
//         return <p>Extending blocks (front).</p>;
//     }
// } );

// 'core/heading',
// 'core/list',
// 'core/media-text',
// 'core/paragraph',
// 'core/preformatted',
// 'core/pullquote',
// 'core/quote',
// 'core/table',
// 'core/verse',


/**
 * Heading
 */
wp.blocks.registerBlockStyle(
    'core/heading',
    {
        name: 'fancy-heading', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy heading' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * List
 */
wp.blocks.registerBlockStyle(
    'core/list',
    {
        name: 'fancy-list', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy list' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * Media text
 */
wp.blocks.registerBlockStyle(
    'core/media-text',
    {
        name: 'fancy-media-text', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy media text' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * Paragraph
 */
wp.blocks.registerBlockStyle(
    'core/paragraph',
    {
        name: 'fancy-paragraph', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy paragraph' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * Preformatted
 */
wp.blocks.registerBlockStyle(
    'core/preformatted',
    {
        name: 'fancy-preformatted', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy preformatted' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * Pullquote
 */
wp.blocks.registerBlockStyle(
    'core/pullquote',
    {
        name: 'fancy-pullquote', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy pullquote' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * quote
 */
wp.blocks.registerBlockStyle(
    'core/quote',
    {
        name: 'fancy-quote', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy quote' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * table
 */
wp.blocks.registerBlockStyle(
    'core/table',
    {
        name: 'fancy-table', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy table' // It'll be visible label name in sidebar (inspector) styles.
    }
);

/**
 * verse
 */
wp.blocks.registerBlockStyle(
    'core/verse',
    {
        name: 'fancy-verse', // It'll be CSS class name as .is-style-***** .
        label: 'Fancy verse' // It'll be visible label name in sidebar (inspector) styles.
    }
);