import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

// namespace/block-name will change to block css class name
// as 'wp-block-{namespace}-{block-name}
registerBlockType( 'olein-blocks/editable-blocks', {

    title: 'Editable paragraph',

    // you can choice in dashicons
    // @link https://developer.wordpress.org/resource/dashicons/#admin-users
    //
    // Or you can use SVG
    // @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#icon-optional
    icon: 'universal-access-alt',

    // common, formatting, layout, widget, embed
    // make custom category @link https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories
    category: 'common',

    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
    },

    // you can set preview for the block to be shown in the inspector help panel when the user mouses over the block
    // @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#example-optional
    example: {
        attributes: {
            content: 'Hello World',
        },
    },

    edit: ( props ) => {
        const { attributes: { content }, setAttributes, className } = props;
        const onChangeContent = ( newContent ) => {
            setAttributes( { content: newContent } );
        };
        return (
            <RichText
                tagName="p"
                className={ className }
                onChange={ onChangeContent }
                value={ content }
            />
        );
    },
    save: ( props ) => {
        return <RichText.Content tagName="p" value={ props.attributes.content } />;
    },
} );