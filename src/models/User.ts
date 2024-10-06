import { v4 as uuidv4 } from 'uuid'
import { Tweet } from './Tweet'
import { _following, _tweets } from '../database/Users'

export class User {
    private readonly _id: string = uuidv4()
    private _tweets: Tweet[] = []
    private _following: User[] = []

    constructor(
        private _name: string,
        private _username: string,
        private _email: string,
        private _password: string
      ) {}

      sendTweet(content: string, type: string): void {
        const newTweet = new Tweet(this._username, content, type) 
        this._tweets.push(newTweet)
        _tweets.push(newTweet)
        console.log(`${this._username} twitou: "${content}"`)
      }

      follow(user: User) {
        if(this._id === user._id) {
            console.log(`Você não pode seguir a si mesmo.`)
            return
        }

        if(!this._following.includes(user)) {
            this._following.push(user)
            _following.push(user)
            console.log(`${this._username} agora está seguindo ${user._username}.`)
        } else {
            console.log(`${this._username} já está seguindo ${user._username}.`)
        }
      }

      showFollowing(): void {
        if (this._following.length === 0) {
          console.log(`${this._username} não está seguindo ninguém.`)
          return
        }

        console.log(`${this._username} está seguindo:`)
        this._following.forEach(user => console.log(`- ${user._username}`))
      }

      showFeed(): void {
        console.log(`--------------------Feed de ${this._username}--------------------`)
    
        this._tweets.forEach(tweet => {
            tweet.show()
            console.log('--------------------------------------------------------------')
        })
    
        this._following.forEach(user => {
            user._tweets.forEach(tweet => {
                tweet.show()
                console.log('--------------------------------------------------------------')
            })
         })
        }
    
      showTweets() {
        if(this._tweets.length === 0) {
            console.log(`${this._username} não possui tweets.`)
            return
        }
        
        console.log(`---------Feed de: ${this._username}---------`)
        this._tweets.forEach(tweet => {
            tweet.show()
        })
    }   
}
