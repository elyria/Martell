/**
 * Created by cy on 2017/9/25.
 */
let EventManager = {};

EventManager.eventList = {};

/**
 * 添加监听
 * @param type
 * @param callback
 * @param target
 */
EventManager.on = function(type, callback, target) {
    if (!EventManager.eventList.hasOwnProperty(type)) {
        EventManager.eventList[type] = [];
    }

    let event = { target: target, callback: callback };
    EventManager.eventList[type].push(event);
};

/**
 * 移除监听
 * @param type
 * @param target
 */
EventManager.off = function(type, target) {
    if (!EventManager.eventList.hasOwnProperty(type)) {
        return;
    }

    for (let i = 0; i < EventManager.eventList[type].length; i++) {
        if (EventManager.eventList[type][i].target === target) {
            EventManager.eventList[type].splice(i, 1);
        }
    }
};

/**
 * 事件触发
 * @param type
 */
EventManager.emitter = function(type, param) {
    if (!EventManager.eventList.hasOwnProperty(type)) {
        return;
    }

    for (let i = 0; i < EventManager.eventList[type].length; i++) {
        EventManager.eventList[type][i].callback(param);
    }
};

export default EventManager;
