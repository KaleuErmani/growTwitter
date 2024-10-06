import { v4 as uuidv4 } from 'uuid'
import { _likes, _replies } from '../database/Tweets'


export interface Like {
    id: string, 
    username: string
}

export class Reply {
    constructor(public _username: string, public  _content: string){}
}

export class Tweet {
    private readonly id: string = uuidv4()
    private readonly likes: Like[] = []
    private readonly replies: Reply[] = []

    constructor(
      private _username: string,
      private  _content: string,
      private  _type: string
    ) {}

    reply(username: string, content: string) {
        const reply = new Reply(username, content)
        this.replies.push(reply)
        _replies.push(reply)
        console.log(`Resposta adicionada por ${username}: ${content}`)
    }

    like(id: string, username: string) {
        if (!this.likes.some(like => like.id === id)) {
            this.likes.push({id, username})
            _likes.push({id, username})
            console.log(`${username} curtiu o tweet.`)
        }
        else {
            console.log(`${username} já curtiu este tweet.`)
        }
    }

    show() {
        console.log(`@${this._username}: ${this._content}`)
        
        if (this.likes.length > 0) {
            const likedUsers = this.likes.map(like => `@${like.username}`).join(', ')
            console.log(`[${likedUsers} liked this]`)
        } else {
            console.log(`[0 likes]`)
        }
    
        this.showReplies()
    }

    showReplies() {
        if (this.replies.length > 0) {
            console.log("Respostas:")
            this.replies.forEach(reply => {
                console.log(` > @${reply._username}: ${reply._content}`)
            })
        } else {
            console.log("Sem respostas.")
        }
    }
}