import { useState, useEffect, useRef } from 'react';

export const useDidUpdateEffect = (fn, inputs) => {
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) fn();
        else didMountRef.current = true;
    }, inputs);
};

export const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChangeText: value => {
                setValue(value);
            },
        },
    };
};

export const useSelect = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            selectedOption: value,
            onSelect: value => {
                setValue(value);
            },
        },
    };
};
