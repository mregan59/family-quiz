import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const FlexBox = props => {
    const flexStyle = {
        flexDirection:
            (props.row && 'row') ||
            (props.column && 'column') ||
            (props.columnreverse && 'column-reverse') ||
            (props.rowreverse && 'row-reverse') ||
            'column',
        justifyContent:
            (props.justifycenter && 'center') ||
            (props.justifystart && 'flex-start') ||
            (props.justifyend && 'flex-end') ||
            (props.justifybetween && 'space-between') ||
            (props.justifyaround && 'space-around'),
        alignItems:
            (props.aligncenter && 'center') ||
            (props.alignstart && 'flex-start') ||
            (props.alignend && 'flex-end') ||
            (props.alignbetween && 'space-between') ||
            (props.alignaround && 'space-around') ||
            (props.alignstretch && 'stretch'),
        order: props.order,
        display: 'flex',
        flexWrap: props.wrap && 'wrap',
        flex: props.flex1 && 1,
        width: props.w100 && '100%',
        height: props.h100 && '100%',
    };
    var {
        row,
        rowreverse,
        column,
        columnreverse,
        aligncenter,
        alignstart,
        alignend,
        alignbetween,
        alignaround,
        alignstretch,
        justifycenter,
        justifystart,
        justifyend,
        justifybetween,
        justifyaround,
        order,
        flex1,
        wrap,
        w100,
        h100,
        ...other
    } = props;
    //TODO figure out way to pass in element

    //check if props is array or object
    let style = [];
    if (props.style instanceof Array) {
        style = [flexStyle, ...props.style]
    } else {
        style = [flexStyle, props.style];
    }
    return (
        <View {...other} style={style}>
            {props.children}
        </View>
    );
};

export const TouchableFlexBox = props => {
    const flexStyle = {
        flexDirection:
            (props.row && 'row') ||
            (props.column && 'column') ||
            (props.columnreverse && 'column-reverse') ||
            (props.rowreverse && 'row-reverse') ||
            'column',
        justifyContent:
            (props.justifycenter && 'center') ||
            (props.justifystart && 'flex-start') ||
            (props.justifyend && 'flex-end') ||
            (props.justifybetween && 'space-between') ||
            (props.justifyaround && 'space-around'),
        alignItems:
            (props.aligncenter && 'center') ||
            (props.alignstart && 'flex-start') ||
            (props.alignend && 'flex-end') ||
            (props.alignbetween && 'space-between') ||
            (props.alignaround && 'space-around') ||
            (props.alignstretch && 'stretch'),
        order: props.order,
        display: 'flex',
        flexWrap: props.wrap && 'wrap',
        flex: props.flex1 && 1,
        width: props.w100 && '100%',
        height: props.h100 && '100%',
        ...props.style,
    };
    var {
        row,
        rowreverse,
        column,
        columnreverse,
        aligncenter,
        alignstart,
        alignend,
        alignbetween,
        alignaround,
        alignstretch,
        justifycenter,
        justifystart,
        justifyend,
        justifybetween,
        justifyaround,
        order,
        flex1,
        wrap,
        w100,
        h100,
        ...other
    } = props;
    //TODO figure out way to pass in element
    return (
        <TouchableWithoutFeedback {...other} style={flexStyle}>
            {props.children}
        </TouchableWithoutFeedback>
    );
};
