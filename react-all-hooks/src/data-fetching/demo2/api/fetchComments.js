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

export const fetchComments = async (id) => {
    const response = await fetch(`${BASE_URL}/comments?postId=${id}`);
    const jsonComments = await response.json();
    return jsonComments.map(commentData => {
        const comment = new Comment();
        comment.postId = commentData.postId;
        comment.id = commentData.id;
        comment.name = commentData.name;
        comment.email = commentData.email;
        comment.body = commentData.body;
        return comment;
    });
}