/**
 * Created by cy on 2017/9/25.
 */
let ReactKey = {
    i: 10000,
    get key() {
        return ++this.i;
    }
};

export default ReactKey;