import {
    atom,
    DefaultValue,
    selectorFamily,
} from 'recoil';

const count = atom({
    key: 'count',
    default: 0
});

const changeCount = selectorFamily({
    key: 'changeCount',
    get: () => ({ get }) => { return get(count) },
    set: (params) => ({ set }, newValue: any) => {
        switch (params) {
            case '+':
                set(
                    count,
                    newValue instanceof DefaultValue ? newValue : (newValue + 1)
                );
                break;
            case '-':
                if (newValue >= 1) {
                    set(
                        count,
                        newValue instanceof DefaultValue ? newValue : (newValue - 1)
                    )
                };
                break;
            default: set(
                count,
                newValue
            );
        };
    }
});

export { count, changeCount };

