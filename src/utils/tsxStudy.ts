declare namespace JSX {
    interface IntrinsicElements {
        foo: any
    }
}

// <foo />; // 正确
// <bar />; // 错误