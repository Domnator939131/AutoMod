const {Client, Intents, MessageEmbed, Collection, MessageSelectMenu, RichPresenceAssets} = require('discord.js')

const client =  new Client({ intents: ["GUILDS",
"GUILD_MEMBERS",
"GUILD_BANS",
"GUILD_INTEGRATIONS",
"GUILD_WEBHOOKS",
"GUILD_INVITES",
"GUILD_VOICE_STATES",
"GUILD_PRESENCES",
"GUILD_MESSAGES",
"GUILD_MESSAGE_REACTIONS",
"GUILD_MESSAGE_TYPING",
"DIRECT_MESSAGES",
"DIRECT_MESSAGE_REACTIONS",
"DIRECT_MESSAGE_TYPING",]})

const config = require('./config.json')

client.on('ready', async() => {

    console.log(`Bot is online`)

    setInterval(() => {
        client.user.setActivity(`you ruin your life`, { type: 'WATCHING' })
    }, 6000); 

    setInterval(() => {
        const user = client.users.fetch('930680380032417873')
        user.send('Listen here you dumb wat, I am future adhirsh and I want you to learn from textbook and not watch random bullshit videos of 50 year old aunties that say utter bullshit, I am politely asking you to do it otherwise you are gonna fail hindi, at-least learn Hindi and get a 60 to make future adhirsh proud cause his overall grade won’t be affected by Hindi')
    }, 10000); 

    client.user.setStatus("dnd")

})

//  ass hair
/*

client.on('messageCreate', async (message) => {

    const messages = message.content.toLowerCase()

    if(messages.includes("ass" && "hair")) {

        if(message.author.id === client.user.id) return

        message.reply(`I have a lot of ass hair? Im a 26 years old male and my ass have a lot of hair and its annoying me,everytime i shit,my anus is filled with poop and hair,the problem is when i want to wash out the poop it gets stuck in my ass hair and i dont even notice,it got to the point were all my underwears are full with shit,and its also very annoying when i try to finger myself,pls help me,how to stop ass hair pls?? \nI hate taking shits. Taking shits is the worst function of the human organism after sex. You have to sit on the most uncomfortable seat ever, then you have to go through so much pain to push the shit out of your asshole (not to mention sometimes they get stuck in there). And as if those weren't enough then you have to wipe, you have to take your hand along with toilet paper and shove it up your asshole, this process can sometimes take minutes out of your life, it fucking sucks.
        
       \nTL;DR I hate shitting \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this servers if you have any questions or concerns.*`)
    }
})

// voting

client.on('messageCreate', async (message) => {

    const messages = message.content.toLowerCase()

    if(messages.includes("voting" || "vote" || "voted" || "votes")) {

        if(message.author.id === client.user.id) return

        message.reply(`So I was waiting in line to vote when all of a sudden this voting “official” came up to me and said that there was something wrong with my voter registration and asked me to follow him to the back. When we went around back he said that I had to take off my pants and show my cock because penis size is the most accurate way to confirm voter identity. Because I thought he was a voting official I swiftly removed my pants and underwear to show him my member. After he fondled it for a bit he said it was good and I could go back into the line. It was only after I voted I realized that he forgot to check my balls too!!! He was obviously not certified to check such an area and I immediately contacted the security guards about his presence. Please do not fall for any tricks like I did! stay safe and happy voting!
        \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)

    }
})

client.on('messageCreate', async (message) => {

    const messages = message.content.toLowerCase()

    if(messages.includes("hog" || "pig")) {

        if(message.author.id === client.user.id) return
        
        message.reply(`okay so basically there's this guy and uhh

        ⠀⠀⠘⡀ HOG RIDAAAAAA ⠀⠀ ⠀⠀⠀  ⡜⠀⠀⠀ ⠀⠀
        ⠀  ⠑⡀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡔⠁⠀⠀⠀ 
        ⠀⠀⠀⠀⠈⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠊⠀⠀
        ⠀⠀⠀ ⠀⠀⠀⢸⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠤⠄⠒⠈⠀⠀⠀⠀⠀⠀⠀⠀ 
        ⠀⠀⠀⠀⠀⠀⠀⠘⣀⠄⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠉⢈⠩⢙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⠠⠀⠀⠨⠐⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢐⠐⠌⡌⢄⢐⢈⠔⡝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⡏⠉⡀⠐⡀⢁⠈⠐⠱⠑⡑⠈⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⢗⠀⠀⠐⡠⡛⠔⡁⢜⡔⡬⢎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⡿⠡⠀⠀⠀⠀⠂⠁⠀⠄⢂⠈⠂⢂⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⡿⢟⠩⠐⡀⠀⠀⠀⠐⠐⠁⠓⠒⠒⢀⠁⢐⢝⢟⢿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⠫⠡⠡⠨⢀⠂⠠⠀⠀⢁⠑⡱⠛⠗⡓⢂⠠⢸⢸⢨⠣⡝⣻⣿⣿⣿⣿⣿⣿ 
        ⣿⢏⢐⢁⠊⢌⠐⡈⠄⠠⠀⠀⠀⠀⠁⠑⠈⠀⢄⢕⠸⡨⠪⡪⡘⣻⣿⡿⣿⣿⣿ 
        ⣿⢂⠂⡂⠅⡂⠅⡐⠨⢐⠐⠠⠠⡀⢄⠠⡠⡡⡱⡐⠕⢌⢊⢆⢣⢒⠽⢿⣿⣿⣿ 
        ⠣⢂⠂⠄⠡⠐⠐⠈⠌⡐⠨⡈⠢⠨⡂⢌⢂⠆⡪⠨⡊⠂⡂⠢⢡⣢⣣⡣⣍⢿⣿ 
        ⠨⢂⢂⠁⡀⠀⠀⠁⠐⠈⠐⠈⢈⠈⠐⡀⠄⠁⠌⠈⠔⣄⡀⠠⡑⡂⠆⠢⢂⠑⠽ 
        ⡨⠐⠀⠀⠀⢠⡎⡀⠀⠀⠄⠈⡀⠌⠐⠠⠈⠄⡁⠂⡀⡫⠑⣑⠀⢂⠌⠄⢕⠀⠨ 
        ⠺⡪⠢⡀⠀⠞⢇⢂⠀⠂⡀⠠⠀⠄⠁⠌⠨⠀⢄⠢⡁⢂⢿⡟⡀⠀⠈⠈⡀⠂⣰ 
        ⢀⢀⠀⠄⠀⠀⡐⠀⡈⠄⡐⠅⡊⠌⢌⠄⡕⡑⡁⢂⠂⢂⠸⣿⡄⠀⠈⣠⣴⣿⣿ 
        ⢐⠔⠠⠀⠀⡐⠠⢈⠢⢑⠄⠑⢈⠊⡂⡱⢁⣂⢌⢔⢌⢄⠀⠹⢀⣺⡿⣟⢿⣿⣿ 
        ⢀⠡⠁⠂⠐⠠⠈⠄⢈⠠⢈⢢⡣⣗⠕⠄⣕⢮⣞⣞⣗⣯⢯⡷⡴⣹⡪⣷⣿⣿⣿ 
        ⠊⠄⠠⠠⠡⠈⠠⢐⠠⡊⡎⣗⢭⢐⠹⡹⣮⡳⡵⣳⣻⢾⣻⣽⣻⣺⣺⣽⣿⣿⣿ 
        ⣨⣾⢐⠰⠐⠅⡂⡂⢕⢜⢜⢵⢹⢑⢔⠨⢘⠸⡹⡵⣯⣻⢽⣳⣻⣺⢞⡿⣿⣿⣿ 
        ⣿⣿⡔⠠⢈⠐⠐⢠⢱⢸⢸⢸⢸⠰⡡⢘⢔⢕⠝⢮⣳⢽⢝⡾⡵⡯⣏⠯⣿⣿⣿ 
        ⣿⣿⣗⢅⢢⠠⠡⠢⡱⡑⡕⡕⢅⠣⡊⢨⢪⡣⡣⡂⡬⡳⢽⢽⢽⢽⣞⣧⠙⣿⣿ 
        ⡻⣿⡯⡪⠢⡡⠡⢑⢌⠪⡪⡊⠆⢌⠪⢐⢕⢱⢱⢱⢱⢱⢙⢮⡫⡟⣞⢮⣳⠙⣿ 
        ⠊⣿⣯⠪⡊⠄⢅⠂⢂⠁⢇⢇⢃⠂⢕⠐⠌⡲⡰⡡⣇⠇⢇⢕⠪⠉⠂⠅⠂⡑⠹ 
        ⣸⢿⣳⢱⠨⡐⡽⡿⡶⡾⡬⡢⢂⠅⡢⢡⣌⠐⠈⢎⢎⢎⢔⠠⠡⠠⠠⠡⡁⡂⠡ 
        ⡯⡯⡇⢅⠕⠠⢱⢹⡙⢮⢹⠨⡂⡂⢇⠌⠮⡳⠅⡂⢕⠡⡑⠠⢁⢁⣡⣡⣢⣶⣿ 
        ⣗⢽⢌⡢⡡⡡⡸⡢⡣⡣⡱⡑⠔⡈⢎⢆⢂⠂⠅⣢⡳⣽⡐⢅⢂⣊⣿⣿⣿⣿⣿ 
        ⣯⢯⢷⢽⢮⢯⣺⣪⢞⡮⣳⢘⠔⢌⢜⣞⣖⣮⣻⢮⣯⢷⣿⣻⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣾⣷⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async (message) => {

    const messages = message.content.toLowerCase()
    if(messages.includes("fnaf")) {

        if(message.author.id === client.user.id) return

        message.reply(`My Fnaf rap

        YO YO YO listen up to my new rap! I just got a freddy hat!
        
        (HOT GIRL SINGING) oH YeAhhhh ITS FREDDY FAZBEARS PIZZA! WHEN YOU GET SOME PIzZA! AND A BIG. PIECE. OF ASSSSSS! awesome music plays
        
        Me: ya my name is rappa 3000 and ill tel ya da story of fredy pizzaria with a freddy goldy and a hot foxy fucking chica all day long, With a hudge dong, and den the security guard named chonged put his dong in BONNIE!
        
        girl takes off shirt and sings OH YEAAAAAAHHH ITS FREDDY FAZBER PIZZZAAA! WHEN U GET SOME PIZZA AND A. BIG. PIECE. OF. QSS
        
        me strokes dong mmmm ya itd fredy fazber pizza with a huge dings and blongs and bong and frogsssss! with scary sexy animatrons! \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async (message) => {

    const messages = message.content.toLowerCase()

    if(messages.includes("taiwan" || "tianemen")) {

        if(message.author.id === client.user.id) return
        message.reply(`ATTENTION CITIZEN! 市民请注意!

        ⣿⣿⣿⣿⣿⠟⠋⠄⠄⠄⠄⠄⠄⠄⢁⠈⢻⢿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⡀⠭⢿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⡟⠄⢀⣾⣿⣿⣿⣷⣶⣿⣷⣶⣶⡆⠄⠄⠄⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⡇⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⢸⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣇⣼⣿⣿⠿⠶⠙⣿⡟⠡⣴⣿⣽⣿⣧⠄⢸⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣾⣿⣿⣟⣭⣾⣿⣷⣶⣶⣴⣶⣿⣿⢄⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣿⡟⣩⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣹⡋⠘⠷⣦⣀⣠⡶⠁⠈⠁⠄⣿⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣍⠃⣴⣶⡔⠒⠄⣠⢀⠄⠄⠄⡨⣿⣿⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⣿⣿⣿⣦⡘⠿⣷⣿⠿⠟⠃⠄⠄⣠⡇⠈⠻⣿⣿⣿⣿ 
        ⣿⣿⣿⣿⡿⠟⠋⢁⣷⣠⠄⠄⠄⠄⣀⣠⣾⡟⠄⠄⠄⠄⠉⠙⠻ 
        ⡿⠟⠋⠁⠄⠄⠄⢸⣿⣿⡯⢓⣴⣾⣿⣿⡟⠄⠄⠄⠄⠄⠄⠄⠄ 
        ⠄⠄⠄⠄⠄⠄⠄⣿⡟⣷⠄⠹⣿⣿⣿⡿⠁⠄⠄⠄⠄⠄⠄⠄⠄
        ATTENTION CITIZEN! 市民请注意!
        
        This is the Ministry of State Security. 您的浏览记录和活动引起了我们的注意 YOUR INTERNET ACTIVITY HAS ATTRACTED OUR ATTENTION. 同志們注意了 you have been found protesting in the server!!!!! 這是通知你，你必須認同我們將接管台灣 serious crime 以及世界其他地方 100 social credits have been deducted from your account 這對我們未來的所有下屬來說都是重要的機會 stop the protest immediately 立即加入我們的宣傳活動，提前獲得救贖 do not do this again! 不要再这样做! if you do not hesitate, more social credits ( -11115 social credits )will be subtracted from your profile, resulting in the subtraction of ration supplies. (由人民供应部重新分配 ccp) you'll also be sent into a re-education camp in the xinjiang uyghur autonomous zone.
        
        为党争光! Glory to the CCP! \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)

    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("based")) {
        if(message.author.id === client.user.id) return
        message.reply(`Based? Based on what? On your dick? Please shut the fuck up and use words properly you fuckin troglodyte, do you think God gave us a freedom of speech just to spew random words that have no meaning that doesn't even correllate to the topic of the conversation? Like please you always complain about why no one talks to you or no one expresses their opinions on you because you're always spewing random shit like poggers based cringe and when you try to explain what it is and you just say that it's funny like what? What the fuck is funny about that do you think you'll just become a stand-up comedian that will get a standing ovation just because you said "cum" in the stage? HELL NO YOU FUCKIN IDIOT, so please shut the fuck up and use words properly. \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)

    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()

    if(messages.includes("auto" || "mod")) {
        if(message.author.id === client.user.id) return
        message.reply(`HEY, EVERY⠀⠀ ⠀⠀⠀ !!!

        IT'S ME!!!
        
        EV3RY BUDDY'S FAVORITE [[Number 1 Rated Moderator 2022]] \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)

    }
})

client.on('messageCreate', async (message) => {
    const messages = message.content.toLowerCase()

    if(messages.includes("brit")) {
        if(message.author.id === client.user.id) return
        message.reply(`OI OI OI!

        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀ 
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣠⣾⣷⣿⣿⣿⣷⣄⠄⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⢅⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⡀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠘⢿⣿⠁⣩⣿⣿⣿⠿⣿⡿⢿⣿⣿⣿⠛⣿⡟⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢷⣾⣿⣋⡡⠤⣀⣷⣄⠠⠤⣉⣿⣷⣽⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⡻⣾⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣟⢋⣰⣯⠉⠉⣿⢄⠉⢻⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⢿⣷⣶⠤⠔⣶⣶⠿⢾⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⢀⡀⠠⠀⠂⠀⠀⣧⡚⢿⣿⡶⢶⡿⠟⣠⣿⣿⠀⠀⠀⠀⠄⣀⡀⠀⠀ 
        ⠒⠒⠋⠁⠀⠀⠀⠀⠀⠀⢿⣷⣄⡀⠀⠀⠀⣈⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⠒ 
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠒⠐⠺⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢿⣋⣀⡄⠠⣢⣀⣩⣛⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        WOTS ALL THIS???
        
        🇬🇧🇬🇧🇬🇧
        
        YER POISTIN LOICENSE HAS EXPOIRED!!!! 🇬🇧🇬🇧🇬🇧🇬🇧
        
        ONE HUNNIT TESCO CLUBCARD POINTS 'AVE BIN DEDUCTED FROM YER ACCOUN'!!!!! 🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧
        
        YER THREE QUID MEAL DEAL IS GONNA BE A FIVER FROM NOW ON!!!! 🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧
        
        YER WILL ALSO ONLY BE ABLE TER CHOOSE FROM A CHICKEN OR 'AM SANDWICH!!!! 🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧
        
        FAILURE TO RENEW YER LOICENCE IS GONNA RESUL' IN THA LOSS OV MORE CLUBCARD POINTS!!!!!!!! 🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧
        
        🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧🇬🇧 \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)

    }



})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()

    if(messages.includes("1984")) {
        if(message.author.id === client.user.id) return
        message.reply(`LiTeRaLlY nInEtEeN eIgHtY-fOuR

        George Orwell, 1948 \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)

    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()

    if(messages.includes("sex")) {
        if(message.author.id === client.user.id) return
        message.reply(`Daily Klutz Fact #24:

        Klutz has better things to do with his life than have sex with you.
        
        Such as fucking your dad. \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()

    if(messages.includes("ccp")) {
        if(message.author.id === client.user.id) return
        message.reply(`Let us all stand for the national anthem.

        三民主義，吾黨所宗；
        以建民國，以進大同。
        咨爾多士，為民前鋒；
        夙夜匪懈，主義是從。
        矢勤矢勇，必信必忠；
        一心一德，貫徹始終。
        Praise be to 中华民国政府! Down with the illegitimate capitalist 中国共产党, fraudulent usurpers of 大陸!
        
        Glory to the 中華民國! \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()

    if(messages.includes("dream")) {
        if(message.author.id === client.user.id) return
        const embed = new MessageEmbed
        embed.setColor('#2a2d2e')
        embed.setDescription(`It was a saturday afternoon, and I was exhausted after an intense 17-part masturabation session to dream minecraft manhunt, when i suddenly had the urge to go outside. I was scared. It's been so long since i've left the warmth of my parents basement with my dream body pillows. I didnt know what to expect. Clutching my dream figurine in front of my chest, i pried open the door to the outside world. The gleaming sun blared through the door, bequeathing a brilliant warmth on my cum-covered boxers. I quaverly took a step outside. My body flintched from the strange feel of the dirt under my feet. And then i saw it. The lustrous field of grass, covered in a light sprinkle of water from the noon rain shower. And then i realized. Dream... grass... the trees... it was all coming together. Grass is green, just like Dream. Dream is everpresent, in the grass, the flowers, He was there. I immediately new what to do next. I flinged off my clothes faster than the speed at which i would click on a new dream rule 34 post. My dick was already throbbing as i leaped onto the field of grass, dorito dust stained shirt getting carried away by the wind. I dug a small hole in the ground, and passionately thrust my 7-inch erect cock into it. I knew, this was Dream. His spirit was in this grass, and he felt my dick in his man pussy as i fucked that grass. I lost track how long i was there. Hours went by, day turned to night, but it didnt matter. I was finally together, with Dream. Nothing could separate us. I took a long stem of a flower, and forced it in my asshole. I imagined it being Dream's hot penis being lustfully forced into me in bed. I stayed there on my front yard for god knows how long. Until my butt was sore, balls drier than the Saharan desert after a long drought. The lawn looked like there was a layer of fresh snow on a Christmas morning. Trudging indoors, i had a enormous smile stretching across my face. I couldn't wait until tomorrow, when i may go outside again and be with Dream.
\n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
        message.reply({embeds:[embed]})
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()

    if(messages.includes("fortnite" && "player")) {
        if(message.author.id === client.user.id) return
        message.reply(`Hello, concerned father here. My son has recently got into the game called Fortnite? I've spent well over $500 on this game and its becoming a problem. Apparently the game is down right now and its causing a lot distress for my child. He keeps taking my newspaper and tries to "full piece" me. I don't know what this means but I'm starting to think its something associated with the devil. He won't come with us anywhere unless we take a "launch pad" to get there. Its starting to get worse by the hour and I don't know how much longer I can take this. His legs, arms, and hands are shaking violently yet he refuses to take any type of medicine unless its a "big pot" or "chuggies." Someone please help me. \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("cat" && "girl")) {
        if(message.author.id === client.user.id) return
        message.reply(`Wowwwww, you meow like a cat! That means you are one, right? Shut the fuck up. If you really want to be put on a leash and treated like a domestic animal then that’s called a fetish, not “quirky” or “cute”. What part of you seriously thinks that any part of acting like a feline establishes a reputation of appreciation? Is it your lack of any defining aspect of personality that urges you to resort to shitty representations of cats to create an illusion of meaning in your worthless life? Wearing “cat ears” in the shape of headbands further notes the complete absence of human attribution to your false sense of personality, such as intelligence or charisma in any form or shape. Where do you think this mindset’s gonna lead you? You think you’re funny, random, quirky even? What makes you think that acting like a fucking cat will make a goddamn hyena laugh? I, personally, feel extremely sympathetic towards you as your only escape from the worthless thing you call your existence is to pretend to be an animal. But it’s not a worthy choice to assert this horrifying fact as a dominant trait, mainly because personality traits require an initial personality to lay their foundation on. You’re not worthy of anybody’s time, so go fuck off, “cat-girl”. \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("fem" && "boy")) {
        if(message.author.id === client.user.id) return
        message.reply(`femboy amogus

        ⣀⣤⣤⣤⣤⣤⣤⣀
    ⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀
   ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀
 ⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
 ⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⠛⠛⠛⠿⠿⣿⣷⣄
 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷
⢀⣠⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀⠀⠀⢸⣿⣇
⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣤⣤⣤⣤⣤⣤⣴⣶⣿⣿⡿
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁
⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
⠙⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢐⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢻⣿⣿⣿⡿⣟⣯⣿⠟⡉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠻⢿⣽⣿⣿⣿⠿⠿⠟⠒⠉⠉⠉⠉⠉⠉⠉⠙⠋
  ⠈⠿⠋⠉⢀⣠⣤⣤⡔⣄
     ⣴⠾⠛⠋⠉⠀⢀⣀⠐⣤⣶⣶⡤⢤⣤
    ⣤⣰⣶⣾⣿⣿⣿⣆⠀⣀⣀⡀⣀⡀
     ⠉⠉⠀⢀⢀⣀⠀⣀⣈⡿⠿⠿⠽⠃
     ⠛⠛⠿⠿⠿⠿⠾⠟⢁⣀⡴⣦⠆
    ⢦⣤⣀⣀⠀⠀⠀⠀⢘⣿⣍⡷⠆
   ⢶⣄⠈⠉⠛⠛⠿⠓⠀⠉⠋⠉⣀
  ⣧⡀⠙⠻⢶⣶⡤⠀⠀⠛⠶⠾⠼⠋
 ⣆⠈⠻⣶⣤⡀⠀⠀⢸⠿⣶⣦⣤⣠⣾
 ⢠⠙⢷⣤⣀⠈⠁⠀⠀⢠⣤⣀⠈⠉⠈
 ⡌⢧⣀⠉⠛⠃⠀⠀⠀⠀⠉⠛⠿⠿⠻⠃
⠰⢳⣄⠙⠛⢋⠁⠀⠀  ⠘⠿⣴⣤⣄⣤⡄
⣄⡙⠛⠋⠀⠀⠀⠀  ⠰⣤⣀⠉⠉⠉
⢀⢠⡈⠉⠉⠀⠀⠀⠀⠀ ⢀⡈⠙⠛⠛⠛⠁
⠈⢦⡉⠛⡁⠀⠀  ⠀   ⠈⠻⠷⣶⣦⡆
⡈⢷⣌⠙⠛⠁ ⠀ ⠀⠀   ⠰⣦⣄⣀⣀⡀
⠈⢷⣄⡉⠛⠛⠀⠀  ⠀⠀⠀   ⢀⠈⠙⠛⠛
⢦⣀⠉⠛⠷⠖⠀⠀⠀⠀⠀⠀    ⠘⠿⣶⣦⡄
⣠⣀⠙⠳⠶⠶⠀⠀⠀⠀⠀⠀⠀⠀    ⢠⣀⣀⣀
⠙⠻⢿⣶⣤⣤⠀⠀⠀⠀⠀⠀     ⢠⠛⠛⠻⠿
⣦⣄⠈⠉⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠈
⢹⣿⣿⣶⡆⠀⠀⠀⠀⠀⠀⠀          ⠺⠿⠿⠿⠁
⠙⠻⠟⠁⠀⠀⠀⠀⠀              ⢀⣤⣤⣤⣤⡄
                ⠈⣀⣀⣀⣀⠁ \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("among" && "us" )) {
        if(message.author.id === client.user.id) return
        message.reply(`AMONG US Funny Moments! How to Free Robux and VBUCKS in SQUID GAME FORTNITE UPDATE! (NOT CLICKBAIT) MUKBANG ROBLOX GAMEPLAY TUTORIAL (GONE WRONG) Finger Family Learn Your ABCs at 3AM! Fortnite Impostor Potion! MrBeast free toys halal gameplay nae nae download حدث خطأ في الساعة 3 صباحًاحدث خطأ في الساعة 3 صباحًاحدث خطأ في الساعة 3 صباحًا Super Idol的笑容都没你的甜八月正午的阳光都没你耀眼热爱 105 °C的你滴滴清纯的蒸馏水 amongla download Meme Compilation (POLICE CALLED) (GONE WRONG) (GONE SEXUAL) (NOT CLICKBAIT) Minecraft Series Lets Play Videos Number 481 - Poop Funny Hilarious Minecraft Roblox Fails for Fortnite - How to install halal minecraft cheats hacks 2021 still works (STILL WORKS 2018) Impostor Gameplay (Among Us) Zamn \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("nft" || "screenshot")) {
        if(message.author.id === client.user.id) return
        message.reply(`Dude I own this NFT. Do you really think that you can get away with theft when you’re showing what you stole from me directly to my face? My lawyer will make an easy job of this case. Prepare to say goodbye to your luscious life and start preparing for the streets. I will ruin you. \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("moron")) {
        if(message.author.id === client.user.id) return
        message.reply(`Watch your language! \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("daddy")) {
        if(message.author.id === client.user.id) return
        message.reply(`hello guys i need help. i was in science class… i got up to sharpen my dream pencil, and then my dream themed dildo fell out of my ass. i always keep it down there cause I like to imagine daddy dream fucking me 24/7 and it feels so good. anyways it fell out of my ass and out of my pants and my dreamphobic classmates started laughing and making fun of me. the teacher sent me to the office and i had to explain what happened. the principal suspended me from school for a week!!! this is unacceptable. just because i love dream is not a reason to harass me \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("vaccine" || "covid")) {
        if(message.author.id === client.user.id) return
        message.reply(`I have gotten the covid vaccine about 20 times now. 4 Pfizer, 12 moderna, 4 Johnson. Once I got my first vaccine, I started cravings for it. There is something so great knowing I am reducing the spread of the coronavirus with each of them. I am feeling so empowered. I think I may be addicted ngl 😅. At least it won't kill me. \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

client.on('messageCreate', async(message) => {
    const messages = message.content.toLowerCase()
    if(messages.includes("smegsy")) {
        if(message.author.id === client.user.id) return
        message.reply(`Are You Looking To SEXT With Local Near You Check This Out: https://rightromanticdating.life/?u=65lpd0b&o=ur2wqyc !!! \n \n*I am a bot, and this action was performed automatically. Please contact the moderators of this server if you have any questions or concerns.*`)
    }
})

*/

client.on('messageCreate', async(message) => {
    const channel = message.guild.channels.cache.find(c => c.id === '939532983134732338')
    if(message.content.startsWith("v!cm")) {
        const ur = message.content.replace("v!cm", "")
        channel.send(`${ur}`)
        
    }
})

process.on("rejectionHandled"        , ( err ) => console.error( err ) );
process.on("unhandledRejection"      , ( err ) => console.error( err ) );
process.on("uncaughtException"       , ( err ) => console.error( err ) );
process.on("uncaughtExceptionMonitor", ( err ) => console.error( err ) ); 

client.login(config.token)



