/**
 * Created by zhonghua on 16-9-7.
 */

function sleep() {
    setInterval(function () {
        console.log('time:', new Date().toLocaleTimeString());
    }, 1000);
}
sleep();
console.log('test!');