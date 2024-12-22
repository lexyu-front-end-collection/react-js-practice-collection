import { useEffect, useRef, useState } from "react";

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

function DataFetchDemo1() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [id, setId] = useState(0)
    const abortControllerRef = useRef(null)

    // useEffect(() => {
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then(json => setComments(json))
    // }, [])

    useEffect(() => {
        const fetchComments = async () => {
            abortControllerRef.current?.abort()
            abortControllerRef.current = new AbortController()

            setIsLoading(true)
            try {
                // setTimeout(async () => {
                const response = await fetch(`${BASE_URL}/comments?postId=${id}`, {
                    signal: abortControllerRef.current?.signal
                })
                const jsonComments = await response.json()
                const comments = jsonComments.map(commentData => {
                    const comment = new Comment();
                    comment.postId = commentData.postId;
                    comment.id = commentData.id;
                    comment.name = commentData.name;
                    comment.email = commentData.email;
                    comment.body = commentData.body;
                    return comment;
                });
                setComments(comments)
                // }, 2000)
            } catch (e) {
                if (e.name === "AbortError") {
                    console.log("Aborted");
                    return
                }
                // setError(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchComments()
    }, [id])

    // if (isLoading) {
    //     return <h1>Loading...</h1>
    // }

    if (error) {
        return <h1>Something went wrong:{error}</h1>
    }

    return (
        <div>
            <div className="header-container">
                <h1 className="mb-4 text-2xl">DataFetchDemo</h1>
                <button onClick={() => setId(id + 1)}>Increase Id ({id})</button>
            </div>
            {isLoading && <div className="loading-placeholder">Loading...</div>}
            {!isLoading && comments.length > 0 && (
                <ul className="mt-24 space-y-4">
                    {comments.map(comment => (
                        <li key={comment.id} className="p-4 rounded border shadow">
                            <div>
                                <h2>#{comment.id}</h2>
                                <strong>{comment.name}</strong> <span className="text-gray-600">({comment.email})</span>
                            </div>
                            <div className="mt-2">{comment.body}</div>
                        </li>
                    ))}
                </ul>
            )}
            {!isLoading && comments.length === 0 && <div>No comments</div>}
        </div>
    );
}

export default DataFetchDemo1