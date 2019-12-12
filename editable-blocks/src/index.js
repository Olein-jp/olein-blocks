import { registerBlockType } from '@wordpress/blocks';
import {
    RichText,
    AlignmentToolbar,
    BlockControls,
} from '@wordpress/block-editor';

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
        alignment: {
            type: 'string',
            default: 'none',
        },
    },

    // you can set preview for the block to be shown in the inspector help panel when the user mouses over the block
    // @link https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#example-optional
    example: {
        attributes: {
            content: 'Hello World',
            aligment: 'right',
        },
    },

    edit: ( props ) => {
        const {
            attributes: {
                content,
                alignment,
            },
            className
        } = props;

        const onChangeContent = ( newContent ) => {
            props.setAttributes( { content: newContent } );
        };

        const onChangeAlignment = ( newAlignment ) => {
            props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
        };

        return (
            <div>
                {
                    <BlockControls>
                        <AlignmentToolbar
                            value={ alignment }
                            onChange={ onChangeAlignment }
                        />
                    </BlockControls>
                }
                <RichText
                    className={ className }
                    style={ { textAlign: alignment } }
                    tagName="p"
                    onChange={ onChangeContent }
                    value={ content }
                />
            </div>
        );
    },
    save: ( props ) => {
        return (
            <RichText.Content
                className={ `gutenberg-examples-align-${ props.attributes.alignment }` }
                tagName="p"
                value={ props.attributes.content }
            />
        );
    },
} );