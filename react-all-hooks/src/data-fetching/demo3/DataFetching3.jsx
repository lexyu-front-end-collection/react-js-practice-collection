
const BASE_URL = "https://jsonplaceholder.typicode.com"

/**
 * @type {Comment}
 */
class Comment {
    /**
     * @constructor
     * @param {number} [postId=0] 
     * @param {number} [id=0] 
     * @param {string} [name=""]
     * @param {string} [email=""]
     * @param {string} [body=""]
     */
    constructor() {
        this.postId = 0;
        this.id = 0;
        this.name = "";
        this.email = "";
        this.body = "";
    }
}

/**
 * NextJS Server Component
 */
async function DataFetchDemo3() {


    return (
        <div>

        </div>
    );
}

export default DataFetchDemo3