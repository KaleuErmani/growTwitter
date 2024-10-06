import { User } from './models/User'
import { Tweet } from './models/Tweet'

// Criando 3 usuários
const user1 = new User('luan', 'luanzito', 'luan@gmail.com', 'senha123')
const user2 = new User('kauã', 'kauã', 'kauã@gmail.com', 'senha456')
const user3 = new User('Kaleu', 'kaleu.ermane', 'kaleu@gmail.com', 'senha789')

console.log('\n----- Usuários criados -----\n')

// Usuários seguindo uns aos outros
user1.follow(user2)
user1.follow(user3)
user2.follow(user1)
user3.follow(user2)

console.log('\n----- Tweets -----\n')

// Enviando 3 tweets
user1.sendTweet('Hello, world!', 'texto')
user2.sendTweet('Finalmente o twitter voltou!', 'texto')
user3.sendTweet('Até que enfim em', 'texto')

console.log('\n----- Adicionando likes aos tweets -----\n')

// Adicionando likes
const tweet1 = user1['_tweets'][0]
const tweet2 = user2['_tweets'][0]
const tweet3 = user3['_tweets'][0]

tweet2.like(user1['_id'], user1['_username']) 
tweet3.like(user2['_id'], user2['_username']) 
tweet1.like(user3['_id'], user3['_username']) 

console.log('\n----- Adicionando replies aos tweets -----\n')

// Adicionando replies
tweet1.reply(user2['_username'], 'Aprendendo linguagem nova?!') 
tweet2.reply(user3['_username'], 'Nossa, nem me fala') 
tweet3.reply(user1['_username'], 'siim') 

console.log('\n----- Mostrando o feed de Luan -----\n')
user1.showFeed() 

console.log('\n----- Mostrando os tweets de Kauã -----\n')
user2.showTweets() 

console.log('\n----- Mostrando o feed de Kaleu -----\n')
user3.showFeed() 
