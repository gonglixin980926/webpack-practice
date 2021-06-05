console.log('this is log');

function func() {
    console.info('this is info');
}

export default class Clazz {
    say() {
        console.debug('this is debug');
    }
    render() {
        return <div>{console.error('this is error')}</div>
    }
}