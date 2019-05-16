import { ADD_POST } from './actionsTypes'
import axios from 'axios'

export const addPost = post =>
{
    return dispatch =>
    {
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-fir-app-43252.cloudfunctions.net',
            method: 'post',
            data:{
                image: post.image.base64
            }
        }).catch((err) => console.log(err)).then(resp => {
            post.image = resp.data.imageUrl
            axios.post('/posts.json', { ...post }).catch(err => console.log(err)).then(res => console.log(res.data))
        })
            
            
    }
    /*
    return {
        type: ADD_POST,
        payload: post
    }
    */
}