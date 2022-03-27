const http = require('http');
http.createServer(function (req, res) {
  res.write("online");
  res.end();
}).listen(8080);

const { Client, Intents } = require('discord.js'); //discord.jsからClientとIntentsを読み込む
const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); //インスタンスを作成する
client.on('ready',() => { //クライアントが起動したら
client.on('interactionCreate', async interaction => { //メッセージを受け取ったら
    if (!interaction.isCommand()) return; //コマンド以外は無視

    const { commandName } = interaction;

    if (commandName === 'ナルト') { //ナルトコマンド
        await interaction.reply('[舞踏会にて]\n\nトニー : まさか私が別人だと思っているの？\n\nマリア : 私はあなたがそうでないことを知ってる。\n\nトニー : それとも以前に会ったことがあるとでも？\n\nマリア : 私たちがそうでないことは知っている。\n\nトニー : 私は感じた...今までにないことが起こると思っていました。しかし、これはそれ以上のものだ。\n\nマリア : 私の手は冷たいわ。\n\nマリア : あなたの手もね。\n\nマリア : とても暖かい。\n\nトニー : とても美しい。\n\nマリア : 美しい。\n\nトニー : 信じられないくらいです。冗談じゃないのかい？\n\nマリア : 私はまだそのような冗談の言い方を学んでいないわ。今では一生できないと思う。\n\nベルナルド : 手を離せ、アメリカ人!\n\nマリア : ナルト！？\n\nベルナルド : 私の妹に近づかないでください。\n\nトニー : 妹？\n\nベルナルド: 彼が彼らの一員であることがわからなかったのですか？\n\nマリア：私には彼しか見えませんでした。\n\nベルナルド : 彼らが求めるものは一つプエルトリコ人の女の子に求めているものがあります。\n\nトニー : それは嘘だよ\n\nリフ：あとでね、トニー\n\nチノ：逃げろ\n\nトニー ：聞くなよ。\n\nベルナルド : 彼女は君の話を聞く前に僕の話を聞くよ。\n      \n: もし二人が解決したいなら...\n\n: 頼むよ、君たち！すべてがうまくいっていたのに。さあ、来てください。みんなで楽しく過ごそうじゃないか。\n\nマリア : ナルド...\n\nベルナルド : 彼女をここから連れ出してください。私たちは家に帰ります。\n\nマリア : ナルド、私の最初のダンスです。\n\nベルナルド : お願いです。私たちは家族です。さあ、行ってください。\n\nチノ : さあ、マリア。\n\nトニー : ああ、マリア...。\n\nベルナルド : お前には会いたくない。\n\nリフ : 君に話したいんだけどね。（二人だけになる）\n\nリフ : 戦術会議にあなたが欲しいのです。ジェッツとシャーク。\n\nベルナルド : 喜びは私のものです。\n\nリフ：外に出よう。\n\nベルナルド : あなたのような人がいると、ここの女性たちを一人にしておけないわ。あなたのような人がいると、女性を一人にしておけません。\n\nベルナルド : 真夜中に会おう。\n\nリフ : ドックのお菓子屋さん？その前にジャズはやめてね。 \n\nベルナルド : ルールは理解している。ネイティブボーイ。\n\nリフ : アイス！');
    } else if (commandName === 'naruto') { //narutoコマンド
        await interaction.reply('[at the ball]\n\nTony : Don\'t tell me you think I\'m someone else?\n\nMaria : I know you\'re not.\n\nTony : Or do you think we\'ve met before?\n\nMaria : I know we haven\'t.\n\nTony : I felt... I knew something was going to happen that had never happened before. But this is more than that.\n\nMaria : My hands are cold.\n\nMaria : So are your hands.\n\nMaria : Very warm.\n\nTony : So beautiful.\n\nMaria : Beautiful.\n\nTony : It\'s unbelievable. Are you kidding me?\n\nMaria : I haven\'t learned how to joke like that yet. I don\'t think I could ever do it now.\n\nBernardo : Get your hands off me, American!\n\nMaria : Naruto!\n\nBernardo : Stay away from my sister.\n\nTony : Your sister?\n\nBernardo : Didn\'t you see that he was one of them?\n\nMaria : He was all I could see.\n\nBernardo : There is one thing they are looking for in a Puerto Rican girl.\n\nTony : That\'s a lie.\n\nRiff : See you later, Tony.\n\nChino : Run.\n\nTony : Don\'t listen to her.\n\nBernardo : She\'ll listen to me before she listens to you.\n\n: If you two want to work this out...\n\n: Please, you guys! Everything was going so well. Come on, come on. Let\'s have a good time together, shall we?\n\nMaria : Naldo...\n\nBernardo : Please take her out of here. We\'re going home.\n\nMaria : Naldo, this is my first dance.\n\nBernardo : Please. We\'re a family. Now, please go.\n\nChino : Come on, Maria.\n\nTony : Oh, Maria...\n\nBernardo : I don\'t want to see you.\n\nRiff : I\'d like to talk to you. (It\'s just the two of us)\n\nRiff : I want you at the tactical meeting. Jets and Sharks.\n\nBernardo : The pleasure is mine.\n\nRiff : Let\'s go outside.\n\nBernardo : With someone like you, I can\'t leave the women here alone. I can\'t leave the women alone with someone like you.\n\nBernardo : I\'ll see you at midnight.\n\nRiff : The candy store on the dock? But first, don\'t jazz me up. \n\nBernardo : I understand the rules. Native Boy.\n\nRiff : Ice!');
    }
});
  console.log("起動完了"); //コンソール（黒い画面）に「起動完了」と表示
}); //セミコロンは省略できますがつけたほうがいいと思います

client.login(process.env.TOKEN);
